import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Evee from './components/evee/Evee';
import PositiveAid from './components/positiveaid/PositiveAid';
import Yucaterco from './components/yucaterco/Yucaterco';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/evee" component={Evee} />
            <Route exact path="/positiveaid" component={PositiveAid} />
            <Route exact path="/yucaterco" component={Yucaterco} />
        </Switch>
    <Footer />
    </BrowserRouter>
);

export default Router;