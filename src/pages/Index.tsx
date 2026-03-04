import Navbar from "@/components/workshop/Navbar";
import HeroSection from "@/components/workshop/HeroSection";
import TopicsSection from "@/components/workshop/TopicsSection";
import ScheduleSection from "@/components/workshop/ScheduleSection";
import RegisterSection from "@/components/workshop/RegisterSection";
import Footer from "@/components/workshop/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TopicsSection />
      <ScheduleSection />
      <RegisterSection />
      <Footer />
    </div>
  );
};

export default Index;
