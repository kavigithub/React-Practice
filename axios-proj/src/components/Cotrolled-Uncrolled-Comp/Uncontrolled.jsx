import React, { useRef } from 'react'

const Uncontrolled = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  function singInForm(e){
    e.preventDefault();
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  }

  return (
    <form onSubmit={singInForm}>
    <input name='email' type='email' ref={emailRef} placeholder='Email'/>
    <input name='password' type='password' ref={passwordRef} placeholder='Password'  />
    <input type='checkbox' />

    <button type='submit'>Submit</button>
    </form>
  )
}

export default Uncontrolled