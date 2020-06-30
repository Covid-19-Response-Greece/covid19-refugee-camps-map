import React from 'react';

import Container from 'components/Container';

const Footer = () => {
  return (
    <footer>
      <Container>
        <p>&copy; { new Date().getFullYear() } Covid19 Response Greece | Data provided by National & Kapodistrian University via Coronovirus Greece Api</p>
      </Container>
    </footer>
  );
};

export default Footer;
