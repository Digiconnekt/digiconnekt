import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import SearchEngineOptmization from "./pages/Services/SearchEngineOptmization";
import SocialMediaOptimization from "./pages/Services/SocialMediaOptimization";
import Error from "./pages/Error";
import EmailMarketing from "./pages/Services/EmailMarketing";
import ContentMarketing from "./pages/Services/ContentMarketing";
import About from "./pages/About";
import Proposal from "./pages/Proposal";
import ScrollToTop from "./components/ScrollToTop";
import LeadGeneration from "./pages/Services/LeadGeneration";
import ProgrammaticAdvertising from "./pages/Services/ProgrammaticAdvertising";
import PPC from "./pages/Services/PPC";
import Blogs from "./pages/Blogs";
import Blog1 from "./pages/Blogs/Blog1";
import Blog2 from "./pages/Blogs/Blog2";
import Blog3 from "./pages/Blogs/Blog3";
import Blog4 from "./pages/Blogs/Blog4";
import Blog5 from "./pages/Blogs/Blog5";
import Blog6 from "./pages/Blogs/Blog6";
import Blog7 from "./pages/Blogs/Blog7";
import Blog8 from "./pages/Blogs/Blog8";
import Blog9 from "./pages/Blogs/Blog9";
import Blog10 from "./pages/Blogs/Blog10";
import Blog11 from "./pages/Blogs/Blog11";

import ServiceForm from "./pages/ServiceForm";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Landing from "./pages/Landing";
import ThankYou from "./pages/ThankYou";
import Packages from "./pages/Packages";
import ProgramLanding from "./pages/ProgramLanding";
import Blog12 from "./pages/Blogs/Blog12";
import Blog13 from "./pages/Blogs/Blog13";
import Blog14 from "./pages/Blogs/Blog14";
import Blog15 from "./pages/Blogs/Blog15";
import Blog16 from "./pages/Blogs/Blog16";
import Blog17 from "./pages/Blogs/Blog17";
import Blog18 from "./pages/Blogs/Blog18";
import Blog19 from "./pages/Blogs/Blog19";
import Blog20 from "./pages/Blogs/Blog20";
import Blog21 from "./pages/Blogs/Blog21";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/services/search-engine-optimization"
          element={<SearchEngineOptmization />}
        />
        <Route
          path="/services/social-media-Optimization"
          element={<SocialMediaOptimization />}
        />
        <Route path="/services/email-marketing" element={<EmailMarketing />} />
        <Route
          path="/services/content-marketing"
          element={<ContentMarketing />}
        />
        <Route path="/services/lead-generation" element={<LeadGeneration />} />
        <Route
          path="/services/programmatic-advertising"
          element={<ProgrammaticAdvertising />}
        />
        <Route path="/services/ppc" element={<PPC />} />

        <Route path="/service-form/:id" element={<ServiceForm />} />

        <Route path="/blogs" element={<Blogs />} />
        <Route
          path="/blogs/the-role-of-seo-in-modern-digital-marketing-strategies"
          element={<Blog1 />}
        />
        <Route
          path="/blogs/10-tips-for-optimizing-your-social-media-presence"
          element={<Blog2 />}
        />
        <Route
          path="/blogs/advanced-ppc-techniques:-taking-your-campaigns-to-the-next-level"
          element={<Blog3 />}
        />
        <Route
          path="/blogs/digital-marketing-in-the-age-of-social-media-:-tips-to-success"
          element={<Blog4 />}
        />
        <Route
          path="/blogs/the-ultimate-guide-to-seo:-tips-and-strategies-to-success"
          element={<Blog5 />}
        />
        <Route
          path="/blogs/seo-and-content-marketing:-a-winning-combination-in-digital-marketing"
          element={<Blog6 />}
        />
        <Route
          path="/blogs/why-content-marketing-is-essential-for-business:-a-deep-dive"
          element={<Blog7 />}
        />
        <Route
          path="/blogs/from-strategy-to-success:-how-digiconnekt-transforms-your-digital-marketing-journey"
          element={<Blog8 />}
        />
        <Route
          path="/blogs/revolutionizing-digital-marketing:-how-digiconnekt-is-pioneering-the-future-of-customer-engagement"
          element={<Blog9 />}
        />
        <Route
          path="/blogs/a-game-changer-in-email-marketing-service"
          element={<Blog10 />}
        />
        <Route
          path="/blogs/internet-marketing-agency-in-the-usa-your-pathway-to-online-triumph"
          element={<Blog11 />}
        />
        <Route
          path="/blogs/digiconnekt-best-seo-agency-in-singapore-what-makes-us-best"
          element={<Blog12 />}
        />
        <Route
          path="/blogs/turn-likes-into-leads-digiconnekts-smo-tactics-for-conversion-success"
          element={<Blog13 />}
        />
        <Route
          path="/blogs/digiconnekt-your-ultimate-content-marketing-agency-partner"
          element={<Blog14 />}
        />
        <Route
          path="/blogs/ready-to-dominate-serps-unleash-the-power-of-digiconnekts-seo-service-for-your-business"
          element={<Blog15 />}
        />
        <Route
          path="/blogs/5-seo-mistakes-that-are-killing-your-website-traffic-and-how-to-fix-them"
          element={<Blog16 />}
        />
        <Route
          path="/blogs/maximizing-roi-with-paid-digital-media-optimization"
          element={<Blog17 />}
        />
        <Route
          path="/blogs/the-ultimate-guide-to-social-media-marketing-in-2024"
          element={<Blog18 />}
        />
         <Route
          path="/blogs/expert-email-marketing-solutions-in-the-usa-drive-results-for-your-business"
          element={<Blog19 />}
        />
        <Route
          path="/blogs/elevate-your-brand-dentity-with-digiconnekt-branding-solutions"
          element={<Blog20 />}
        />
<Route
          path="/blogs/10-tips-to-boost-your-local-seo-ranking"
          element={<Blog21 />}
        />

        <Route path="/proposal" element={<Proposal />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/digital-marketing-proposal" element={<Landing />} />

        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/seo-packages" element={<Packages />} />

        <Route
          path="/student-ambassador-programme"
          element={<ProgramLanding />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />

      <ToastContainer />
    </>
  );
};

export default App;
