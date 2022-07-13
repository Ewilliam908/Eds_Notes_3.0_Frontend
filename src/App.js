import React, {Fragment} from "react";
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";
import './App.css';

function App() {
  return (
    <Fragment>
     <div className="container">
       <inputTodo />
       <listTodo />
     </div>
    </Fragment>
  );
}

export default App;
