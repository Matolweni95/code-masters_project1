import { Link } from "react-router-dom";
import '../css/login.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { MyContext } from "../../App";
import { useContext } from "react";


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, SetUsers] = useState([]);
  const [role, setRole] = useState('');
  const navigate = useNavigate();
  const { contextValue, updateContextValue } = useContext(MyContext);

  const handleSignin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:8080/api/v1/auth/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data);
  
      const token = data.token;
  
      localStorage.setItem('token', token);

      if (token) {
        
        const decodedToken = jwtDecode(token);
        const userRole = decodedToken.role;
        console.log(userRole);
        updateContextValue(decodedToken.id);
        setRole(userRole);

        if (userRole === 'ADMIN') {
          navigate('/admin')
        } else if(userRole === 'USER') {
          navigate('/contentcreator')
        }
        else {

        }
      }
  
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  

  useEffect (() => {
    if(localStorage.getItem('userId') != null){
      if(localStorage.getItem('userType') == "Creator"){
        navigate('/contentcreator')
      } else {
        navigate('/dashboard')
      }
    }
  })
 
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-800">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <input name="remember" type="hidden" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address">Email address</label>
              <input
                autoComplete="email"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="email-address"
                name="email"
                placeholder="Email address"
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                autoComplete="current-password"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="password"
                name="password"
                placeholder="Password"
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                id="remember_me"
                name="remember_me"
                type="checkbox"
              />
              <label className="ml-2 block text-sm text-gray-900" htmlFor="remember_me">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              {/* <Link className="font-medium text-indigo-600 hover:text-indigo-500" href="#">
                Forgot your password?
              </Link> */}
            </div>
          </div>
          <div>
            <button onClick={handleSignin}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              type="submit"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
};

export default Login;

