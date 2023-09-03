import React, {  useState } from 'react';
import Header from './components/Header';
import Cards from './components/Cards.js';
import { Routes, Route } from 'react-router-dom';
import AddMovie from './components/AddMovie';
import Details from './components/Details';
import { createContext } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';

const appState = createContext();


function App() {
  const [login , setLogin] = useState(false);
  const [username, setUsername] = useState("")
  return (
    <appState.Provider value={{login,username, setLogin,setUsername}}>
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Cards/>} />
        <Route path='/addmovie' element={<AddMovie/>} />
        <Route path='/detail/:id' element={<Details/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='signup' element={<Signup/>} />
        
       


      </Routes>
    </div>
    </appState.Provider>
  );
}

export {appState}

export default App;
