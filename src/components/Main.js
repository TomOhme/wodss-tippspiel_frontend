import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Bets from '../containers/Bets';
import Rules from './Rules';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Bets} />
            <Route path='/rules' component={Rules} />
        </Switch>
    </main>
);

export default Main;