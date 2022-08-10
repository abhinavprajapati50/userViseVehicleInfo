import React from 'react'
import { Footer } from '../components/Footer';
import { Header } from '../components/Header/Header';
// import { changeInCartHandler, CHANGE_IN_CART, REMOVE_ITEM } from '../Redux/Types';
import { AllVehicles } from './AllVehicles';

export const Vehicles = () => {
    return (
        <div>
            <Header  />
            <AllVehicles  />
            <Footer />
        </div>
    );
}
