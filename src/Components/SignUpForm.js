import {useState,useEffect, useRef} from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { changeModal } from "../redux/userSlice";
import { Link } from "react-router-dom"


const SignInForm = () => {

    const getDataFromLS = (id) => {
        const data = localStorage.getItem(id);
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
    const [passError, setPassError] = useState(false);
    const [takenUser, setTakenUser] = useState(false);
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
        setSuccess(false);
        setEmptyError(false);
        setPassError(false);
        setTakenUser(false);
        e.preventDefault();
        const {username, password} = user;
        let isTaken = [];
        isTaken = users.filter(u => u.username === user.username);

        if(username === "") {
            setEmptyError(true);
        }else if (password === ""){
            setEmptyError(true);
        }else if (password.length < 5) {
            setPassError(true);
        }else if (isTaken.length > 0) {
            setTakenUser(true);
        }
        else {
            setLogged(user);
            setUsers([...users, user]);
            setSuccess(true);   
        }
    }

    const closeModal = () => {
        dispatch(changeModal(false));
    }

    useEffect(() => {
        setPassError(false);
        setEmptyError(false);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("logged",JSON.stringify(logged));
    }, [success === true])
    
    return (
   
            <div>
                <form className="form">
                    <h3>Sign up</h3>
                    <label>Username</label>
                    <input name="username" onChange={getData} type="text"></input>
                    <label>Password</label>
                    <input name="password" type="password" onChange={getData} ></input>
                    <input className="submit" type="submit" value="Sign Up" onClick={addData}></input>
                    {passError && <div className="alert">
                        <h3>The password must be at least 5 character long</h3>
                    </div>}
                    {takenUser && <div className="alert">
                        <h3>The name is already taken, try another one</h3>
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

export default SignInForm;