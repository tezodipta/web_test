// import { useEffect,useState } from "react"; 
// import "./App.css";
// import  axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   useEffect{() =>{
//     axios.get('http://localhost:5000/getUsers')
//   }}
// }
// src/App.jsx

import UsersList from './UserList.jsx';

function App() {
  return (
    <div className="App">
      <UsersList />
    </div>
  );
}

export default App;
