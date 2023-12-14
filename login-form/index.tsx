import React, { useState } from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import { companyLogo, apiUrl, usersUrl, credentials } from './constant';
import PopupAlert from './PopupAlert';

const App = () => {
  const [userName, setUserName] = useState('');
  const [passwordTxt, setPasswordTxt] = useState('');
  const [alertMsg, setAlertMsg] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const fetchUserData = async () => {
    try {
      const authReponse = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!authReponse.ok) {
        throw new Error(`authReponse : ${authReponse.status}`);
      }

      const data = await authReponse.json();
      const authToken = data.token;
      return authToken;
    } catch (error) {
      console.error('error:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let getAuthToken = await fetchUserData();
      //console.log(getAuthToken);
      let userData = await fetch(usersUrl, {
        headers: {
          Authorization: `Bearer ${getAuthToken}`,
          'Content-Type': 'application/json',
        },
      });
      //console.log(userData);

      if (!userData.ok) {
        throw new Error(`authReponse : ${userData.status}`);
      }

      const getUser = await userData.json();

      if (
        userName !== credentials.email &&
        passwordTxt !== credentials.password
      ) {
        setShowAlert(true);
        setAlertMsg('Please Enter Valid Login Details');
        setUserName('');
        setPasswordTxt('');
        return false;
      }

      if (
        userName === credentials.email &&
        passwordTxt === credentials.password
      ) {
        setShowAlert(true);
        setAlertMsg('Congratulations! Login Successfully');
        console.log(getUser.data);
      }

      setUserName('');
      setPasswordTxt('');
    } catch (error) {
      console.error('error:', error);
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="w-50 m-auto">
      <div className="">
        <div>
          <img className="mb-4" src={companyLogo} alt="logo" width="180" />
          <h6 className="mb-5">Hello there, Sign in to continue</h6>

          <div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="fs-6 mb-2 text-secondary">
                  <small>Username/Email</small>
                </label>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  className="form-control"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <div></div>
              </div>
              <div className="mb-3">
                <label className="fs-6 mb-2 text-secondary">
                  <small>Password</small>
                </label>
                <div className="position-relative">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={passwordTxt}
                    onChange={(e) => setPasswordTxt(e.target.value)}
                  />
                  <span className="position-absolute top-50 end-0 translate-middle-y me-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-eye"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="form-check text-start my-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value="remember-me"
                  id="flexCheckDefault"
                />
                <label
                  className="form-check-label text-secondary"
                  htmlFor="flexCheckDefault"
                >
                  <small>
                    By creating or login into an account, you are agreeing with
                    our{' '}
                    <b className="text-dark-emphasis">Terms and Conditions</b>{' '}
                    and <b className="text-dark-emphasis"> Privacy Policys</b>
                  </small>
                </label>
              </div>
              <button
                type="submit"
                className="btn bg-secondary-subtle w-100 py-2 text-primary-emphasis my-4"
              >
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
      <PopupAlert
        msg={alertMsg}
        showAlert={showAlert}
        onHide={handleCloseAlert}
      />
    </div>
  );
};

render(<App />, document.getElementById('root'));
