import React, { useState } from 'react';
import { Link } from "gatsby"
import 'assets/stylesheets/components/__components.scss';
import { Button } from 'reactstrap';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap';


//class Header extends React.component

 const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar style={{height: '70px'}} fixed="top" color="dark" dark expand="lg">
        <NavbarBrand><Link to="/">Στατιστικά στις δομές φιλοξενίας προσφύγων</Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="container" navbar>
          <NavItem>
            <Link to="/">Κρούσματα COVID19 ανα δομή</Link>
            </NavItem>
            <NavItem>
            <Link to="/geolocate/">Εντοπισμός των Camps στην περιοχή μου</Link>
            </NavItem>
            <NavItem>
            <Link to="/info/">Ποιοι Είμαστε</Link>
            </NavItem>
            <NavItem>
            <a style={{ color: 'greenyellow' }} href="http://kostasp4.sg-host.com/">TIME SERIES</a>
            </NavItem>
          </Nav>
          <NavbarText><Button color="success" border-radius= "20" href="http://kostasp4.sg-host.com/" target="_blank">ΣΤΑΤΙΣΤΙΚA</Button>{''}</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
 }

 export default Header;
