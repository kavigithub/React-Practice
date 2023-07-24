import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import FormAddPeople from './components/FormAddPeople';
import FormSplitBill from './components/FormSplitBill';
import PeopleList from "./components/PeopleList";
import { initialPeople } from "./initialPeople";

function App() {
  const [isVisibleAddForm, setIsVisibleAddForm] = useState(false);
  const [peopleList, setPeopleList] = useState(initialPeople);
  const [selectedPeople, setSelectedPeople] = useState(null);

  const addNewPeople = (newPeople) => {
    setPeopleList((prevFrd) => [...prevFrd, newPeople]);
    setIsVisibleAddForm(false);
  }

  const handelSelectPeople = (people) => {
    //setSelectedPeople(people);
    setSelectedPeople((curretPeople) => curretPeople?.id === people?.id ? null : people)
  }

  const handelSpitBill = (value) => {
    console.log(value);
    //setSelectedPeople(selectedPeople.balance = value);
    setPeopleList((abcd) => abcd.map(abc =>  abc.id === selectedPeople.id ? {...abc, balance: abc.balance + value} : abc))

    setSelectedPeople(null);
  }


  //console.log(selectedPeople);
  return (
    <div className="App">
      <div className='sidebar'>
          <PeopleList peopleList={peopleList} onSelection={handelSelectPeople} selectedPeople={selectedPeople}></PeopleList>
          <FormAddPeople isVisibleAddForm={isVisibleAddForm} addPeopleList={addNewPeople}></FormAddPeople>
          <Button onClick={() => setIsVisibleAddForm(show => !show)}>{isVisibleAddForm ? 'Close' : 'Add People'}</Button>
      </div>
         {selectedPeople && <FormSplitBill selectedPeople={selectedPeople} onSpitBillSubmit={handelSpitBill}/>}
    </div>
  );
}

export default App;
