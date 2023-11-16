import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Card, Input, Button } from "@material-tailwind/react";
import AvatarUploader from "./AvatarUploader";
import axios from "axios";

const EditUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    names: "",
    emailId: "",
    designation: "",
    password: "",
  });

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/users/getAll/${id}`);
      const userData = result.data;

      setUser({
        names: userData.names,
        emailId: userData.emailId,
        designation: userData.designation,
        password: userData.password,
      });
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleAvatarUpload = (avatarUrl) => {
    setUser({
      ...user,
      avatar: avatarUrl,
    });
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/users/update/${id}`, user);
      navigate("/");
      console.log('User updated successfully:', user);
      alert('User updated successfully!');
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Failed to update user.');
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-96">
        <Card color="white" shadow={false}>
          <form onSubmit={updateUser} className="p-4">
            <AvatarUploader user={user} onUpload={handleAvatarUpload} />

            <div className="mb-4 space-y-4">
              <Input
                size="md"
                type="text"
                label="Full Names"
                name="names"
                value={user.names}
                onChange={(e) => handleInputChange(e)}
              />
              <Input
                size="md"
                type="email"
                label="Email"
                name="emailId"
                value={user.emailId}
                onChange={(e) => handleInputChange(e)}
              />
              <Input
                size="md"
                label="Designation"
                name="designation"
                value={user.designation}
                onChange={(e) => handleInputChange(e)}
              />
              <Input
                size="md"
                label="Password"
                name="password"
                type="password"
                value={user.password}
                onChange={(e) => handleInputChange(e)}
              />
            </div>

            <div className="flex justify-between items-center">
              <Button type="submit" color="blue" block= "true">
                Submit
              </Button>
              <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Cancel
              </Link>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default EditUser;
