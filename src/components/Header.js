import React from 'react';
import { localize } from 'react-localize-redux';

import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  PageHeader
} from 'react-bootstrap';

const Header = ({ translate }) => (
  <div>
    <PageHeader>
      {translate('title')}
    </PageHeader>
    <Navbar>
      <Nav>
        <NavItem eventKey={1} href="#">
          { translate('bets') }
            </NavItem>
        <NavItem eventKey={2} href="#">
          { translate('betgroups') }
            </NavItem>
        <NavDropdown eventKey={3} title="Rangliste" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>{translate('players')}</MenuItem>
          <MenuItem eventKey={3.2}>{translate('groups')}</MenuItem>
        </NavDropdown>
        <NavItem eventKey={4} href="#">
          { translate('rules') }
            </NavItem>
        <NavItem eventKey={5} href="#" hidden={false}>
          { translate('admin') }
            </NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">
          { translate('profile') }
            </NavItem>
        <NavItem eventKey={2} href="#" style={{ marginRight: 50 }}>
          { translate('logout') }
            </NavItem>
      </Nav>
    </Navbar>
  </div>
)

export default localize(Header, 'locale');