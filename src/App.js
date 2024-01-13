import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const[countryname,setContryname] = useState(["India","China","Amrica"]);
  
//   useEffect(()=>{
//    getCountrydata();
//   },[]);

// const getCountrydata = async()=>{

//   const data = await fetch("localhost://1234/api/Admin/GetCountryMasterDropDownValues");
//   const json = await data.json;
//   console.log(json);
//   setContryname(json);
// }

  return (
    <div className="App">
      <select>
      {
      countryname.map((country,index)=>{
        return <option value={country} key={index}>{country}</option>
      })
    }
      </select>
   
    </div>
  );
}

export default App;
