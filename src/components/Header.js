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
      <Navbar style={{height: '70px'}} fixed="top" color="dark" dark expand="lg"><a href="https://camps.covid19response.gr"></a>
        <NavbarBrand>
        <Link to="/" style={{color: 'white', fontSize: '11px' }}>ΣΤΑΤΙΣΤΙΚΑ ΣΤΙΣ ΔΟΜΕΣ<br></br>ΦΙΛΟΞΕΝΙΑΣ ΠΡΟΣΦΥΓΩΝ</Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="container" navbar>
          <NavItem>
            <Link to="/" style={{color: 'white'}}>Χάρτης Πληροφοριών Δομών <a href="" class="badge-pill badge badge-info">Info απο 47 Camps</a></Link>
          </NavItem>
          <NavItem>
            <Link to="/covid19camps/" style={{color: 'white'}}>Κρούσματα COVID19 ανά Δομή <a href="" class="badge-pill badge badge-danger">Σύνολο: 736</a></Link>
          </NavItem>
          <NavItem>
            <Link to="/geolocate/" style={{color: 'white'}}>Εντοπισμός Δομής <a href="" class="badge-pill badge badge-info">Geolocation</a></Link>
          </NavItem>
          </Nav>
          <NavbarText><Button color="success" border-radius= "20" href="/charts/">ΓΡΑΦΗΜΑΤΑ</Button>{''}</NavbarText>
          <NavbarText><Button color="info" border-radius= "20" href="/information/">ΣΧΕΤΙΚΑ</Button>{''}</NavbarText>
          <div class="btn-group" role="group" aria-label="GR-EN">
          <a href="/" class="btn btn-secondary btn-sm active" role="button" aria-pressed="true">GR</a>
          <a href="/indexen/" class="btn btn-secondary btn-sm" role="button" aria-pressed="true">EN</a>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
 }

 export default Header;
