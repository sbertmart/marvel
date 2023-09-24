import logo from '../img/Marvel_Logo.svg';
import { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { changeModal } from "../redux/userSlice"
import Modal from "../Components/Modal"
import {Route, Routes, Link} from 'react-router-dom';
import CollectCards from "../Pages/CollectCards"


const Home = () => {

    const login = useSelector((state) => state.login)
    const [clicked, setClicked] = useState(false);
    const [form, setForm] = useState(null);
    const dispatch = useDispatch(); 

    const triggerModal = (tipo) => {
        setClicked(true);
        if (login.login === false) {
            setForm(tipo);
            dispatch(changeModal(!login.modal))
        }
    }

    return (

        <div>
        {login.modal && <Modal tipo={form} />}
        <div className="divhome">
            <div className="home col-6 d-flex justify-content-center">
                <div className="d-block welcome">
                <h2 className="textohome">
                    Welcome to the
                </h2>
                <img src={logo}></img>
                <div className="brand">
                    data cards
                </div>
                    <div className="botoneslogin mt-4">
                        <div>
                        {!login.login && <button onClick={() => {triggerModal("login")}}>Already a member? Log In</button>}
                    
                        </div>
                        <div>
                        {!login.login && <button onClick={() => {triggerModal("signin")}}>Not a member yet? Sign Up</button>}
                    </div>
                </div>
                {login.login &&
                <div className="start mt-4">
                <Link className="mainbutton" to="/database"><button>ACCESS DATABASE</button></Link>
                </div>}
                </div>
            </div>

        </div>
        <Routes>
            <Route path="/collect-cards" element={<CollectCards />}/>
        </Routes>
        </div>
    );

}

export default Home;