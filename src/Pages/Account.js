import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { changeLogin } from "../redux/userSlice";
import {Link} from 'react-router-dom';

const Account = (props) => {

    const login = useSelector((state) => state.login)
    const dispatch = useDispatch();

    const logOut = () => {
        localStorage.removeItem("logged");
        dispatch(changeLogin(false));
    }

    return (
        <div className="account-container mt-4 d-flex justify-content-center">
            <div className="account">
                
                <h2>Your Account</h2>
                <p>Username: {props.logged.userName}</p>
                <div>
                <Link to="/"><button className="submit3" onClick={logOut}>Log Out</button></Link><br />
                <Link to="/database"><button className="submit3">Access the database</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Account;