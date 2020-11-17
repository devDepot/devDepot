import React, { useState } from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';

import LoginPage from './components/LoginPage';

const App = () => {
  const [isLoggedIn, setLogin] = useState('false');

  return <LoginPage />;
};

export default App;
