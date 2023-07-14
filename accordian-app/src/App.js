import './App.css';
import {useState} from 'react';

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

const Accordian = ({data}) => {
  return(
    <div className='accordion'>
     {
      data.map((faq, index) => <AccordianItem key={index} num={index} text={faq.text} title={faq.title}/>)
     }
    </div>
  )
}

const AccordianItem = ({num, text, title}) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle(){
    setIsOpen((isOpen) => !isOpen);
  }

  return(
    <>
     {/*  <div className='item' onClick={() => setIsOpen((item) => !item)}> */}
     <div className={`item ${isOpen ? 'open' : ''}`} onClick={() => handleToggle()}>
        <p className='number'>{num < 9 ? `0${num + 1}`: num + 1}</p>
        <p className='text'>{title}</p>
        <p className='icon'>{isOpen ? '-' : '+'}</p>
        {
          isOpen && <p className='content-box'>{text}</p>
        }
      </div>
    </>
  )
}

function App() {
  return (
    <div className="App">
        <Accordian data={faqs}/>
    </div>
  );
}

export default App;
