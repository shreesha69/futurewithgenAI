import Navbar from "@/components/workshop/Navbar";
import HeroSection from "@/components/workshop/HeroSection";
import TopicsSection from "@/components/workshop/TopicsSection";
import ScheduleSection from "@/components/workshop/ScheduleSection";
import RegisterSection from "@/components/workshop/RegisterSection";
import FaqSection from "@/components/workshop/FaqSection";
import ExpertsSection from "@/components/workshop/ExpertsSection";
import TestimonySection from "@/components/workshop/TestimonySection";
import Footer from "@/components/workshop/Footer";
import PageLoader from "@/components/workshop/PageLoader";
import MouseTracker from "@/components/workshop/MouseTracker";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageLoader />
      <MouseTracker />
      <Navbar />
      <HeroSection />
      <TopicsSection />
      <ScheduleSection />
      <RegisterSection />
      <FaqSection />
      <ExpertsSection />
      <TestimonySection />
      <Footer />
    </div>
  );
};

export default Index;
