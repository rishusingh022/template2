import Navbar from "./components/Navbar";
import json_data from "../data.json";
import HeroSection from "./components/HeroSection";
import AddCard from "./components/AddCard";
import AskQuestion from "./components/AskQuestions";
import Footer from "./components/Footer";
import Features from "./components/Feature";
import Service from "./components/Service";

const config = json_data;
export default function Home() {
  return (
    <div className="bg-white">
      <Navbar
        logo={config?.landingPage.lightLogo}
        navbarItems={config?.landingPage.navbar}
      />
      <HeroSection
        title={config?.landingPage?.title}
        title_highlight={config?.landingPage?.title_highlight}
        subtitle={config?.landingPage?.subtitle}
      />
      <Service serviceData = {config?.landingPage.services} />
      <Features featureData = {config?.landingPage.featureSection}/>
      <AddCard add_card={config?.landingPage?.add_card} />
      <AskQuestion />
      <Footer />
    </div>
  );
}
