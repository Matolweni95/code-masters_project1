import React, { useEffect, useState } from "react";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Typography, Avatar, IconButton, Tooltip } from "@material-tailwind/react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import '../css/Users.css';
import ReactPaginate from "react-paginate";

const placeholderImage = 'https://images.squauserpace-cdn.com/content/v1/5de1f65b98e1587c6356b434/1597215557716-ZIAT4P7GRV3XHZ4XM848/team-placeholder.png';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const result = await axios.get("http://localhost:8080/api/v1/users/all");
        setUsers(result.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUserData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/users/delete/${id}`);
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

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => (
      <tr key={user.id}>
        <td className="p-4">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                {user.firstname}
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
              {user.email}
            </Typography>
          </div>
        </td>
        <td className="p-4">
          <Typography
            variant="small"
            color="blue-gray"
            className="font-normal"
          >
            {user.role}
          </Typography>
        </td>
        <td className="actions p-4 d-flex align-items-center justify-around">
          <Tooltip content="Delete">
            <IconButton
              variant="text"
              onClick={() => handleDelete(user.id)}
            >
              <TrashIcon className="h-4 w-4" />
            </IconButton>
          </Tooltip>
          <Tooltip content="Edit">
            <IconButton variant="text" onClick={() => handleEdit(user.id)}>
              <PencilIcon className="h-4 w-4" />
            </IconButton>
          </Tooltip>
        </td>
      </tr>
    ));

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
            <Link to="*/../adduser" className="add-btn bg-blue-500 opacity-70 px-4 py-2 rounded-md">
                Add User
            </Link>
          </div>
        </div>

        <div className="px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                <th className="border-y p-4">
                  <Typography
                    variant="small"
                    color="black"
                    className="font-normal text-black leading-none opacity-70"
                  >
                    Full Name
                  </Typography>
                </th>
                <th className="border-y p-4">
                  <Typography
                    variant="small"
                    color="black"
                    className="font-normal leading-none opacity-70"
                  >
                    Email
                  </Typography>
                </th>
                <th className="border-y p-4">
                  <Typography
                    variant="small"
                    color="black"
                    className="font-normal leading-none opacity-70"
                  >
                    Role
                  </Typography>
                </th>
                <th className="border-y p-4">
                  <Typography
                    variant="small"
                    color="black"
                    className="font-normal leading-none opacity-70"
                  >
                    Action
                  </Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              {displayUsers}
            </tbody>
          </table>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
          />
        </div>
      </div>
    </div>
  );
};

export default Users;
