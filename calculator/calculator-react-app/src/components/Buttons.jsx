import React, { MouseEventHandler, useState } from 'react'

/* interface ButtonFormate {
  displayBtnVal: string[]
    handleClickEvt: MouseEventHandler<HTMLButtonElement, MouseEvent>
} */


const Buttons = ({displayBtnVal, handleClickEvt}) => {
  return (
    <div className='my-3 flex flex-wrap'>
        {
            displayBtnVal.map((buttonName) => (
                <button key={buttonName} className='bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3 w-1/6' onClick={() => handleClickEvt(buttonName)}>{buttonName}</button>
            ))
        }
    </div>
  )
}

export default Buttons