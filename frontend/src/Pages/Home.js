import React from 'react'
import { Header } from '../components/Header/Header';
import { UserList } from './UserList';
import { Footer } from '../components/Footer';

export const Home = () => {
 
    return (
        <div>

            <Header  />
            {/* <Crousal /> */}
           
            <UserList  />
            <Footer />
        </div>
    );
}
