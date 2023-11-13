import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dash = () => {
  const navigate = useNavigate();

  const handleSignout = () => {
      localStorage.removeItem('userId');
      navigate('/');
    };

return (
  <div>
      <button onClick={handleSignout}>Signout</button>
  </div>
)
}

export default Dash