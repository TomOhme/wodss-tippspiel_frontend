import React from 'react'
import { Switch, Route } from 'react-router-dom'

import BetNavigation from '../bets/BetNavigation';
import BetGroups from '../betgroups/BetGroups';
import PlayerScoreBoard from '../scoreboards/PlayerScoreBoard';
import GroupScoreBoard from '../scoreboards/GroupScoreBoard';
import Rules from '../rules/Rules';
import Profile from '../profile/Profile';
import Login from '../login/Login';
import Register from '../login/Register';

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