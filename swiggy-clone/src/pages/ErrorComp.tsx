import React from 'react'
import { useRouteError } from 'react-router-dom';



const ErrorComp = () => {
    const errDefine : any = useRouteError();
    return(
        <div className='d-block mx-auto text-center my-5'>
            <h1 className='slef-align-center'>Opps</h1>
            <h2>Something Went Wrong</h2>
            <figure><img src="https://media.tenor.com/99hQ6v6HcCEAAAAC/cat-crying.gif" alt="not found page"/></figure>
            <h4>{errDefine.status} : {errDefine.statusText}</h4>
        </div>
    )
}

export default ErrorComp;