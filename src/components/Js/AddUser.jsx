import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, Input, Button } from "@material-tailwind/react";
import AvatarUploader from "./AvatarUploader";
import axios from "axios";

const AddUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    names: "",
    emailId: "",
    designation: "",
    avatar: '',
    // password: "",
  });

  const onUpload = (avatarUrl) => {
    setUser({ ...user, avatar: avatarUrl });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/users/add", user);
    navigate("/");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-96">
        <Card color="white" shadow={false}>
          <form onSubmit={(e) => onSubmit(e)} className="p-4">
            <AvatarUploader   initialValue={user.avatar} onUpload={onUpload}/>

            <div className="mb-4 space-y-4 mt-0">
              <Input
                size="md"
                type="text"
                label="Full Names"
                name="names"
                autoComplete="name"
                value={user.names}
                onChange={(e) => handleInputChange(e)}
              />
              <Input
                size="md"
                type="email"
                label="Email"
                name="emailId"
                autoComplete="email"
                value={user.emailId}
                onChange={(e) => handleInputChange(e)}
              />
              <Input
                size="md"
                label="Designation"
                name="designation"
                autoComplete="role"
                value={user.designation}
                onChange={(e) => handleInputChange(e)}
              />
              <Input
                size="md"
                label="Password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={user.password}
                onChange={(e) => handleInputChange(e)}
              />
            </div>

            <div className="flex justify-between items-center">
              <Button type="submit" color="blue" block= "true">
                Submit
              </Button>
              <Link to="/"  className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Cancel
              </Link>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddUser;
