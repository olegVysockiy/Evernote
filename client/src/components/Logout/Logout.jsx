import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { delUser } from '../../redux/actions/userAction'

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    window.localStorage.clear();
    dispatch(delUser());
    navigate('/');
  }, []);
  return <div></div>;
}

export default Logout;
