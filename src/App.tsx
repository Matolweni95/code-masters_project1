import React from "react";
import Footer from "./components/Js/Footer";
import "./index.css";
import Landing from "./pages/Landing";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogCards from "./components/Js/BlogCards";
import BlogContent from "./components/Js/BlogContent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/blog" element={<BlogCards />} />
        <Route path="/blog/:id" element={<BlogContent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
