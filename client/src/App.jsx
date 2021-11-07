import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useEffect, useRef } from 'react';
import Form from './components/Form/Form'
import List from './components/List/List'
import NavBar from './components/NavBar/NavBar';
import Registration from './components/Registration/Registaration';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import { useDispatch, useSelector } from 'react-redux';
import { checkUser } from './redux/actions/userAction';

// ==========>>>>> Новый синтаксис "react-router-dom" <<<<<<<<<<<<==========
function App() {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch();
  const url = process.env.REACT_APP_URL_SOCKET;
  const socket = useRef();
  const isCheckedAuth = useRef(false)

  useEffect(() => {
    if (user) {
      socket.current = new WebSocket(url);
      socket.current.onclose = () => {
        console.log('server close')
      };
    }
    
    if (isCheckedAuth && !user) 
    console.log('server open ws connection.')
  }, [user]);

  useEffect(() => {
    dispatch(checkUser());
    isCheckedAuth.current = true
  }, []);
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
