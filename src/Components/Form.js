import {useState,useEffect} from "react"


const Form = (props) => {

    const getDataFromLS = (id) => {
        const data = localStorage.getItem(id);
        if(data) {return JSON.parse(data);
        } else {
            return []
        }
        };

    const [users, setUsers] = useState(getDataFromLS("users"));
    
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("")
    const [passError, setPassError] = useState(false);
    const [logIn, setLogIn] = useState(false);
    const [noExiste, setNoExiste] = useState(false);
    const [logged, setLogged] = useState(getDataFromLS("logged"))


    const handleLogIn = (e) => {
        e.preventDefault();
        setLogIn(false);
        setNoExiste(false);
        let user = {
            userName,
            userPassword
        }
       let found = [];
       found = users.filter((u) => (u.userName === user.userName && u.userPassword === user.userPassword));
       console.log(found);
       setNoExiste(found.length === 0); 
       setLogIn(found.length > 0);
       if (found.length > 0) {setLogged(user);}
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        let user = {
            userName,
            userPassword
        }
        setPassError(userPassword.length <= 4);
        setLogIn(userPassword.length > 4)
        if (passError === false) {
        setUsers([...users,user])};
        setLogged(user);
    }
    
    useEffect(() => {

    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("logged", JSON.stringify(logged));
    },[users, logged])


    
    return (
        <div>
            {props.tipo === "login" &&
            <div>
                <form className="form" onSubmit={handleLogIn}>
                    <h3>Log in</h3>
                    <label>Username</label>
                    <input name="username" value={userName} type="text" onChange={(e)=>{setUserName(e.target.value)}}></input>
                    <label>Password</label>
                    <input name="password" value={userPassword} type="password" onChange={(e)=>{setUserPassword(e.target.value)}}></input>
                    <input className="submit" type="submit" value="Log In"></input>
                    {noExiste && <div className="alert">
                        <h3>The username doesn't exist or the password is wrong</h3>
                    </div>}
                    {logIn > 0 && <div className="success2">
                        <h3>Now you're ready to enjoy our database</h3>
                    </div>}
                
                </form>
            </div>    
            }
            {props.tipo === "signin" &&
            <div>
                <form className="form" onSubmit={handleSignIn}>
                    <h3>Sign in</h3>
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