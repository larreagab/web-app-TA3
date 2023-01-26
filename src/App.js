//import logo from './logo.svg';
import {useState,useEffect} from 'react';
import './App.css';
import { getStoreApi } from './Api/store';
function App() {
  const [store,setstore]=useState(null);
  useEffect(()=>{(async () => {
  let response = await getStoreApi("Daily_Customer_Count",10);
  setstore(response);
  console.log(response[0]);
})();},[])
  
  return (
    <div >
      <div className='title' >
      <div >Identificador</div><div> Numero de clientes mensuales</div>
      </div>
      {
        
        store &&(
        
        store.map((Store)=>
        <div className='store-container'>
        <div key={Store.Store_id}>{Store.Store_id}</div>
        <div key={Store.Daily_Customer_Count} >{Store.Daily_Customer_Count}</div>
        </div>
        ))
      }
      
    </div>
  );
}

export default App;
