import React, { useState } from 'react';

const LoginPage = ({ isLoggedIn }) => {
  return (
    <div>
      <p>{isLoggedIn}</p>
    </div>
  );
};

export default LoginPage;