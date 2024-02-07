
import React, { createContext, useContext, useState } from 'react';
import Footer from './components/Js/Footer';
import './index.css'
import Landing from './pages/Landing';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
import Users from "./components/Js/Users"; 
import EditUser from "./components/Js/EditUser";
import AddUser from "./components/Js/AddUser";
import Profile from './components/Js/Profile';
import ResetComponent from './components/Js/ResetComponent';
import { encryptData, decryptData } from './components/Js/CyptoUtils';
import Page from './components/Js/error';
import Aboutupdate from './components/Js/AboutUpdate';
import Galleries from './components/Js/Galleries';
export const MyContext = createContext({});


const App = () => {
  const { contextValue, updateContextValue } = useContext(MyContext);
  const storedContextData = localStorage.getItem('contextData');
  const initialContextData = storedContextData ? decryptData(storedContextData) : {};
  const userRole = initialContextData.role;

  return (

    <MyContext.Provider value={{ contextValue, updateContextValue }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/blog" element={<BlogCards />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog/id" element={<BlogContent />} />
          <Route path="/login" element={<Login />} />

          {userRole === 'ROLE_ADMIN' && (
            <Route
              path="/admin/*"
              element={
                <Dashboard>
                  <Routes>
                    <Route path="/" element={<AdminDashboard />} />
                    <Route
                      path="/profile//*"
                      element={
                        <Routes>
                          <Route path="/" element={<Profile />} />
                          <Route path="/reset-password" element={<ResetComponent />} />
                        </Routes>
                      }
                    />
                    <Route
                      path="/stories//*"
                      element={
                        <Routes>
                          <Route path="/*" element={<Stories />} />
                          <Route path="/create" element={<Create />} />
                        </Routes>
                      }
                    />
                    <Route path="/edit/:id" element={<Edit />} />
                    <Route path="/gallerys" element={<Gallerys />} />
                    <Route path="/contact" element={<ContactForm />} />
                    <Route
                      path="/users//*"
                      element={
                        <Routes>
                          <Route path="/*" element={<Users />} />
                          <Route path="/edituser/:id" element={<EditUser />} />
                          <Route path="/adduser" element={<AddUser />} />
                        </Routes>
                      }
                    />
                  </Routes>
                </Dashboard>
              }
            />
          )}

          {userRole === 'ROLE_CONTENT_CREATOR' && (
            <Route
              path="/contentcreator/*"
              element={
                <ContentCreatorNav>
                  <Routes>
                    <Route path="/" element={<ContentDashboard />} />
                    <Route
                      path="/profile//*"
                      element={
                        <Routes>
                          <Route path="/" element={<Profile />} />
                          <Route path="/reset-password" element={<ResetComponent />} />
                        </Routes>
                      }
                    />
                    <Route
                      path="/stories//*"
                      element={
                        <Routes>
                          <Route path="/*" element={<Stories />} />
                          <Route path="/create" element={<Create />} />
                        </Routes>
                      }
                    />
                    <Route path="/gallerys" element={<Gallerys />} />
                  </Routes>
                </ContentCreatorNav>
                
              }
            />
          )}

        <Route path="*" element={<Page />} />


        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
};

export default App;