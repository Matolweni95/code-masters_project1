import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AvatarUploader from "./AvatarUploader";
import axios from "axios";
import db from "../Config/Firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const generateRandomPassword = () => {
  const length = 12;
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
};

const AddUser = () => {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");

  const onUpload = (avatarUrl) => {
    // Handle avatar 
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

  const handleGeneratePassword = () => {
    const generatedPassword = generateRandomPassword();
    setPassword(generatedPassword);
  };

  const validateForm = () => {
    if (!firstname || !lastname || !email || !role || !password) {
      setFormError("Please fill in all fields");
      return false;
    }
    setFormError("");
    return true;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/register",
        {
          firstname,
          lastname,
          email,
          role,
          password,
        }
      );

      if (response.status === 200) {
        await axios.post("http://localhost:8080/api/v1/auth/send-login-details", {
          email,
          password,
        });

        navigate("../");
      } else {
        console.error("Registration failed:", response.data.message);
      }
    } catch (error) {
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
                <option value="" disabled>
                  Select Designation
                </option>
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
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleGeneratePassword}
              >
                Generate Password
              </button>
            </div>

            {formError && <p className="text-danger">{formError}</p>}

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
