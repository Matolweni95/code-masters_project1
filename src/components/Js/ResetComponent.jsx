import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MyContext } from '../../App';
import { useContext } from 'react';
import axios from 'axios';

const ResetComponent = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [showPasswordMismatchError, setShowPasswordMismatchError] = useState(false);
  const { contextValue, updateContextValue } = useContext(MyContext);
  const navigate = useNavigate();
  const userId = contextValue;
  
  const handleNewPasswordChange = (e) => {
    const newPasswordValue = e.target.value;
    setNewPassword(newPasswordValue);
  };

  const handleVerifyPasswordChange = (e) => {
    const verifyPasswordValue = e.target.value;
    setVerifyPassword(verifyPasswordValue);
    if (newPassword !== verifyPasswordValue) {
      setShowPasswordMismatchError(true);
    } else {
      setShowPasswordMismatchError(false);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  
    // Check if any of the fields are empty
    if (oldPassword.trim() === '' || newPassword.trim() === '' || verifyPassword.trim() === '') {
      alert('Please fill in all fields');
      return;
    }
  
    // Check if there is a password mismatch
    if (newPassword !== verifyPassword) {
      setShowPasswordMismatchError(true);
      alert('Passwords do not match');
      return;
    }
  
    // If all checks pass, proceed with the password update
    try {
      // Call the new endpoint to update the password
      const response = await axios.put(
        `http://localhost:8080/api/v1/users/${userId}/update-password`,
        null, // pass null as the request body since parameters are in the URL
        {
          params: {
            oldPassword,
            newPassword,
          },
        }
      );
  
      alert('Password successfully changed');
      navigate('../admin');
      // Handle success or update state as needed
    } catch (error) {
      alert('Ensure that the old password is correctly entered');
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div className="w-80">
        <h1 className="d-flex justify-content-center mb-4">Reset Password</h1>
        <div className="card-body">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="Enter Old Password"
                name="oldPassword"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <input
                className="form-control"
                type="password"
                placeholder="Enter New Password"
                name="newPassword"
                value={newPassword}
                onChange={(e) => handleNewPasswordChange(e)}
              />
            </div>

            <div className="form-group mb-3">
              <input
                className="form-control"
                type="password"
                placeholder="Re-enter New Password"
                name="verifyPassword"
                value={verifyPassword}
                onChange={(e) => handleVerifyPasswordChange(e)}
              />
              {showPasswordMismatchError && (
                <p className="text-danger">Passwords do not match</p>
              )}
            </div>

            <div className="d-flex justify-content-between align-items-center mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <Link to="../" className="btn btn-secondary">
                Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetComponent;
