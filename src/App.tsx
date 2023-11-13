
import React from 'react';
import Footer from './components/Js/Footer';
import './index.css'
import Landing from './pages/Landing';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogCards from './components/Js/BlogCards';
import BlogContent from './components/Js/BlogContent';
import Dashboard from './components/Js/Dashboard';
import Dash from './components/Js/Dash';
import Gallery from './pages/Gallery';
import Create from './components/Js/Create';
import Stories from './components/Js/Stories';
import Login from './components/Js/Login';
import Edit from './components/Js/Edit';
import ContentCreatorNav from './components/Js/ContentCreatorNav';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/blog" element={<BlogCards />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog/id" element={<BlogContent />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/dashboard/*" element={
        <Dashboard>
          <Routes>
            <Route>
              <Route path="/" element={<Dash />} />
              <Route path="/create" element={<Create />} />
              <Route path="/stories" element={<Stories />} />
              <Route path="/edit/:id" element={<Edit />} />
            </Route>
          </Routes>
        </Dashboard>
        } />

        <Route path="/conentcreator/*" element={
        <ContentCreatorNav>
          <Routes>
            <Route>
              <Route path="/" element={<Dash />} />
              <Route path="/blog" element={<Create />} />
              <Route path="/gallery" element={<Stories />} />
            </Route>
          </Routes>
        </ContentCreatorNav>
        } />

      </Routes>
      </BrowserRouter>
  );
  
}

export default App;
