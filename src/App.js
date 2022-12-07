import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";
import SearchEngineOptmization from "./components/Services/SearchEngineOptmization";
import SocialMediaOptimization from "./components/Services/SocialMediaOptimization";
import Error from "./components/Error";
import EmailMarketing from "./components/Services/EmailMarketing";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
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
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
