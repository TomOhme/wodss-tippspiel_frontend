import React from 'react';

import {
    Nav,
    NavItem
} from 'react-bootstrap';

export default class Bets extends React.Component {

    handleSelect(selectedKey) {
        alert(`selected ${selectedKey}`);
    }

    render() {
        return (
            <Nav bsStyle="tabs" activeKey={1} onSelect={this.handleSelect}>
                <NavItem eventKey={1}>
                    Gruppenphase Spieltag 1
                </NavItem>
                <NavItem eventKey={2}>
                    Gruppenphase Spieltag 2
                </NavItem>
                <NavItem eventKey={3}>
                    Gruppenphase Spieltag 3
                </NavItem>
            </Nav>
        )
    }

}