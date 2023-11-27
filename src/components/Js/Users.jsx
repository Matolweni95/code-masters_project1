import React, { useEffect, useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Typography, Avatar, IconButton, Tooltip } from "@material-tailwind/react";
import axios from "axios";
import { Link, useNavigate} from "react-router-dom";
import '../css/Footer.css';

const placeholderImage = 'https://images.squauserpace-cdn.com/content/v1/5de1f65b98e1587c6356b434/1597215557716-ZIAT4P7GRV3XHZ4XM848/team-placeholder.png';
const TABLE_HEAD = ["Full Names", "Email", "Role", "Action"]
const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const result = await axios.get("http://localhost:8080/users/getAll");
        setUsers(result.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUserData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/users/delete/${id}`);
      setUsers(users.filter((user) => user.id !== id));
      console.log('User deleted successfully!');
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Failed to delete user.');
    }
  };

  const handleEdit = (id) => {
    navigate(`/edituser/${id}`);
  };

  return (
    <div className="flex justify-center items-center mt-20">
      <div className="w-3/4">
        <div className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="black">
                Users
              </Typography>
            </div>
            {/* <Link to="/adduser" className="bg-blue-500 text-black px-4 py-2 rounded-md">
                Add User
            </Link> */}
            <Link to="/adduser" className=" bg-blue text-black px-4 py-2 rounded-md" style={{ backgroundColor: '#D9D9D9' }}>
                Add User
            </Link>

          </div>
        </div>

        <div className="px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left" style={{ backgroundColor: '#D9D9D9' }}>
            <thead>
              <tr>
              {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      {user.avatar ? (
                        <Tooltip content="Image">
                          <Avatar
                            src={user.avatar}
                            alt={user.names}
                            size="sm"
                          />
                        </Tooltip>
                      ) : (
                        <Tooltip content="Image">
                          <Avatar
                            src={placeholderImage}
                            alt="Placeholder"
                            size="sm"
                          />
                        </Tooltip>
                      )}

                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {user.names}
                        </Typography>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {user.emailId}
                      </Typography>
                    </div>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {user.designation}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Tooltip content="Delete">
                      <IconButton
                        variant="text"
                        onClick={() => handleDelete(user.id)}
                      >
                        <TrashIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip content="Edit">
                      {/* <Link to={`/edituser/${user.id}`}> */}
                        {/* <IconButton variant="text">
                          <PencilIcon className="h-4 w-4" />
                        </IconButton> */}
                      {/* </Link> */}

                      <IconButton variant="text" onClick={() => handleEdit(user.id)}>
                        <PencilIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
