import React from 'react'
import { Header } from './header/Header';
import { Home } from './home/Home';
import { Footer } from './footer/Footer'
import { Collection } from './collection/Collection';


export const PrincipalScreen = () => {
    return (
        <div>
            <Header/>
            <Home/>
            <Collection/>
            <Footer/>
        </div>
    )
}
