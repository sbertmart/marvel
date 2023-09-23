import { changeModal } from "../redux/userSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Form from "./Form";

const Modal = (props) => {   

    const login = useSelector((state) => state.login)
    const dispatch = useDispatch();

    return (
        
        <div className="modalbackground"> 
            <div className="modalcontainer">
                <div className="closebutton">
                <button onClick={() => {dispatch(changeModal(!login.modal))}}>X</button>
                </div>
                <Form tipo={props.tipo}/>
                <h1>{props.message}</h1>
            </div>
        </div>  
    );
}


export default Modal;