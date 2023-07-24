import React from 'react'

/* const Accordian = ({data, onChangeOpen, isOpen, num, children}) => {
    const isOpenState = num === isOpen;

    function handleToggle() {
       onChangeOpen(isOpenState ? null : num)
    }
  
  return (
      <div className={`item ${isOpenState ? "open" : ""}`}
        onClick={() => handleToggle()}>
        <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
        <p className="text">{data.title}</p>
        <p className="icon">{isOpenState ? "-" : "+"}</p>
        {isOpenState && <p className="content-box">{children}</p>}
      </div>
  )
} */

const Accordian = ({title, num, children, currentOpen, setIsOpen}) => {
    const isOpen = num === currentOpen;

    const handleToggle = () => {
      setIsOpen(isOpen ? null : num)
    }

      return(
        <>
          <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
            <p className="number">{num < 9 ?  `0${num + 1}` : num + 1}</p>
            <p className='text'>{title}</p>
            <p className="icon">{isOpen ? '-' : '+'}</p>
            {isOpen && <p className="content-box">{children}</p>}
          </div>
        </>
      )
}

export default Accordian