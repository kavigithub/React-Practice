import './App.css';
import GeoLocation from './component/GeoLocation';
import RefUseConcept from './component/RefUseConcept';

function App() {

  return (
    <div className="App">
        <h1>Get YOur GeoLocation</h1>
        <GeoLocation></GeoLocation>
        <RefUseConcept></RefUseConcept>
        <a href='https://codesandbox.io/s/react-challenge-usegeolocation-final-2ez9eh' target='_blank' rel="noreferrer" >Link Ref</a>
    </div>
  );
}

export default App;
