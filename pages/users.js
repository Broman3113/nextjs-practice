import Link from "next/link";
import {useState} from "react";
import MainContainer from "../components/MainContainer";

const Users = () => {
    const [users, setUsers] = useState([
        {id: 1, name: 'John'},
        {id: 2, name: 'Jane'},
        {id: 3, name: 'Bob'},
    ]);
    return (
        <MainContainer title="Users">
            <h1>Users</h1>
            <ul>
                {users.map(user => <li key={user.id}>
                    <Link href={`users/${user.id}`}>
                        {user.name}
                    </Link>
                </li>)}
            </ul>
        </MainContainer>
    );
};

export default Users;
