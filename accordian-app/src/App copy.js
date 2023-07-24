import "./App.css";
import { useState } from "react";
import { faqs } from "./faq";


const Accordian = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className="accordion">
      {data.map((faq, index) => (
        <AccordianItem
          key={index}
          num={index}
          text={faq.text}
          title={faq.title}
          isOpenState={isOpen}
          handleToggle={handleToggle}
        />
      ))}
    </div>
  );
};

const AccordianItem = ({ num, text, title, isOpenState, handleToggle }) => {
  /*  const [isOpen, setIsOpen] = useState(false);

  function handleToggle(){
    setIsOpen((isOpen) => !isOpen);
  } */

  return (
    <>
      {/*  <div className='item' onClick={() => setIsOpen((item) => !item)}> */}
      <div
        className={`item ${isOpenState ? "open" : ""}`}
        onClick={() => handleToggle()}
      >
        <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
        <p className="text">{title}</p>
        <p className="icon">{isOpenState ? "-" : "+"}</p>
        {isOpenState && <p className="content-box">{text}</p>}
      </div>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Accordian data={faqs} />
    </div>
  );
}

export default App;
