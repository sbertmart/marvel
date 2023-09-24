import {useState,useEffect, useRef} from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { changeModal } from "../redux/userSlice";
import { Link } from "react-router-dom"


const LogInForm = () => {

    const getDataFromLS = () => {
        const data = localStorage.getItem("users");
        if(data) {return JSON.parse(data);
        } else {
            return []
        }
        };     
        
    const login = useSelector((state) => state.login)
    const dispatch = useDispatch();

    const [users, setUsers] = useState(getDataFromLS());

    const [user, setUser] = useState({
        username:"",
        password:""
    })

    const [emptyError, setEmptyError] = useState(false);
    const [authError, setAuthError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [logged, setLogged] = useState({});

    const getData = (e) => {
        const {value,name} = e.target;
        setUser(() => {
            return {
                ...user,[name]:value
            }
        })
       
    }

    const addData = (e) => {
        let auth = [];
        setSuccess(false);
        setEmptyError(false);
        setAuthError(false);
        e.preventDefault();
        const {username, password} = user;
        auth= users.filter((u) => u.username === user.username && u.password === user.password);
        if(username === "" || password === "") {
            console.log("arriba a empty error");
            setEmptyError(true);
        } else if (auth.length <= 0) {
            console.log("arriba a auth error");
            setAuthError(true);
        }
        else {
            console.log("arriba al final");
            setLogged(user);
            setSuccess(true);
        }
    }

    const closeModal = () => {
        dispatch(changeModal(false));
    }

    useEffect(() => {
        setEmptyError(false);
        localStorage.setItem("logged",JSON.stringify(logged));
    }, [success === true])
    
    return (
   
            <div>
                <form className="form">
                    <h3>Log in</h3>
                    <label>Username</label>
                    <input name="username" onChange={getData} type="text"></input>
                    <label>Password</label>
                    <input name="password" type="password" onChange={getData} ></input>
                    <input className="submit" type="submit" value="Log In" onClick={addData}></input>
                    {authError && <div className="alert">
                        <h3>Username or password are wrong or the user doesn't exist</h3>
                    </div>}
                    {emptyError && <div className="alert">
                        <h3>One or more fields are empty</h3>
                    </div>}
                    {success && <div className="success2">
                        <h3>Now you're ready to enjoy our database</h3>
                        <Link to="/database"><button className="admin-button" onClick={closeModal}> GO TO THE DATABASE</button></Link>
                    </div>}
                </form>
            </div> 
    )
}

export default LogInForm;