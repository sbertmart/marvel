import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/Marvel_Logo.svg';
import {Route, Routes, Link} from 'react-router-dom';
import Account from "../Pages/Account";
import "../styles.css"
import Home from '../Pages/Home.js'
import CollectCards from '../Pages/CollectCards.js'
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { changeLogin } from "../redux/userSlice";

function App() {

const login = useSelector((state) => state.login)
const dispatch = useDispatch();

  return (
    <>
    <Navbar className="menu">
      <Container className="d-flex align-items-end justify-content-between">
        <div className="d-flex logomenu">
        <Navbar.Brand href="#home"><img src={logo} width="150"></img></Navbar.Brand>
        <div className="brand">data cards</div>
        </div>
        <Nav className="navigation">
          <Link className="link" to="/">HOME</Link>
          {login.login && <Link className="link" to="/collect-cards"> COLLECT CARDS</Link>}
          <button className="link" onClick={() => {dispatch(changeLogin(!login.login))}}>CAMBIAR LOGIN</button>
        </Nav>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown button
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li className="dropdown-item">Action</li>
            <li className="dropdown-item">Action</li>
            <li className="dropdown-item">Action</li>
          </div>
        </div>
      </Container>
    </Navbar> 
  
    {login.login && <div className="accountmenu">
          <p className="loggin pt-2 pb-2"><b>Bienvenido Sergi</b>, <Link to="/account">Accede a tu cuenta</Link></p>    
    </div>}
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/collect-cards" element={<CollectCards />}/>
      <Route path="/account" element={<Account />}/>
    </Routes>
  </>
  );
}

export default App;
