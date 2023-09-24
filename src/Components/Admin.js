import { useState, useEffect } from "react";
import UsersTable from "../Components/UsersTable";


const Admin = ()  => {

    const getDataFromLS = () => {
        const data = localStorage.getItem("users");
        if(data) {return JSON.parse(data);
        } else {
            return []
        }
    };

    const [users, setUsers] = useState(getDataFromLS);

    const [adminLog, setAdminLog] = useState(false);
    const [error, setError] = useState(false);
    const [adminName, setAdminName] = useState("");
    const [adminPassword, setAdminPassword] = useState("");

    const handleAdminSubmit = (e) => {
        setError(false);
        e.preventDefault();
        let admin = {
            adminName,
            adminPassword
        }
        if(adminName === "marvelAdmin" && adminPassword === "dc") {
            setAdminLog(true);
            
        } else {setError(true)}
    
    }

    const deleteUser = (username) => {
        const filteredUsers = users.filter((u,index)=>{
            return u.username !== username })

        setUsers(filteredUsers);
    } 

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
        },[users])
    

    
    return (
        <div className="admin-area">
            <form className="form" onSubmit={handleAdminSubmit}>
                    <h3>Log in</h3>
                    <label>Username</label><br />
                    <input name="username"  type="text" onChange={(e) => {setAdminName(e.target.value)}}></input> <br />
                    <label>Password</label><br />
                    <input name="password" type="password" value={adminPassword} onChange={(e) => {setAdminPassword(e.target.value)}}></input> <br />
                    <input className="admin-button" type="submit" value="Log In"></input>
                    {error && <div className="alert">
                        <h3>The admin username or password are wrong</h3>
                    </div>}
                    {adminLog && 
                        <div>
                        <div className="success2">
                        <h3>Now you're ready to admin Marvel Data Card's users</h3>
                        </div>
                        <table className="admintable">
                            <thead>
                                <tr>
                                    <th className="thusername">Username</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                <UsersTable users={users} deleteUser={deleteUser}/>
                            </tbody>
                        </table>
                    </div>}
                
                </form>
            <div>
                
            </div>
        </div>
    )
}

export default Admin;