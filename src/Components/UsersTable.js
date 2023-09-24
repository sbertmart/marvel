const UsersTable = ({users, deleteUser}) => {

    return users.map(u=>(
        <tr>
            <td>{u.username}</td>
            <td><button className="deletebutton" onClick={()=>deleteUser(u.username)}> - </button></td>
        </tr>
    ))
    

}

export default UsersTable;