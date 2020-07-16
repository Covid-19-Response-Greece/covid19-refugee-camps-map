import React from "react";
import Layout from "components/Layout";
import Container from "components/Container";

const InfoPage = () => {
  return (
    <Layout>
      <Container type="content" className="">
        <h1>Σχετικά με την πλατφόρμα Refugee Camps Greece - Covid19</h1>
        <p>Περιλαμβάνει: <br></br>
        Eξέλιξη των Covid19 κρουσμάτων<br></br>
        Αριθμός Covid19 Tests που έχουν γίνει<br></br>
        Χωρητικότητα Δομής Φιλοξενίας<br></br>
        Στατιστικά γραφήματα με ημερολογιακή καταγραφή των κρουσμάτων COVID19 ανα δομή
        <br></br><br></br>
        </p>
        <h1>Εθελοντική Δραση Covid19 Response Greece</h1>
        <h1>Πηγές δεδομένων</h1>
        <a href="https://www.covid19response.gr/" >Covid19 Response Greece</a> | Data provided by <a href="https://en.uoa.gr/"  >National &amp; Kapodistrian University </a>via <a href="https://github.com/Covid-19-Response-Greece/covid19-refugee-camps-map">Coronavirus Greece Api</a>
        <br></br><br></br><br></br><br></br>
        <h1>Προτάσεις και Συζήτηση</h1>
        <h1>Αδειοδότηση</h1>
      </Container>
    </Layout>
  );
};

export default InfoPage;
