import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import { ArticleScreen } from '../components/article/ArticleScreen';
import { Header } from '../components/principalScreeen/header/Header';
import { PrincipalScreen } from '../components/principalScreeen/PrincipalScreen';
import { ShoppingCart } from '../components/shoppingScreen/ShoppingCart';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={PrincipalScreen}/>
                    <Route exact path="/article" component={ArticleScreen}/>
                </Switch>
            </div>
        </Router>
    )
}
