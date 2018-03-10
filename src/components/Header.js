import React from 'react';
import { getTranslate, getActiveLanguage } from 'react-localize-redux';
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
          Tippgruppen
            </NavItem>
        <NavDropdown eventKey={3} title="Rangliste" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Spieler</MenuItem>
          <MenuItem eventKey={3.2}>Gruppen</MenuItem>
        </NavDropdown>
        <NavItem eventKey={4} href="#">
          Regeln
            </NavItem>
        <NavItem eventKey={5} href="#" hidden={false}>
          Admin
            </NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">
          Profil
            </NavItem>
        <NavItem eventKey={2} href="#" style={{ marginRight: 50 }}>
          Ausloggen
            </NavItem>
      </Nav>
    </Navbar>
  </div>
)

export default localize(Header, 'locale');