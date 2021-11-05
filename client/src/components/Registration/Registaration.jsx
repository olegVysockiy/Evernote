import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../../redux/actions/userAction';

export default function Registration() {
  const history = useNavigate()
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()
  useEffect(() => {
    if (user) {
      history('/');
    }
  }, [user]);
  const regHandler = (e) => {
    e.preventDefault()
    console.log(e.target)
    dispatch(addUser(e.target.value))
  }
  return (
    <form onSubmit={regHandler}>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        <div id="emailHelp" class ="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" />
      </div>
      <button type="submit" class="btn btn-primary">Registration</button>
      <div id="googleHelp" class ="form-text">You can login with Google.</div>
      <button type="submit" class="btn btn-success">Google</button>
    </form>
  )
}
