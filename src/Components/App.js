import Admin from "../Components/Admin";
import logo from '../img/Marvel_Logo.svg';
import {Route, Routes, Link} from 'react-router-dom';
import Account from "../Pages/Account";
import "../styles.css"
import Home from '../Pages/Home.js'
import CollectCards from '../Pages/CollectCards.js'
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { changeLogin } from "../redux/userSlice";
import { useEffect } from "react"
import CharacterDetails from '../Pages/CharacterDetails';

function App() {


const getDataFromLS = () => {
    const data = localStorage.getItem("logged");
    if(data) {return JSON.parse(data);
    } else {
        return []
    }
    };

const logged = getDataFromLS(); 


const login = useSelector((state) => state.login)
const dispatch = useDispatch();



useEffect(() => {
  if(logged.username) {
    dispatch(changeLogin(true));}
  }
  )

  return (
    <>
    <div className="menu-container">
      <div className="menu">
        <div className="logomenu">
        <div href="#home"><img src={logo} width="150"></img></div>
        <div className="brand">data cards</div>
        </div>
        <div className="navigation">
          <Link className="link" to="/">HOME</Link>
          {login.login && <Link className="link" to="/database"> ACCESS DATABASE</Link>}
          <Link className="link adminonly" to="/admin">ADMIN ONLY</Link>
        </div>
      </div>
    </div> 
  
    {login.login && <div className="accountmenu">
          <p className="loggin pt-2 pb-2"><b>Welcome {logged.username}</b>, <Link to="/account">Access your account</Link></p>    
    </div>}
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/database" element={<CollectCards />}/>
      <Route path="/account" element={<Account logged={logged} />}/>
      <Route path="/:id" element={<CharacterDetails />}/>
      <Route path="/admin" element={<Admin />}/>
    </Routes>
  </>
  );
}

export default App;
