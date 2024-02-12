import React, { useContext, useState } from "react";
import { ThemeContext, UserContext  } from "./Store";

const Login = () => {
  const{ theme, setTheme } = useContext(ThemeContext);
  const{setUserDetails} = useContext(UserContext);
  const [emailTxt, setEmailTxt] = useState("");
  const [passwordTxt, setPasswordTxt] = useState("");
  const canLogin = emailTxt !== '' && passwordTxt !== '';

  function singInForm(e) {
    e.preventDefault();
    setUserDetails({
        email: emailTxt,
        password: passwordTxt
    })
   /*  console.log(userDetails.password); */
  }

  return (
    <>
      <form onSubmit={singInForm} className={theme}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={emailTxt}
          onChange={(e) => setEmailTxt(e.target.value)}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={passwordTxt}
          onChange={(e) => setPasswordTxt(e.target.value)}
        />

        <button type="submit">Submit</button>
        {console.log(!canLogin)}
        {!canLogin && <p>Need to fill both field</p>}
      </form>
      <hr />
      <input
        type="checkbox"
        name="myCheckbox"
        value={theme} 
        onChange={(e) => setTheme(e.target.checked ? 'bg-dark' : 'bg-light')}
      />
    </>
  );
};

export default Login;
