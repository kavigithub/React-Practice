import React, { useState } from 'react'

import Button from './Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const About = () => {
  const [textNeedChange, setTextNeedChange] = useState('change text form');

  function makeCapitalText(textNeedChange: string){
    const arr = textNeedChange.split(" ")
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
   const str2 = arr.join(" ");
   return str2;
  }

  const showAlert = (param: any) => {
    alert(`Button clicked! Text: ${param}`);

    param === 'UpperCase' && setTextNeedChange(() => textNeedChange.toUpperCase());
    param === 'LowerCase' && setTextNeedChange(() => textNeedChange.toLowerCase());
    param === 'CapitaliseCase' && setTextNeedChange(() => makeCapitalText(textNeedChange));
  }

  const showToastMessage = (param: string) => {
    toast.success(`${param} Success Notification !`, {
        position: toast.POSITION.TOP_CENTER
    });
  };

  return (
    <div>
      <Button text="UpperCase" onClick={() => showAlert('UpperCase')}></Button>
      <Button text="LowerCase" onClick={() => showAlert('LowerCase')}></Button>
      <Button text="CapitaliseCase" onClick={() => showAlert('CapitaliseCase')}></Button>
      <p>{textNeedChange}</p>


        <div>
            <button className='btn btn-primary m-1' onClick={() => showToastMessage('UpperCase')}>UpperCase Notify</button>
            <button className='btn btn-primary m-1' onClick={() => showToastMessage('LowerCase')}>LowerCase Notify</button>
            <button className='btn btn-primary m-1' onClick={() => showToastMessage('CapitaliseCase')}>CapitaliseCase Notify</button>
            <ToastContainer />
        </div>  
    </div>
  )
}

export default About