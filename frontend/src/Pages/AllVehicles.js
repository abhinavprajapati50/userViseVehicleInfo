import axios from 'axios';
import React, { useEffect, useState } from 'react'
export const AllVehicles = () => {
    const [vehicles, setVehicles] = useState([])
    const getAllUsers = async () => {
        const { data } = await axios.get('/api/v1/all-vehicles')
        setVehicles(data.data);
    }
    useEffect(() => {
        getAllUsers()
    }, [])

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 p-5">
            {vehicles.map((user) => (<div className="col" key={user._id} >
                <div className="card h-100 ">
                    <div className="card-body">
                        <h5 className="card-title">{user.vehicleName} {user.surname}</h5>
                        <p>{user.vehicleBrand}</p>
                        <p>{user.vehicleNumber}</p>
                    </div>
                </div>
            </div>))}
        </div>
    )
}
