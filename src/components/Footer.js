import React from 'react';

import Container from 'components/Container';

const Footer = () => {
  return (
    <footer>
      <Container>
        <p>&copy; { new Date().getFullYear() } <a id='pagelink' href="https://www.covid19response.gr/">Covid19 Response Greece</a> | Data provided by <a href="https://en.uoa.gr/" >National &amp; Kapodistrian University </a>via <a href="https://github.com/Covid-19-Response-Greece/covid19-refugee-camps-map">Coronavirus Greece Api</a></p>
      </Container>
    </footer>
  );
};

export default Footer;
