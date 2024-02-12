import React, { useState } from 'react'
import Login from './Login'
import { ThemeContext, UserContext } from './Store'
import Welcome from './Welcome';
import Button from './Button';

const ContextMain = () => {
    const [theme, setTheme] = useState('bg-light');
    const [userDetails, setUserDetails] = useState(null);
    console.log(userDetails);
  return (
    <ThemeContext.Provider value={{
        theme,
        setTheme
    }}>
    <UserContext.Provider value={{
        userDetails,
        setUserDetails
    }}>
    <div>
        <h1>Context Main</h1>
        <p>This is a context that can be used by any component in the app to access data.</p>
        {
            userDetails !== null ? <Welcome /> : <Login />
        }
        <Button onClick={() => setTheme(theme === 'bg-light' ? 'bg-dark' : 'bg-light')}>Toggle</Button>
    </div>
    </UserContext.Provider>    
    </ThemeContext.Provider>
  )
}

export default ContextMain