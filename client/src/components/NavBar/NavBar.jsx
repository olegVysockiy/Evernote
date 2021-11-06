import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'

export default function NavBar() {
  const user = useSelector((state) => state.user)
  const navigate = useNavigate()
  const homeHandler = () => {
    navigate('/')
  }
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid ">
        <button class="navbar-brand" onClick={homeHandler}>Home</button>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          {!user ? <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/login">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/registration">Registration</a>
            </li>
          </ul> : <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <span class="nav-link active" aria-current="page">Hello, {user.email}</span>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/logout">Logout</a>
            </li>
          </ul>}
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}




