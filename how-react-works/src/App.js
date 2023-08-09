import { useState } from "react";
import TextExpander from './componets/TextExpander'


const content = [
  {
    summary: "React is a library for building UIs",
    details:
      "Dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "State management is like giving state a home",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    summary: "We can think of props as the component API",
    details:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export default function App() {
  return (
    <div>
      <Tabbed content={content} />
      <TextExpander>space travel is the ultimate adventure! Imagine soaring past the stars
  and exploring new worlds. It's the stuff of dreams and science fiction,
  but believe it or not, space travel is a real thing. Humans and robots
  are constantly venturing out into the cosmos to uncover its secrets and
  push the boundaries of what's possible.</TextExpander>

  <TextExpander showMoreButton="Expand Text" showLessButton="Collapse Text" showWordCount={20} className="tab-undo"> space travel is the ultimate adventure! Imagine soaring past the stars
  and exploring new worlds. It's the stuff of dreams and science fiction,
  but believe it or not, space travel is a real thing. Humans and robots
  are constantly venturing out into the cosmos to uncover its secrets and
  push the boundaries of what's possible.</TextExpander>

  <TextExpander expanded={true}>space travel is the ultimate adventure! Imagine soaring past the stars
  and exploring new worlds. It's the stuff of dreams and science fiction,
  but believe it or not, space travel is a real thing. Humans and robots
  are constantly venturing out into the cosmos to uncover its secrets and
  push the boundaries of what's possible.</TextExpander>
  <a href="https://codesandbox.io/s/react-challenge-text-expander-final-zy6f5w?file=/src/App.js:1110-1126" target="_blank">Ref Link: https://codesandbox.io/s/react-challenge-text-expander-final-zy6f5w?file=/src/App.js:1110-1126</a>
    </div>
  );
}

function Tabbed({ content }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="tabs">
        <Tab num={0} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={1} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={2} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={3} activeTab={activeTab} onClick={setActiveTab} />
      </div>

      {activeTab <= 2 ? (
        <TabContent item={content.at(activeTab)} key={content.at(activeTab).summary}/>
      ) : (
        <DifferentContent />
      )}
    </div>
  );
}

function Tab({ num, activeTab, onClick }) {
  return (
    <button
      className={activeTab === num ? "tab active" : "tab"}
      onClick={() => onClick(num)}
    >
      Tab {num + 1}
    </button>
  );
}

function TabContent({ item }) {
  const [showDetails, setShowDetails] = useState(true);
  const [likes, setLikes] = useState(0);

  function handleInc() {
    setLikes((like) => like + 1);
  }

  const handleUndo = () => {
    setShowDetails(true);
    setLikes(0);
  }

  const handleUndoLater = () => {
    setTimeout(handleUndo , 2000);
  }

  const handleTripleInc = () => {
    //never use this
    /* setLikes(likes + 1);
    setLikes(likes + 1);
    setLikes(likes + 1); */

     //use this
   /*  setLikes(like => like + 1);
    setLikes(like => like + 1);
    setLikes(like => like + 1); */

    //OR use this
    setLikes(like => like + 3);
  }

  return (
    <div className="tab-content">
      <h4>{item.summary}</h4>
      {showDetails && <p>{item.details}</p>}

      <div className="tab-actions">
        <button onClick={() => setShowDetails((h) => !h)}>
          {showDetails ? "Hide" : "Show"} details
        </button>

        <div className="hearts-counter">
          <span>{likes} ❤️</span>
          <button onClick={handleInc}>+</button>
          <button onClick={handleTripleInc}>+++</button>
        </div>
      </div>

      <div className="tab-undo">
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleUndoLater}>Undo in 2s</button>
      </div>
    </div>
  );
}

function DifferentContent() {
  return (
    <div className="tab-content">
      <h4>I'm a DIFFERENT tab, so I reset state 💣💥</h4>
    </div>
  );
}
