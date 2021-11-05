import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Form from './components/Form/Form'
import List from './components/List/List'
import NavBar from './components/NavBar/NavBar';
import Registration from './components/Registration/Registaration';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';

// ==========>>>>> Новый синтаксис "react-router-dom" <<<<<<<<<<<<==========
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/registration' element={<Registration/>} />
        <Route path='/logout' element={<Logout/>} />
        <Form />
        <List />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
