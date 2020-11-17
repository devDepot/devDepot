import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import LoginPage from './components/LoginPage';

const App = () => {
  const [isLoggedIn, setLogin] = useState('false');

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/login" component={LoginPage}>
          <LoginPage isLoggedIn={isLoggedIn} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
