import React, { useState } from 'react'

const Controlled = () => {
  // const [emailTxt, setEmailTxt] = useState(); 
  //Warning: A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component.  
  const [emailTxt, setEmailTxt] = useState(''); 
  const [passwordTxt, setPasswordTxt] = useState(''); 
  const [isLog, setIsLog] = useState(false);  

  function singInForm(e){
    e.preventDefault();
    console.log(emailTxt);
    console.log(passwordTxt);
  }

  return (
    /* controlled form example */
    <form onSubmit={singInForm}>
        <input name='email' type='email' placeholder='Email' value={emailTxt} onChange={(e) => setEmailTxt(e.target.value)}/>
        <input name='password' type='password' placeholder='Password' value={passwordTxt} onChange={(e) => setPasswordTxt(e.target.value)} />
        <input checked={isLog} type='checkbox' value={isLog} name="myCheckbox" onChange={e =>setIsLog(e.target.checked)}/>
        <button type='submit'>Submit</button>   
    </form>
  )
}

export default Controlled