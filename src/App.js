import React, {Fragment} from "react";
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";
import './App.css';
//import {useEffect, useState} from 'react';

// function App(){
//   const [backendData, setBackendData] = useState([{}])

//   useEffect(() => {
//     fetch("/api").then(
//       response => response.json()
//     ).then(
//       data => {
//         setBackendData(data)
//       }
//     )
//   },[])

//   return (
//     <div>
//       {(typeof backendData.users === 'undefined') ? (
//         <p>Loading...</p>
//       ) :}
//     </div>
//   )
// }


function App() {
 
  return (
    <Fragment>
     <div className="container">
       <InputTodo />
       <ListTodo />
     </div>
    </Fragment>
  );
}

export default App;
