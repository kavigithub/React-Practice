import React, { useEffect, useState } from 'react'
  
let timer = new Date();

const Clock = () => {
  const [updateTime, setUpdateTime] = useState(timer);  

  useEffect(() => {
    let updateTimeDate = setInterval(() => {
        setUpdateTime(new Date());
    }, 1000);

    return () => {
        clearInterval(updateTimeDate);
       // console.log(updateTime);
    }

  }, [])


  return (
    <div className="d-flex flex-row-reverse p-3">{updateTime.toLocaleDateString()}  {updateTime.toLocaleTimeString()} </div>
  )
}

export default Clock