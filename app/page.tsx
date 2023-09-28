import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cta from "./components/Cta";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Features from "./components/Feature";
import USP from "./components/USP";
import Pricing from "./components/Pricing";

import template2Data from "../data.json";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar
        logo={template2Data?.navbar.lightLogo}
        navbarItems={template2Data?.navbar.navitems}
      />
      <Hero
        title={template2Data?.hero_section?.headline}
        title_highlight={template2Data?.hero_section?.extraHeadline}
        subtitle={template2Data?.hero_section?.sub_headline}
      />
      <USP services= {template2Data?.USP.USPs} title={template2Data?.USP.title} />
      <Features title={template2Data?.feature?.title} subtitle={template2Data?.feature?.subtitle} features={template2Data?.feature?.features}/>
      <Pricing title={template2Data?.choose_plan?.title} choose_plan={template2Data?.choose_plan?.pricing} />
      <Cta add_card={template2Data?.add_card} />
      <Newsletter title={template2Data?.waitlist?.title} extraTitle={template2Data?.waitlist?.extraTitle} subtitle={template2Data?.waitlist?.subtitle} />
      <Footer socials={template2Data?.footer?.socials} />
    </div>
  );
}
