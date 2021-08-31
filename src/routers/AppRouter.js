import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { PrincipalScreen } from '../components/principalScreeen/PrincipalScreen';
import { ShoppingCart } from '../components/shoppingScreen/ShoppingCart';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <PrincipalScreen/>
                <Switch>
                    <Route exact path="/cart" component={ShoppingCart}/>
                </Switch>
            </div>
        </Router>
    )
}
