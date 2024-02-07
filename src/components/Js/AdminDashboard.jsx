import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../App';
import { decryptData } from './CyptoUtils';

const AdminDashboard = () => {
  const { contextValue } = useContext(MyContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Retrieve encrypted user data from local storage
    const storedContextData = localStorage.getItem('contextData');

    if (storedContextData) {
      // Decrypt the data and set it in state
      const decryptedUserData = decryptData(storedContextData);
      setUserData(decryptedUserData);
    }
  }, []);

  return (
    <div>
      {userData ? (
        <>
          <h2>Welcome, {userData.id}</h2>
          <p>Role: {userData.role}</p>
          {/* Add additional information as needed */}
        </>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
};

export default AdminDashboard;
