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
import ServiceForm from "./pages/ServiceForm";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Landing from "./pages/Landing";
import ThankYou from "./pages/ThankYou";
import Packages from "./pages/Packages";
import ProgramLanding from "./pages/ProgramLanding";
import Blog7 from "./pages/Blogs/Blog7";

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
