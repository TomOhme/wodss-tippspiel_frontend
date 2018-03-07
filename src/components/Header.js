import React from 'react';

import {
  Jumbotron,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  PageHeader
} from 'react-bootstrap';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <PageHeader>
          wodss Tippspiel WM 2018
        </PageHeader>
        <Navbar>
          <Nav>
            <NavItem eventKey={1} href="#">
              Tipps
            </NavItem>
            <NavItem eventKey={2} href="#">
              Gruppen
            </NavItem>
            <NavDropdown eventKey={3} title="Rangliste" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Spieler</MenuItem>
              <MenuItem eventKey={3.2}>Gruppen</MenuItem>
            </NavDropdown>
            <NavItem eventKey={4} href="#">
              Regeln
            </NavItem>
            <NavItem eventKey={5} href="#">
              Admin
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Profil
            </NavItem>
            <NavItem eventKey={2} href="#" style={{marginRight: 50}}>
              Ausloggen
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}