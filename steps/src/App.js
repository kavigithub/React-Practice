import './App.css';

const messages = [
  "Learn React #",
  "Apply For Jobs",
  "Invest your new Income :)"
]

function App() {
  return (
    <div className="steps">
      <div className="numbers">
        <div className="active">1</div>
        <div className="step-2">2</div>
        <div className="step-3">3</div>
      </div>

      <p className="message">Hello</p>

      <div className="buttons">
        <button style={{backgroundColor: "#7950f2", color: "#fff"}}>Previous</button>
        <button style={{backgroundColor: "#7950f2", color: "#fff"}}>Next</button>
      </div>
    </div>
  );
}

export default App;
