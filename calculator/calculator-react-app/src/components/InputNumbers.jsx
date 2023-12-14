import React, { useState } from 'react'

const InputNumbers = ({displayValue}) => {
 
  return (
    <div>
        <input type="text"
  placeholder="Custom focus style"
  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" value={displayValue} readOnly/>
    </div>
  )
}

export default InputNumbers