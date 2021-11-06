import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../redux/actions/userAction';

export default function Login() {
  const [formInput, setForm] = useState({});
  const navigate = useNavigate()
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);
  const inputChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const regHandler = (e) => {
    e.preventDefault()
    dispatch(loginUser(formInput))
    navigate('/')
  }
  return (
    <form onSubmit={(e) => regHandler(e)}>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" name='email' value={formInput.email} onChange={inputChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" name='password' value={formInput.password} onChange={inputChange} class="form-control" id="exampleInputPassword1" />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
      <div id="googleHelp" class="form-text">You can login with Google.</div>
      <button type="submit" class="btn btn-success">Google</button>
    </form>
  )
}
