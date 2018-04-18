import React from 'react'
import { Switch, Route } from 'react-router-dom'

import BetNavigation from '../containers/BetNavigation';
import BetGroups from './BetGroups';
import PlayerScoreBoard from '../containers/PlayerScoreBoard';
import GroupScoreBoard from './GroupScoreBoard';
import Rules from './Rules';
import Admin from './Admin';
import Profile from './Profile';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={BetNavigation} />
            <Route path='/betgroups' component={BetGroups} />
            <Route path='/playerscoreboard' component={PlayerScoreBoard} />
            <Route path='/groupscoreboard' component={GroupScoreBoard} />
            <Route path='/rules' component={Rules} />
            <Route path='/admin' component={Admin} />
            <Route path='/profile' component={Profile} />
        </Switch>
    </main>
);

export default Main;