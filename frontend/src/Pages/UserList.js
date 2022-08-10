import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const UserList = () => {

    const [users, setUsers] = useState([])
    console.log(users);
    const vehicleOwnerHandler = (data) => {
        console.log(data);
    }
    const getAllUsers = async () => {
        const { data } = await axios.get('/api/v1/all-users')
        setUsers(data.data);
    }
    useEffect(() => {
        getAllUsers()
    }, [])
    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4 p-5">
                {users.map((user) => (<div className="col" key={user._id} >
                    <div className="card h-100" onClick={() => vehicleOwnerHandler(user)}>
                        <div className="card-body">
                            <h5 className="card-title">{user.name} { user.surname }</h5>
                            <p>{user.email}</p>
                            <p>{user.phone}</p>
                            <p>{user.location}</p>
                        </div>
                    </div>
                </div>))}
            </div>
        </>
    )
}
