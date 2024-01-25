import React from 'react'
import { Link } from 'react-router-dom'

const ResetLink = () => {
  return (
    <div>
        <Link to="*/../reset-password">
            <a href='#'>Reset Password</a>
        </Link>
    </div>
  )
}

export default ResetLink