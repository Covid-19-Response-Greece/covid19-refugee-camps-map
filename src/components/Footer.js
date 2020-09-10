import React from 'react';

import Container from 'components/Container';
import '../assets/stylesheets/components/_footer.scss'

const Footer = () => {
  return (
    <footer>
      <Container>
        <p>&copy; { new Date().getFullYear() } <a id='pagelink' href="https://www.covid19response.gr/">Covid-19 Response Greece</a></p>
      </Container>
    </footer>
  );
};

export default Footer;
