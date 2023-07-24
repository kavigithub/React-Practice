import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CricketorList from './components/CricketorList';
import AddCricketorForm from './components/AddCricketorForm';
import { useState } from 'react';
import { initialData } from "./cricketor";
import Search from './components/Search';


function App() {
  const [addCricketor, setAddCricketor] =  useState(initialData);
  const [selectedEdit, setSelectedEdit] = useState(addCricketor);
  const [clickEdit, setClickEdit] = useState(false);
  const [searchTxt, setSearchTxt] = useState('');  

  //Lift state up
  const handleNewCricketor = (newCricketor) => {
    setAddCricketor((prev) => [...prev, newCricketor]);
  }

  const handleDeleteCricketor = (selected) => {
    // console.log(selected);
    setAddCricketor((item) => item.filter((current) => current !== selected));
  }

const handleEditCricketor = (selected) => {
  handleDeleteCricketor(selected);
 // setAddCricketor((abcd) => abcd.map(abc =>  abc.id === selected.id ? {...abc, balance: abc.balance + value} : abc))
 setSelectedEdit((item) => item.filter((current) => current === selected))
}

/* const handleChange = e => {
  setSearchTxt(e.target.value);
};

const filteredCricketer = () => {
  setAddCricketor((items) => items.filter((item) => item.name.toLowerCase().includes(searchTxt.toLowerCase())))
} */

  return (
    <div className="App">
        <h1 className='bg-primary text-white p-3 mb-4'>  🏏  Add Your Favourite Cricketer 🏏 </h1>
      {/*   <div className='my-2'>
            <Search filteredCricketer={filteredCricketer} handleChange={handleChange}></Search>
        </div> */}
        <div>
          
        </div>
        <div className="container text-center">
        <CricketorList initialData={addCricketor} onDeleteCricketor={handleDeleteCricketor} clickEdit={clickEdit}></CricketorList>
        <hr></hr>
        <AddCricketorForm addNewCricketor={handleNewCricketor} onEditCricketor={handleEditCricketor}></AddCricketorForm>
        </div>
    </div>
  );
}

export default App;
