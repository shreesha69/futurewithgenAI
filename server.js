import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Path to registrations database file
const registrationsPath = path.join(__dirname, "registrations.json");

// Initialize registrations file if it doesn't exist
if (!fs.existsSync(registrationsPath)) {
  fs.writeFileSync(registrationsPath, JSON.stringify([]));
}

// Email transporter configuration
// Update these with your email service credentials
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Function to read registrations
const getRegistrations = () => {
  const data = fs.readFileSync(registrationsPath, "utf-8");
  return JSON.parse(data);
};

// Function to save registrations
const saveRegistration = (registration) => {
  const registrations = getRegistrations();
  registrations.push({
    ...registration,
    registeredAt: new Date().toISOString(),
  });
  fs.writeFileSync(registrationsPath, JSON.stringify(registrations, null, 2));
};

// Function to check if email exists
const emailExists = (email) => {
  const registrations = getRegistrations();
  return registrations.some(
    (reg) => reg.email.toLowerCase() === email.toLowerCase()
  );
};

// Registration endpoint
app.post("/api/register", async (req, res) => {
  try {
    const { name, email, designation, department, contact } = req.body;

    // Validate required fields
    if (!name || !email || !designation || !department || !contact) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Check if email already registered
    if (emailExists(email)) {
      return res.status(409).json({
        message: "You're already registered with this email",
      });
    }

    // Save registration
    const registration = {
      name,
      email,
      designation,
      department,
      contact,
    };

    saveRegistration(registration);

    // Send confirmation email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER || "noreply@futurewithmensagam.com",
      to: email,
      subject: "Workshop Registration Confirmation - Future with Mensagam",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333; text-align: center;">Thank You for Registering!</h1>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #666; margin-top: 0;">Registration Details</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Designation:</strong> ${designation}</p>
            <p><strong>Department:</strong> ${department}</p>
            <p><strong>Contact:</strong> ${contact}</p>
          </div>
          
          <div style="background: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="color: #1976d2; margin-top: 0;">Workshop Details</h2>
            <p><strong>Date:</strong> 9–13 March</p>
            <p><strong>Time:</strong> 7:00–8:00 PM IST</p>
            <p><strong>Mode:</strong> Online</p>
          </div>
          
          <p style="color: #666; line-height: 1.6;">
            We're excited to have you join us for this exclusive Generative AI Workshop. 
            A joining link and further instructions will be sent to you soon.
          </p>
          
          <p style="color: #999; font-size: 12px; text-align: center; margin-top: 30px;">
            If you have any questions, please reach out to us at our support email.
          </p>
        </div>
      `,
    };

    // Send confirmation email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER || "noreply@futurewithmensagam.com",
      to: process.env.ADMIN_EMAIL || "admin@futurewithmensagam.com",
      subject: `New Workshop Registration - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333;">New Workshop Registration</h1>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Designation:</strong> ${designation}</p>
            <p><strong>Department:</strong> ${department}</p>
            <p><strong>Contact:</strong> ${contact}</p>
            <p><strong>Registered At:</strong> ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    };

    // Send emails
    try {
      await transporter.sendMail(userMailOptions);
      console.log(`Confirmation email sent to ${email}`);
    } catch (emailError) {
      console.error("Error sending user email:", emailError);
      // Don't fail the registration if email fails in development
    }

    try {
      await transporter.sendMail(adminMailOptions);
      console.log(`Admin notification sent for ${email}`);
    } catch (emailError) {
      console.error("Error sending admin email:", emailError);
    }

    res.status(201).json({
      message: "Registration successful! Confirmation emails sent.",
      data: registration,
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({
      message: "An error occurred during registration. Please try again.",
      error: error.message,
    });
  }
});

// Get all registrations (admin endpoint)
app.get("/api/registrations", (req, res) => {
  try {
    const registrations = getRegistrations();
    res.json({
      count: registrations.length,
      registrations,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching registrations",
      error: error.message,
    });
  }
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Server is running" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
