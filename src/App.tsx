import React from "react";
import Footer from "./components/Js/Footer";
import "./index.css";
import Landing from "./pages/Landing";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogCards from "./components/Js/BlogCards";
import BlogContent from "./components/Js/BlogContent";
import Dashboard from "./components/Js/Dashboard";
import Dash from "./components/Js/Dash";
import Gallery from "./pages/Gallery";
import Create from "./components/Js/Create";
import Edit from "./components/Js/Edit";
import ImageGallery from "./components/Js/ImageGallery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/blog" element={<BlogCards />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog/id" element={<BlogContent />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/image" element={<ImageGallery />} />
        <Route
          path="/dashboard/*"
          element={
            <Dashboard>
              <Routes>
                <Route>
                  <Route path="/" element={<Dash />} />
                  <Route path="/create" element={<Create />} />
                  <Route path="/edit" element={<Edit />} />
                  <Route path="/image" element={<ImageGallery />} />
                </Route>
              </Routes>
            </Dashboard>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
