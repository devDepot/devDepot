import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import RegistrationPage from './components/RegistrationPage';
import LoginPage from './components/LoginPage';
import DeveloperSignup from './components/DeveloperSignup';
import EmployerSignup from './components/EmployerSignup';
import history from './components/history';
import Homepage from './components/Homepage';
import DeveloperAboutMe from './components/DeveloperAboutMe';
import EmployerAboutMe from './components/EmployerAboutMe';
import UserContainer from './components/UserContainer';

const App = () => {
  const [is_logged_in, set_login] = useState(false);
  const [is_dev_user, set_user] = useState(false);
  const [devs, set_devs] = useState([]);
  const [in_cart, set_cart] = useState([]);
  const [filter_options, set_filter_options] = useState([]);
  const [username, set_username] = useState('');
  const [password, set_password] = useState('');
  const [stack, set_stack] = useState('');
  const [name, set_name] = useState('');
  const [email, set_email] = useState('');
  const [employer_email, set_employer_email] = useState('');
  const [about, set_about] = useState('');
  const [company, set_company] = useState('');
  const [hourly_rate, set_hourly_rate] = useState(0);
  const [image, set_image] = useState('');

  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={RegistrationPage}>
            <RegistrationPage
              is_logged_in={is_logged_in}
              set_login={set_login}
              is_dev_user={is_dev_user}
              set_user={set_user}
              username={username}
              set_username={set_username}
            />
          </Route>
          <Route exact path="/login" component={LoginPage}>
            <LoginPage
              is_logged_in={is_logged_in}
              set_login={set_login}
              is_dev_user={is_dev_user}
              set_user={set_user}
              username={username}
              set_username={set_username}
              password={password}
              set_password={set_password}
              name={name}
              set_name={set_name}
              stack={stack}
              set_stack={set_stack}
              hourly_rate={hourly_rate}
              set_hourly_rate={set_hourly_rate}
              email={email}
              set_email={set_email}
              employer_email={employer_email}
              set_employer_email={set_employer_email}
              company={company}
              set_company={set_company}
              about={about}
              set_about={set_about}
            />
          </Route>
          <Route exact path="/dev-signup" component={DeveloperSignup}>
            <DeveloperSignup
              is_logged_in={is_logged_in}
              set_login={set_login}
              is_dev_user={is_dev_user}
              set_user={set_user}
              username={username}
              set_username={set_username}
              password={password}
              set_password={set_password}
              stack={stack}
              set_stack={set_stack}
              hourly_rate={hourly_rate}
              set_hourly_rate={set_hourly_rate}
              about={about}
              set_about={set_about}
              name={name}
              set_name={set_name}
              email={email}
              set_email={set_email}
              image={image}
              set_image={set_image}
            />
          </Route>
          <Route exact path="/employer-signup" component={EmployerSignup}>
            <EmployerSignup
              is_logged_in={is_logged_in}
              set_login={set_login}
              is_dev_user={is_dev_user}
              set_user={set_user}
              username={username}
              set_username={set_username}
              password={password}
              set_password={set_password}
              name={name}
              set_name={set_name}
              email={email}
              set_email={set_email}
              employer_email={employer_email}
              set_employer_email={set_employer_email}
              company={company}
              set_company={set_company}
              about={about}
              set_about={set_about}
            />
          </Route>
          <Route exact path="/user-container" component={UserContainer}>
            <UserContainer
              is_dev_user={is_dev_user}
              username={username}
              set_username={set_username}
              name={name}
              set_name={set_name}
              stack={stack}
              set_stack={set_stack}
              hourly_rate={hourly_rate}
              set_hourly_rate={set_hourly_rate}
              about={about}
              set_about={set_about}
              email={email}
              set_email={set_email}
              devs={devs}
              set_devs={set_devs}
              in_cart={in_cart}
              set_cart={set_cart}
              image={image}
              employer_email={employer_email}
              set_employer_email={set_employer_email}
            />
          </Route>
          <Route exact path="/homepage" component={Homepage}>
            <Homepage
              devs={devs}
              in_cart={in_cart}
              filter_options={filter_options}
              name={name}
              employer_email={employer_email}
            />
          </Route>
          <Route exact path="/dev-aboutme" component={DeveloperAboutMe}>
            <DeveloperAboutMe
              username={username}
              password={password}
              email={email}
              name={name}
              stack={stack}
              hourly_rate={hourly_rate}
              about={about}
            />
          </Route>
          <Route exact path="/employer-aboutme" component={EmployerAboutMe}>
            <EmployerAboutMe
              username={username}
              password={password}
              name={name}
              company={company}
              about={about}
              employer_email={employer_email}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
