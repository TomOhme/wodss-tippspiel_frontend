import React from 'react';
import { connect } from 'react-redux';
import { getTranslate } from 'react-localize-redux';
import { logOut } from '../actions/LoginRegisterActions';
import _ from 'underscore';

import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  PageHeader
} from 'react-bootstrap';

let Header = ({ user, translate, logOut }) => (
  <div>
    <PageHeader>
      {translate('title')}
    </PageHeader>

    <Navbar bsStyle="bar-custom">
      <Nav>
        <NavItem eventKey={1} href="/" bsStyle="item">
          {translate('bets')}
        </NavItem>
        <NavItem eventKey={2} href="/betgroups">
          {translate('betgroups')}
        </NavItem>
        <NavDropdown eventKey={3} title="Rangliste" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1} href="/playerscoreboard">{translate('players')}</MenuItem>
          <MenuItem eventKey={3.2} href="/groupscoreboard">{translate('groups')}</MenuItem>
        </NavDropdown>
        <NavItem eventKey={4} href="/rules">
          {translate('rules')}
        </NavItem>
      </Nav>
      <Nav pullRight>
        {
          // show profile when user is logged in
          user.loggedIn
            ?
            <NavItem eventKey={6} href="/profile">
              {translate('profile')}
            </NavItem>
            : null
        }

        {
          // show login / logout
          user.loggedIn
            ?
            <NavItem eventKey={7} onClick={() => logOut()} href="#" className="navbar-right fix-pull">
              {translate('logout')}
            </NavItem>
            :
            <NavItem eventKey={8} href="/login" className="navbar-right fix-pull" >
              {translate('login')}
            </NavItem>
        }
      </Nav>
    </Navbar>
  </div>
)

const mapStateToProps = state => ({
  translate: getTranslate(state.locale),
  user: state.user
});

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut())
  }
}

Header = connect(mapStateToProps, mapDispatchToProps)(Header)

export default Header;