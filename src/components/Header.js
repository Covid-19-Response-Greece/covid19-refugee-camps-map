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
      <Navbar style={{height: '70px'}} fixed="top" color="dark" dark expand="lg"><a href="https://camps.covid19response.gr"><img src="https://devpap.co.uk/wp-content/uploads/2020/07/icon1.png" alt="" width="50" height="50" /></a>
        <NavbarBrand>
        <Link to="/" style={{color: 'white', fontSize: '11px' }}>ΣΤΑΤΙΣΤΙΚΑ ΣΤΙΣ ΔΟΜΕΣ<br></br>ΦΙΛΟΞΕΝΙΑΣ ΠΡΟΣΦΥΓΩΝ</Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="container" navbar>
          <NavItem>
            <Link to="/" style={{color: 'white'}}>Πληροφορίες δομών</Link>
          </NavItem>
          <NavItem>
            <Link to="/covid19camps/" style={{color: 'white'}}>Κρούσματα COVID19 ανα δομή</Link>
          </NavItem>
          <NavItem>
            <Link to="/geolocate/" style={{color: 'white'}}>Εντοπισμός των Camps στην περιοχή μου (Geolocation)</Link>
          </NavItem>
          </Nav>
          <NavbarText><Button color="success" border-radius= "20" href="https://camps-charts.covid19response.gr">ΓΡΑΦΗΜΑΤΑ</Button>{''}</NavbarText>
          <NavbarText><Button color="info" border-radius= "20" href="/information/">ΣΧΕΤΙΚΑ</Button>{''}</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
 }

 export default Header;
