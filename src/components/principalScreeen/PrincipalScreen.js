import React from 'react'
import { Header } from './header/Header';
import { Home } from './home/Home';
import { Footer } from './footer/Footer'
import { Collection } from './collection/Collection';
import { Featured } from './featured/Featured';
import { Offer } from './offer/Offer';
import { NewArrivals } from './newArrivals/NewArrivals';
import { NewSlattler } from './newsletter/NewSlattler';


export const PrincipalScreen = () => {
    return (
        <div>
            <Header/>
            <Home/>
            <Collection/>
            <Featured/>
            <Offer/>
            <NewArrivals/>
            <NewSlattler/>
            <Footer/>
        </div>
    )
}
