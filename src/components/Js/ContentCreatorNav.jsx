import React, { useState } from 'react';
import '../css/Dashboard.css'
import avatar from '../images/IMG_8375.JPG';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';


const Dashboard = ({ children }) => {
  const [isSidebarActive, setSidebarActive] = useState(true);
  const [isProfileMenuActive, setProfileMenuActive] = useState(false);


  const toggleSidebar = () => {
    setSidebarActive(!isSidebarActive);
  };
  const toggleProfileMenu = () => {
    setProfileMenuActive(!isProfileMenuActive);
  };

  const contentStyle = {
    width: isSidebarActive ? '100%' : 'calc(100%)', 
    marginLeft: isSidebarActive ? '0' : '-279px', 
  };

  const navigate = useNavigate();

  const token = localStorage.getItem('token')

  const decodedToken = jwtDecode(token);
  const type = decodedToken.role;
  const user = decodedToken.firstname + " " + decodedToken.lastname;

  const handleSignout = () => {
      localStorage.removeItem('token');
      navigate('/');
    };

  return (
    <div className={`wrapper ${isSidebarActive ? 'active' : ''}`}>
      <nav id="sidebar" style={{ transform: isSidebarActive ? 'translateX(0)' : 'translateX(-279px)' }}>
        <div className="sidebar-header d-flex justify-content-center align-items-center">
          <h3 className='sidebar-heading'>SEBITJA SECONDARY SCHOOL</h3>
        </div>

        <ul className="list-unstyled components">
          <li className="list-items active">
            <Link to="/admin">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M13.3333 24V10.6667H24V24H13.3333ZM0 13.3333V0H10.6667V13.3333H0ZM8 10.6667V2.66667H2.66667V10.6667H8ZM0 24V16H10.6667V24H0ZM2.66667 21.3333H8V18.6667H2.66667V21.3333ZM16 21.3333H21.3333V13.3333H16V21.3333ZM13.3333 0H24V8H13.3333V0ZM16 2.66667V5.33333H21.3333V2.66667H16Z" fill="white"/>
            </svg>
              DASHBOARD
            </Link>
          </li>
          <li className='list-items'> 
            <Link to="*/../stories">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M24 0V18.3312H8.56641L3 24V18.3312H0V0H24ZM1.5 1.5276V4.58279H22.5V1.5276H1.5ZM22.5 16.8036V6.11039H1.5V16.8036H4.5V20.3003L7.93359 16.8036H22.5ZM15 7.63799H21V15.276H15V7.63799ZM16.5 13.7484H19.5V9.16559H16.5V13.7484ZM3 9.16559H13.5V10.6932H3V9.16559ZM3 12.2208H13.5V13.7484H3V12.2208Z" fill="white"/>
            </svg>
                BLOG
            </Link>
          </li>
          <li className='list-items'>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M2 12C2 7.286 2 4.929 3.464 3.464C4.93 2 7.286 2 12 2C16.714 2 19.071 2 20.535 3.464C22 4.93 22 7.286 22 12C22 16.714 22 19.071 20.535 20.535C19.072 22 16.714 22 12 22C7.286 22 4.929 22 3.464 20.535C2 19.072 2 16.714 2 12Z" stroke="white" stroke-width="1.5"/>
            <path d="M16 10C17.1046 10 18 9.10457 18 8C18 6.89543 17.1046 6 16 6C14.8954 6 14 6.89543 14 8C14 9.10457 14.8954 10 16 10Z" stroke="white" stroke-width="1.5"/>
            <path d="M2 12.5L3.752 10.967C4.19114 10.5831 4.75974 10.3803 5.34272 10.3998C5.9257 10.4193 6.47949 10.6596 6.892 11.072L11.182 15.362C11.5149 15.6948 11.9546 15.8996 12.4235 15.9402C12.8925 15.9808 13.3608 15.8547 13.746 15.584L14.045 15.374C14.6006 14.9838 15.2721 14.7936 15.9498 14.8344C16.6275 14.8753 17.2713 15.1448 17.776 15.599L21 18.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
            GALLERY</a>
          </li>
        </ul>

        <ul className='list-unstyled components bottom'>
          <li className='list-items'>
            <a href='#'>
              <div className='d-flex align-items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="9" height="18" viewBox="0 0 9 18" fill="none">
              <path d="M2 2H8C8.55 2 9 1.55 9 1C9 0.45 8.55 0 8 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H8C8.55 18 9 17.55 9 17C9 16.45 8.55 16 8 16H2V2Z" fill="#F5F5F5"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M11.65 3.65004L8.86 0.86004C8.79045 0.788591 8.70117 0.73952 8.60357 0.719107C8.50597 0.698695 8.4045 0.707869 8.31215 0.745455C8.21979 0.783041 8.14075 0.847329 8.08515 0.930093C8.02954 1.01286 7.99989 1.11033 8 1.21004V3.00004H1C0.45 3.00004 0 3.45004 0 4.00004C0 4.55004 0.45 5.00004 1 5.00004H8V6.79004C8 7.24004 8.54 7.46004 8.85 7.14004L11.64 4.35004C11.84 4.16004 11.84 3.84004 11.65 3.65004Z" fill="#F5F5F5"/>
            </svg>
              </div>
              <button  onClick={handleSignout}>
              LOGOUT
              </button>
            </a>
          </li>
          
        </ul>
      </nav>
      <div id="content" style={contentStyle}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button type="button" onClick={toggleSidebar} className="dash-btn text-sidebar">
            <i className={`fas fa-align-left ${isSidebarActive ? 'active' : ''}`}></i>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
          </button>

          <div className='profile d-flex align-items-center justify-content-center' onClick={toggleProfileMenu}>
            <div className="type">
              <p className='profile-text'>{user}</p>
              <div className="drop d-flex align-items-center">
              <p className='profile-text'>{type}</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" id="arrow-drop-down"><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 13-2.5-2h5L12 13Z"></path></svg>
              </div>
            </div>
            <img className="avatar" src={avatar} alt="User Avatar" />
            <div className={`menu ${isProfileMenuActive ? 'active' : ''}`}>
              <ul>
                <li>
                  <Link to="profile">
                    &nbsp;Profile
                  </Link>
                  </li>
                <li>
                  <Link to="">
                    &nbsp;Settings
                  </Link>
                </li>
                <li>
                  <Link to="">
                    &nbsp;Sign Out
                  </Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
        <div className='nav-container pl-9 pt-3'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
