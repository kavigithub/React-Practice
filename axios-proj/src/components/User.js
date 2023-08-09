import React, {useState, useEffect} from 'react';
import axios from 'axios';

//const baseUrl = 'https://jsonplaceholder.typicode.com';
const baseUrl = 'https://jsonplaceholder.typicode.com';

const User = () => {
    const [dataList, setDataList] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');
   
   //using promises 
  /*  useEffect(() => {
     axios.get(baseUrl)
     .then((response) => setDataList(response.data))
     .catch((err) => {
        console.log(err);
        setErrorMsg(err.message)
     });
   }, []); */

   //using async await
   const fetchData = async (url) => {
     try {
        const req = await axios.get(url);
        if(req){
          setDataList(req.data);
        }
     } catch (error) {
        setErrorMsg(error.message)
     }       
     
   }
   useEffect(() => {
    fetchData(`${baseUrl}/posts`);
   }, []);

  return (
    <div>
        {errorMsg && <p>{errorMsg}</p>}
        {dataList.map((item) => (
            <div key={item.id}>
                <h2>{item.title.toUpperCase()}</h2>
            </div>
        ))}
    </div>
  )
}

export default User