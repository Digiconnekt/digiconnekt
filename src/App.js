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
import ServiceForm from "./pages/ServiceForm";

const App = () => {
  return (
    <div>
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
        <Route path="/blogs/blog1" element={<Blog1 />} />
        <Route path="/blogs/blog2" element={<Blog2 />} />
        <Route path="/blogs/blog3" element={<Blog3 />} />

        <Route path="/proposal" element={<Proposal />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
