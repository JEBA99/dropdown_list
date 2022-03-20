import React, { useState, useEffect } from 'react';
import axios from 'axios';
import fetchQuote from './fetchQuote';
// import testjson from './test_qf.json';
import logo from './logo.svg';

import './App.css';

function App() {
  const [receviedJson, setReceivedJson] = useState([]);
  const [users, setUsers] = useState([]);
  const [adp, setAdp] = useState([]);
   

  const getJsonData = async () => {
    const { data } = await axios.get('./test_qf.json');
    setReceivedJson(Object.assign([], data));
  };

  
  useEffect(()=>{
    getJsonData();
  },[])

  function populateUsers(asid) {
      receviedJson.map((asn) => {
        if(asn.asid === asid) {
          setUsers(Object.assign([], asn.unit));          
        }
      })     
  }

  function populateAdp(userid) {
      users.map((user) => {
        if(user.uid === userid) {
          setAdp(Object.assign([], user.ap));          
        }
      })
  }
  
   return (
     
    <div className="App">
        <select className="dropdown" onChange={(event)=>{ setUsers(Object.assign([]));  setAdp(Object.assign([])); populateUsers(event.target.value)}}>
          {receviedJson.map((asn) => { 
          return(
              <option key={asn.asid} value={asn.asid}>{asn.asn}</option>
          )})}            
        </select>
        {(users.length > 0) ? 
        <select className="dropdown" onChange={(event)=>{ populateAdp(event.target.value)}}>
          {users.map((user) => { 
          return(
              <option key={user.uid} value={user.uid}>{user.uname}</option>
          )})}            
        </select>
        : "" }
        {(adp.length > 0) ? 
          <select className="dropdown">
            {adp.map((adp) => { 
            return(
                <option key={adp.adpid} value={adp.adpid}>{adp.adp}</option>
            )})}            
          </select> 
        : "" }
        
    </div>

  );
}

export default App;
