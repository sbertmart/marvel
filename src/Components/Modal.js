import { changeModal } from "../redux/userSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import LogInForm from "./LogInForm";
import SignInForm from "./SignInForm"

const Modal = (props) => {   

    const login = useSelector((state) => state.login)
    const dispatch = useDispatch();

    return (
        
        <div className="modalbackground"> 
            <div className="modalcontainer">
                <div className="closebutton">
                <button onClick={() => {dispatch(changeModal(!login.modal))}}>X</button>
                </div>
                {props.tipo === "login" && <LogInForm />}
                {props.tipo === "signin" && <SignInForm />}
                <h1>{props.message}</h1>
            </div>
        </div>  
    );
}


export default Modal;