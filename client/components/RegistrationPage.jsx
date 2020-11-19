import React, { useEffect, useState } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import history from 'history';

const RegistrationPage = ({
  is_logged_in,
  set_login,
  is_dev_user,
  set_user,
  username,
  set_username,
  history,
}) => {
  // If a user is logged in they should not have access to signup or login, they will be redirected straight to respective homepage

  useEffect(() => {
    const token = localStorage.getItem('devdepot_sid');
    fetch('/auth', {
      headers: {
        'Content-Type': 'application/json',
        token: JSON.stringify({ token }),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.is_logged_in) set_login(true);
        if (data.is_dev_user) set_user(true);
        if (data.username) set_username(data.username);
      });
  }, []);

  // TODO: this logic should change once app hooked up
  if (is_logged_in && is_dev_user) {
    return <Redirect to="/dev-aboutme" />;
  }
  if (is_logged_in && !is_dev_user) {
    return <Redirect to="/homepage" />;
  }
  // flex justify-center content-center w-1/4 m-auto my-64
  return (
    // <div className="bg-black h-screen mt-0 place-content-center">
    //   <div className="w-2/6 m-0 m-auto shadow-xl border-solid border-2 border-blue-600 rounded-lg bg-white">
    //     <form className="flex flex-col justify-center items-center py-4 px-4 rounded">
    //     <h1 className="text-2xl">DevDepot</h1>
    //       <div className="space-x-3">
    //         <br></br>
    //         <button
    //           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    //           onClick={() => history.push('/dev-signup')}
    //         >
    //           Developer
    //         </button>
    //         <button
    //           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    //           onClick={() => history.push('/employer-signup')}
    //         >
    //           Employer
    //         </button>
    //       </div>
    //       <br></br>
    //       <div>
    //         Already have an account? Login <Link to="/login"><b className = "text-blue-600">here</b></Link>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 h-screen overflow-hidden">
      <h1 className="registration-logo text-center">DevDepot</h1>
      <div className="registration-box w-2/6 border-double border-2 border-indigo-800 m-0 m-auto rounded-lg bg-white shadow-2xl">
        <form className="flex flex-col justify-center items-center py-4 px-4 rounded pt-60">
          <h1 className="text-2xl registration-box-text">You are</h1>
          <div className="space-x-3">
            <br />
            <button
              className=" registration-button bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-bold py-2 px-4 rounded text-lg shadow-md"
              onClick={() => history.push('/dev-signup')}
            >
              A Developer
            </button>
            <button
              className="registration-button bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-bold py-2 px-4 rounded text-lg shadow-md"
              onClick={() => history.push('/employer-signup')}
            >
              An Employer
            </button>
          </div>
          <br />
          <span className="registration-box-text">
            Already have an account? Login
            <Link to="/login">
              <b className="text-blue-600 animate-pulse"> here</b>
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default withRouter(RegistrationPage);
