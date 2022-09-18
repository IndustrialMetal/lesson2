import {useEffect, useState} from "react";
import User from "./User";

export function Users() {

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState({})
    const lift = (obj) => {
        setUser(obj)
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then(value => {
                setUsers(value);
            })
    }, [])

    return (<div>
        <h3>{user?.email}</h3>
        <h4>{user.address?.street}</h4>

        {users.map((user, index) =>
        <User item={user} key={index} lift={lift}/>
        )}
    </div>);
}

export default Users;