import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AvatarUploader from "./AvatarUploader";
import axios from "axios";

const AddUser = () => {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');

  const onUpload = (avatarUrl) => {
    // Handle avatar upload logic if needed
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        setFirstname(value);
        break;
      case "surname":
        setLastname(value);
        break;
      case "emailId":
        setEmail(value);
        break;
      case "designation":
        setRole(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send the user data to the server
      await axios.post("http://localhost:8080/api/v1/auth/register", {
        firstname,
        lastname,
        email,
        role,
        password,
      });
      // Redirect after successful registration
      navigate("../");
    } catch (error) {
      // Handle errors, e.g., display an error message
      console.error("Registration failed:", error.message);
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div className="w-70">
        <h1 className="mb-4">User Registration</h1>
        <div className="card-body">
          <form onSubmit={(e) => onSubmit(e)}>
            <AvatarUploader onUpload={onUpload} />

            <div className="form-group mb-3">
              <input
                className="form-control"
                type="text"
                placeholder="First Name"
                name="firstName"
                autoComplete="given-name"
                value={firstname}
                onChange={(e) => handleInputChange(e)}
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
                onChange={(e) => handleInputChange(e)}
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
                onChange={(e) => handleInputChange(e)}
              />
            </div>

            <div className="form-group mb-3">
              <select
                className="form-select"
                id="designation"
                name="designation"
                value={role}
                onChange={(e) => handleInputChange(e)}
              >
                <option value="" disabled>Select Designation</option>
                <option value="ADMIN">ADMIN</option>
                <option value="USER">USER</option>
              </select>
            </div>

            <div className="form-group mb-3">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => handleInputChange(e)}
              />
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <Link to="../" className="btn btn-secondary">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
