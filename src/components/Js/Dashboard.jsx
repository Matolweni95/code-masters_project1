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
          <Link to="*/../about">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M10.8 8.4H13.2V6H10.8M12 21.6C6.708 21.6 2.4 17.292 2.4 12C2.4 6.708 6.708 2.4 12 2.4C17.292 2.4 21.6 6.708 21.6 12C21.6 17.292 17.292 21.6 12 21.6ZM12 0C10.4241 0 8.86371 0.310389 7.4078 0.913446C5.95189 1.5165 4.62902 2.40042 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C4.62902 21.5996 5.95189 22.4835 7.4078 23.0866C8.86371 23.6896 10.4241 24 12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 10.4241 23.6896 8.86371 23.0866 7.4078C22.4835 5.95189 21.5996 4.62902 20.4853 3.51472C19.371 2.40042 18.0481 1.5165 16.5922 0.913446C15.1363 0.310389 13.5759 0 12 0ZM10.8 18H13.2V10.8H10.8V18Z" fill="white"/>
            </svg>
              ABOUT
            </Link>
          </li>
          <li className='list-items'>
          <Link to="*/../contact">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21.6 4H2.4C1.08 4 0 4.9 0 6V18C0 19.1 1.08 20 2.4 20H21.6C22.92 20 24 19.1 24 18V6C24 4.9 22.92 4 21.6 4ZM21.6 18H2.4V6H21.6V18ZM2.4 0H21.6V2H2.4V0ZM2.4 22H21.6V24H2.4V22ZM12 12C12.7956 12 13.5587 11.7366 14.1213 11.2678C14.6839 10.7989 15 10.163 15 9.5C15 8.83696 14.6839 8.20107 14.1213 7.73223C13.5587 7.26339 12.7956 7 12 7C11.2044 7 10.4413 7.26339 9.87868 7.73223C9.31607 8.20107 9 8.83696 9 9.5C9 10.163 9.31607 10.7989 9.87868 11.2678C10.4413 11.7366 11.2044 12 12 12ZM12 8.5C12.66 8.5 13.2 8.95 13.2 9.5C13.2 10.05 12.66 10.5 12 10.5C11.34 10.5 10.8 10.05 10.8 9.5C10.8 8.95 11.34 8.5 12 8.5ZM18 15.99C18 13.9 14.028 13 12 13C9.972 13 6 13.9 6 15.99V17H18V15.99ZM8.172 15.5C8.904 14.98 10.608 14.5 12 14.5C13.404 14.5 15.108 14.98 15.84 15.5H8.172Z" fill="white"/>
            </svg>
            CONTACT
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
          <li className='list-items'>
            <Link to='*/../users'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M19.9 12.6599C19.7397 12.4774 19.6513 12.2428 19.6513 11.9999C19.6513 11.757 19.7397 11.5224 19.9 11.3399L21.18 9.89989C21.3211 9.74256 21.4087 9.5446 21.4302 9.3344C21.4518 9.12421 21.4062 8.91258 21.3 8.72989L19.3 5.2699C19.1949 5.08742 19.0349 4.94277 18.8428 4.85658C18.6506 4.77039 18.4362 4.74705 18.23 4.7899L16.35 5.1699C16.1108 5.21932 15.8618 5.17948 15.6499 5.0579C15.438 4.93631 15.278 4.74138 15.2 4.5099L14.59 2.6799C14.5229 2.48127 14.3951 2.30876 14.2246 2.18674C14.0542 2.06471 13.8497 1.99935 13.64 1.9999H9.64002C9.42195 1.98851 9.20615 2.04882 9.02558 2.17161C8.84501 2.2944 8.7096 2.47291 8.64002 2.6799L8.08002 4.5099C8.00202 4.74138 7.84199 4.93631 7.63013 5.0579C7.41827 5.17948 7.16924 5.21932 6.93002 5.1699L5.00002 4.7899C4.80457 4.76228 4.60532 4.79312 4.42737 4.87853C4.24941 4.96395 4.10072 5.10012 4.00002 5.2699L2.00002 8.72989C1.89118 8.91054 1.84224 9.12098 1.8602 9.33112C1.87816 9.54126 1.9621 9.74034 2.10002 9.89989L3.37002 11.3399C3.53034 11.5224 3.61875 11.757 3.61875 11.9999C3.61875 12.2428 3.53034 12.4774 3.37002 12.6599L2.10002 14.0999C1.9621 14.2595 1.87816 14.4585 1.8602 14.6687C1.84224 14.8788 1.89118 15.0892 2.00002 15.2699L4.00002 18.7299C4.10512 18.9124 4.26514 19.057 4.45727 19.1432C4.6494 19.2294 4.86384 19.2527 5.07002 19.2099L6.95002 18.8299C7.18924 18.7805 7.43827 18.8203 7.65013 18.9419C7.86199 19.0635 8.02202 19.2584 8.10002 19.4899L8.71002 21.3199C8.7796 21.5269 8.91501 21.7054 9.09558 21.8282C9.27615 21.951 9.49195 22.0113 9.71002 21.9999H13.71C13.9197 22.0004 14.1242 21.9351 14.2946 21.8131C14.4651 21.691 14.5929 21.5185 14.66 21.3199L15.27 19.4899C15.348 19.2584 15.508 19.0635 15.7199 18.9419C15.9318 18.8203 16.1808 18.7805 16.42 18.8299L18.3 19.2099C18.5062 19.2527 18.7206 19.2294 18.9128 19.1432C19.1049 19.057 19.2649 18.9124 19.37 18.7299L21.37 15.2699C21.4762 15.0872 21.5218 14.8756 21.5002 14.6654C21.4787 14.4552 21.3911 14.2572 21.25 14.0999L19.9 12.6599ZM18.41 13.9999L19.21 14.8999L17.93 17.1199L16.75 16.8799C16.0298 16.7327 15.2806 16.855 14.6446 17.2237C14.0086 17.5924 13.5302 18.1817 13.3 18.8799L12.92 19.9999H10.36L10 18.8599C9.76987 18.1617 9.2914 17.5724 8.65542 17.2037C8.01945 16.835 7.27024 16.7127 6.55002 16.8599L5.37002 17.0999L4.07002 14.8899L4.87002 13.9899C5.36197 13.4399 5.63395 12.7278 5.63395 11.9899C5.63395 11.252 5.36197 10.5399 4.87002 9.98989L4.07002 9.0899L5.35002 6.88989L6.53002 7.1299C7.25024 7.27712 7.99945 7.15478 8.63542 6.78609C9.2714 6.41741 9.74987 5.82805 9.98002 5.1299L10.36 3.9999H12.92L13.3 5.13989C13.5302 5.83805 14.0086 6.42741 14.6446 6.79609C15.2806 7.16478 16.0298 7.28712 16.75 7.13989L17.93 6.8999L19.21 9.11989L18.41 10.0199C17.9236 10.5687 17.655 11.2766 17.655 12.0099C17.655 12.7432 17.9236 13.4511 18.41 13.9999ZM11.64 7.9999C10.8489 7.9999 10.0755 8.23449 9.41774 8.67402C8.75994 9.11354 8.24725 9.73826 7.9445 10.4692C7.64175 11.2001 7.56254 12.0043 7.71688 12.7803C7.87122 13.5562 8.25218 14.2689 8.81159 14.8283C9.371 15.3877 10.0837 15.7687 10.8597 15.923C11.6356 16.0774 12.4398 15.9982 13.1708 15.6954C13.9017 15.3927 14.5264 14.88 14.9659 14.2222C15.4054 13.5644 15.64 12.791 15.64 11.9999C15.64 10.939 15.2186 9.92161 14.4684 9.17147C13.7183 8.42132 12.7009 7.9999 11.64 7.9999ZM11.64 13.9999C11.2445 13.9999 10.8578 13.8826 10.5289 13.6628C10.2 13.4431 9.94363 13.1307 9.79226 12.7653C9.64088 12.3998 9.60128 11.9977 9.67845 11.6097C9.75562 11.2218 9.9461 10.8654 10.2258 10.5857C10.5055 10.306 10.8619 10.1155 11.2498 10.0383C11.6378 9.96115 12.0399 10.0008 12.4054 10.1521C12.7708 10.3035 13.0832 10.5599 13.303 10.8888C13.5227 11.2177 13.64 11.6043 13.64 11.9999C13.64 12.5303 13.4293 13.039 13.0542 13.4141C12.6792 13.7892 12.1705 13.9999 11.64 13.9999Z" fill="white"/>
            </svg>
            USERS
            </Link>
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
