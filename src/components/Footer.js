import React from 'react';

import Container from 'components/Container';

const Footer = () => {
  return (
    <footer>
      <Container>
        <p>&copy; { new Date().getFullYear() } <a href="https://www.covid19response.gr/" target="_blank" rel="noopener">Covid19 Response Greece</a> | Data provided by <a href="https://en.uoa.gr/" target="_blank" rel="noopener">National &amp; Kapodistrian University </a>via <a href="https://github.com/Covid-19-Response-Greece/covid19-refugee-camps-map" target="_blank" rel="noopener">Coronavirus Greece Api</a></p>
      </Container>
    </footer>
  );
};

export default Footer;
