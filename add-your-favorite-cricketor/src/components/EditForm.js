import React, {useState} from 'react'
import  Button from './Button';

const EditForm = ({selectedEdit, editCricketorDetails, isEditDone}) => {
    const [name, setName] = useState(selectedEdit?.name); 
    const [country, setCountry] = useState(selectedEdit?.country); 
    const [role, setRole] = useState(selectedEdit?.role);
    const [battingStyle, setBattingStyle] = useState(selectedEdit?.battingStyle);
    const [bowlingStyle, setBowlingStyle] = useState(selectedEdit?.bowlingStyle); 

   const getEditDetails = () => {
    const newObj = {name, country, role, battingStyle, bowlingStyle}
    editCricketorDetails(newObj);
    //isEditDone(false);
   } 

  return (
    <form className='row gy-2 gx-3 align-items-center' onSubmit={getEditDetails}>
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
     <Button>Edit</Button>  
    </div>
    </form>
  )
}

export default EditForm