import React from 'react'

const HOCdemo = (OriginalComponent) => {
  let sampleObject = {
    name: 'Sandip',
    role: 'FrontEnd Developer'
  }
  function newFunction() {
    return  <OriginalComponent value={sampleObject}></OriginalComponent>
  }
  return newFunction 
}
export default HOCdemo