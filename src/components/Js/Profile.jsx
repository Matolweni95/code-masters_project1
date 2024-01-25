import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ResetLink from './ResetLink';
import { MyContext } from '../../App';


const Profile = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');

  const { contextValue } = useContext(MyContext);
  const userId = contextValue;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/users/${userId}`);
        const userData = response.data;

        setFirstname(userData.firstname);
        setLastname(userData.lastname);
        setEmail(userData.email);
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };

    fetchUserData();
  }, [userId]); 

  const updateUser = async (userId, updatedUser) => {
    try {
      const response = await axios.put(`http://localhost:8080/api/v1/users/${userId}`, updatedUser);
      console.log(response.data); 
    } catch (error) {
      console.error("Error updating user:", error.message);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    updateUser(userId, { firstname, lastname, email });

  };

  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div className="w-100">
        <h1 className="d-flex justify-content-center mb-4">Edit Profile</h1>
        <div className="card-body">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="First Name"
                name="firstName"
                autoComplete="given-name"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Surname"
                name="surname"
                autoComplete="family-name"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                name="emailId"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <ResetLink />

            <div className="d-flex justify-content-between align-items-center mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <Link to="../../" className="btn btn-secondary">
                Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
