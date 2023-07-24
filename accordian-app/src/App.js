import "./App.css";
import { useState } from "react";
import { faqs } from "./faq";
import Accordian from "./Accordian";

function App() {
   const [isOpen, setIsOpen] = useState(0);
      {/* <Accordian currentOpen={isOpen == index}></Accordian> */} 
  return (
      <div className="App">
        {faqs.map((faq, index) => (
          <Accordian title={faq.title} key={index} num={index} currentOpen={isOpen} setIsOpen={setIsOpen}>{faq.text}</Accordian>
        ))}
      </div>
  );
}

export default App;


 {/* <div className="App">
      {faqs.map((el, index) => (
        <Accordian
          key={index}
          data={el}
          isOpen={isOpen}
          onChangeOpen={setIsOpen}
          num={index}
        >
          {el.text}
        </Accordian>
      ))}
    </div> */}
