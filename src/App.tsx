
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
import AdminDashboard from './components/Js/AdminDashboard';
import Gallerys from './components/Js/Gallery';
import ContentDashboard from './components/Js/ContentDashboard';
import ContactForm from './components/Js/ContactForm';



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
              <Route path="/" element={<AdminDashboard />} />
              <Route path="/stories//*" element={
                <Routes>
                  <Route path='/*' element={<Stories />} />
                  <Route path='/create' element = {<Create />} />
                </Routes>
              } />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/gallerys" element={<Gallerys />} />
              {/* <Route path="/contact" element={<ContactForm />} /> */}
            </Route>
          </Routes>
        </Dashboard>
        } />

        <Route path="/contentcreator/*" element={
        <ContentCreatorNav>
          <Routes>
            <Route>
              <Route path="/" element={<ContentDashboard />} />
              <Route path="/stories//*" element={
                <Routes>
                  <Route path='/*' element={<Stories />} />
                  <Route path='/create' element = {<Create />} />
                </Routes>
              } />
              <Route path="/gallerys" element={<Gallerys />} />
            </Route>
          </Routes>
        </ContentCreatorNav>
        } />

      </Routes>
      </BrowserRouter>
  );
  
}

export default App;
