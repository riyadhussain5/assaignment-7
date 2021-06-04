
import './App.css';
import React, {useState,useEffect} from 'react';
import personalData from './data/data.json'
import Personal from './Components/personal';
import Cost from './Components/cost/cost';

function App() {
  const Boxing ={width:'40%',display:"flex"}
  const [setPerson]= useState([]);
  const [cost,setCost]= useState([]);
  const addHandler =(person) =>{
    const newCost = [...cost,person]
    setCost(newCost)
  }
  useEffect(() =>{
    setPerson(personalData)
    
  },[])
  return (
    <div className="App">
     <h1>Bangladesh Cricket Team</h1>
     <h2>Member :{personalData.length - cost.length }</h2>
     <h2>Selected member :{cost.length}</h2>
     <Cost cost={cost}></Cost>
     <ul style={Boxing}>
       {personalData.map(person=> <Personal key={person.id} addHandler={addHandler}   person={person}></Personal>)}
      </ul>
    </div>
  );
}

export default App;
