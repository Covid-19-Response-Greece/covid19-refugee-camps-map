import React from 'react';
import Layout from 'components/Layout';
import Container from 'components/Container';

const NotFoundPage = () => {
  return (
    <Layout>
      <Container type="content" className="text-center">
      <h1>Error</h1>
        <p>H τρέχουσα σελίδα δεν υπάρχει. Επιλέξτε απο το μενού</p>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
