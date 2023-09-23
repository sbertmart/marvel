import {useState,useEffect} from "react"

const Form = (props) => {

    const getDataFromLS = () => {
        const data = localStorage.getItem("users");
        if(data) {return JSON.parse(data);
        } else {
            return []
        }
        };
    const [users, setUsers] = useState(getDataFromLS);
    
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("")
    const [passError, setPassError] = useState(false);
    const [logIn, setLogIn] = useState(false);


    const handleLogIn = (e) => {
        e.preventDefault();
        let user = {
            userName,
            userPassword
        }
        const found = users.filter(signed => signed.userName === user.userName && signed.userPassword === user.userPassword);
        console.log(found);
        setLogIn(found.length > -1);

    }

    const handleSignIn = (e) => {
        e.preventDefault();
        let user = {
            userName,
            userPassword
        }
        setPassError(userPassword.length <= 5);
        setLogIn(userPassword.length >= 5)
        if (passError === false) {
        setUsers([...users,user])};
    }
    
    useEffect(() => {

    localStorage.setItem("users", JSON.stringify(users));
    },[users])
    
    return (
        <div>
            {props.tipo === "login" &&
            <div>
                <form className="form" onSubmit={handleLogIn}>
                    <label>Username</label>
                    <input name="username" value={userName} type="text" onChange={(e)=>{setUserName(e.target.value)}}></input>
                    <label>Password</label>
                    <input name="password" value={userPassword} type="password" onChange={(e)=>{setUserPassword(e.target.value)}}></input>
                    <input className="submit" type="submit" value="Log In"></input>
                    {logIn && <div className="alert">
                        <h3>The username doesn't exist or the password is wrong</h3>
                    </div>}
                
                </form>
            </div>    
            }
            {props.tipo === "signin" &&
            <div>
                <form className="form" onSubmit={handleSignIn}>
                    <label>Username</label>
                    <input name="username" value={userName} type="text" onChange={(e)=>{setUserName(e.target.value)}}></input>
                    <label>Password</label>
                    <input name="password" type="password" value={userPassword} onChange={(e)=>{setUserPassword(e.target.value)}}></input>
                    <input className="submit" type="submit" value="Sign In"></input>
                    {passError && <div className="alert">
                        <h3>The password must be at least 5 character long</h3>
                    </div>}
                    {logIn && <div className="success2">
                        <h3>Now you're ready to enjoy our database</h3>
                    </div>}
                </form>
            </div> }
        </div>
    )
}

export default Form;