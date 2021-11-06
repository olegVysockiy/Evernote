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
import { useSelector } from 'react-redux';

// ==========>>>>> Новый синтаксис "react-router-dom" <<<<<<<<<<<<==========
function App() {
  const user = useSelector((state) => state.user)
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {user && <Route path='/' element={
          <>
            <Form />
            <List />
          </>}
        />}
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
