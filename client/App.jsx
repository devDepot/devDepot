import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import LoginPage from './components/LoginPage';
import EngineerSignup from './components/EngineerSignup';
import SeekerSignup from './components/SeekerSignup';
import history from './components/history';
import Homepage from './components/Homepage';
import EngineerAboutMe from './components/EngineerAboutMe';

const App = () => {
  const [isLoggedIn, setLogin] = useState(false);
  const [isEngineerUser, setUser] = useState(false);
  const [devs, setDevs] = useState([]);
  const [inCart, setCart] = useState([]);
  const [devSelected, setSelection] = useState(false);
  const [filterOptions, setFilterOptions] = useState([]);

  return (
    <Router history={history}>
      <div>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/login" component={LoginPage}>
          <LoginPage isLoggedIn={isLoggedIn} isEngineerUser={isEngineerUser} />
        </Route>
        <Route path="/engineer-signup" component={EngineerSignup}>
          <EngineerSignup isLoggedin={isLoggedIn} isEngineerUser={isEngineerUser} />
        </Route>
        <Route path="/seeker-signup" component={SeekerSignup}>
          <SeekerSignup isLoggedin={isLoggedIn} isEngineerUser={isEngineerUser} />
        </Route>
        //TODO: Determine which pieces of state passed here
        <Route path="/homepage" component={Homepage}>
          <Homepage />
        </Route>
        //TODO: Determine which pieces of state passed here
        <Route path="/engineer-aboutme" component={EngineerAboutMe}>
          <EngineerAboutMe />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
