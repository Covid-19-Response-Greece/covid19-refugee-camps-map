import React from 'react';

import Container from 'components/Container';

const Footer = () => {
  return (
    <footer>
      <Container>
        <p>&copy; { new Date().getFullYear() } <a id='pagelink' href="https://www.covid19response.gr/">Covid19 Response Greece</a> | Data provided by <a href="https://uoa.gr/" >National &amp; Kapodistrian University </a>via <a href="https://covid-19-greece.herokuapp.com/">Coronavirus Greece Api</a></p>
      </Container>
    </footer>
  );
};

export default Footer;
