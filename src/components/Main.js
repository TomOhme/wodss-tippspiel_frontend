import React from 'react'
import { Switch, Route } from 'react-router-dom'

import BetNavigation from '../containers/BetNavigation';
import BetGroups from '../containers/BetGroups';
import PlayerScoreBoard from '../containers/PlayerScoreBoard';
import GroupScoreBoard from '../containers/GroupScoreBoard';
import Rules from './Rules';
import Profile from '../containers/Profile';
import Login from '../containers/Login';
import Register from '../containers/Register';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={BetNavigation} />
            <Route path='/betgroups' component={BetGroups} />
            <Route path='/playerscoreboard' component={PlayerScoreBoard} />
            <Route path='/groupscoreboard' component={GroupScoreBoard} />
            <Route path='/rules' component={Rules} />
            <Route path='/profile' component={Profile} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
        </Switch>
    </main>
);

export default Main;