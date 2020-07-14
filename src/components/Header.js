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
        <NavbarBrand><Link to="/">ΣΤΑΤΙΣΤΙΚΑ ΣΤΙΣ ΔΟΜΕΣ ΦΙΛΟΞΕΝΙΑΣ ΠΡΟΣΦΥΓΩΝ</Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="container" navbar>
          <NavItem>
            <Link to="covid19camps/">Κρούσματα COVID19 ανα δομή</Link>
            </NavItem>
            <NavItem>
            <Link to="/geolocate/">Εντοπισμός των Camps στην περιοχή μου (GEO)</Link>
            </NavItem>
            <NavItem>
            <a style={{ color: 'greenyellow' }} href="/info/">Ποιοι Είμαστε</a>
            </NavItem>
          </Nav>
          <NavbarText><Button color="info" border-radius= "20" href="http://kostasp4.sg-host.com/" target="_blank">ΣΤΑΤΙΣΤΙΚΑ</Button>{''}</NavbarText>
          <NavbarText><Button color="success" border-radius= "20" href="http://kostasp4.sg-host.com/" target="_blank">CHARTS</Button>{''}</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
 }

 export default Header;
