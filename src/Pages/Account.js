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
        <div className="row d-flex justify-content-center">
            <div className="col-6 mt-4 mb-4 px-4 py-4">
                
                <h2>Your Account</h2>
                <p>Username: {props.logged.userName}</p>
                <div className="d-block">
                <Link to="/"><button className="submit" onClick={logOut}>Log Out</button></Link>
                <Link to="/database"><button className="submit">Access the database</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Account;