import React, {useState} from 'react';
import Button from './Button';

const AddCricketorForm = ({addNewCricketor}) => {
  const [name, setName] = useState(""); 
  const [country, setCountry] = useState(1); 
  const [role, setRole] = useState(1);
  const [battingStyle, setBattingStyle] = useState(1);
  const [bowlingStyle, setBowlingStyle] = useState(1);
  const [edit, setEdit] = useState(null);

  
  const getFormDetails = (e) => {
    //whats with this 'e' here actually? How does it get here?
    //Ans: as soon as the submit event happens,  onSubmit={getFormDetails} React will call this submit event function. i.e getFormDetails, And when it does so,  it will pass into the function, the event object. So an object with all information about current event 
    //onSubmit={e => getFormDetails(e)}
    console.log(e);
    e.preventDefault();

    if(!name || !country || !role || !battingStyle || !bowlingStyle) return;

    const id = crypto.randomUUID();

    const newObj = { id, name, country, role, battingStyle, bowlingStyle}
    console.log(newObj) // for testing purposes only - remove

    addNewCricketor(newObj);

    setName('');
    setCountry(1);
    setRole(1);
    setBattingStyle(1);
    setBowlingStyle(1);
  }

  return (
    <form className='row gy-2 gx-3 align-items-center' onSubmit={getFormDetails}>
        <div className="mb-3 col-auto">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" id="name" placeholder="add your favourite name" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>

        <div className='mb-3 col-auto'>
        <label className="form-label">Country</label>
            <select className="form-select" value={country} onChange={(e) => setCountry(e.target.value)}>
                <option value="India">India</option>
                <option value="Australia">Australia</option>
                <option value="South Africa">South Africa</option>
                <option value="New Zealand">New Zealand</option>
                <option value="England">England</option>
                <option value="West Indies">West Indies</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Zimbawe">Zimbawe</option>
            </select>
        </div>

        <div className="mb-3 col-auto">
            <label className="form-label">Role</label>
            <select className="form-select" value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="Batsman">Batsman</option>
                <option value="Bowler">Bowler</option>
                <option value="Allrounder">Allrounder</option>
            </select>
        </div>  

        <div className='mb-3 col-auto'>
        <label className="form-label">Batting style</label>
<select className="form-select" value={battingStyle} onChange={(e) => setBattingStyle(e.target.value)}>
                <option value="Right Handed Bat">Right Handed Bat</option>
                <option value="Left Handed Bat">Left Handed Bat</option>
            </select>
        </div>

         <div className="mb-3 col-auto">
            <label className="form-label">Bowling style</label>
            <select className="form-select" value={bowlingStyle} onChange={(e) => setBowlingStyle(e.target.value)}>
                <option value="Right-arm pace/seam bowling">Right arm pace/seam bowling</option>
                <option value="Left-arm pace/seam bowling">Left arm pace/seam bowling	</option>
                <option value="Right-arm spin bowling">Right-arm spin bowling</option>
                <option value="Left-arm spin bowling">Left-arm spin bowling	</option>
            </select>
        </div> 

        <div className="mb-3 col-auto">
        <label className="form-label"></label>
         <Button>{edit ? 'Edit Details' :'Add Fav Cricketer'}</Button>  
        </div>
    </form>
  )
}

export default AddCricketorForm