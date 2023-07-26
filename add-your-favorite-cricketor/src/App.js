import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CricketorList from './components/CricketorList';
import AddCricketorForm from './components/AddCricketorForm';
import { useState } from 'react';
import { initialData } from "./cricketor";
import EditForm from './components/EditForm';


function App() {
  const [addCricketor, setAddCricketor] =  useState(initialData);
  const [selectedEdit, setSelectedEdit] = useState(null);
  const [isEditSelected, setIsEditSelected] = useState(false);

  //Lift state up
  const handleNewCricketor = (newCricketor) => {
    setAddCricketor((prev) => [...prev, newCricketor]);
  }

  const handleDeleteCricketor = (selected) => {
    setAddCricketor((item) => item.filter((current) => current !== selected));
  }

const handleEditCricketor = (selected) => {
  console.log(selected);
  setSelectedEdit(selected);
  setIsEditSelected(true);
  //handleDeleteCricketor(selected);
/* setAddCricketor((items) => items.map((item) => item.id === selected.id ? {name: item.name, country: item.country, role: item.role, battingStyle: item.battingStyle, bowlingStyle: item.bowlingStyle} : item)) */
setAddCricketor((items) => items.map((item) => item?.id === selected?.id ? {...item, name: item.name} : item)); 

}

  return (
    <div className="App">
        <h1 className='bg-primary text-white p-3 mb-4'>  🏏  Add Your Favourite Cricketer 🏏 </h1>
        <div className="container text-center">
        <CricketorList initialData={addCricketor} onDeleteCricketor={handleDeleteCricketor} onEditCricketerInfo={handleEditCricketor}/>
        <hr></hr>
        {isEditSelected ? <EditForm selectedEdit={selectedEdit} editCricketorDetails={handleEditCricketor} isEditDone={setIsEditSelected}/> : <AddCricketorForm addNewCricketor={handleNewCricketor} />}
        </div>
    </div>
  );
}

export default App;
