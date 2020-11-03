import React from "react";
import Layout from "components/Layouten";
import Container from "components/Container";


const ThirdPage = () => {
  return (
    <Layout>
      <Container type="content" className="">
        <h2>About the Refugee Camps Greece - Covid19 platform</h2>
        <p>The Refugee Camps Greece - Covid19 platform, represents a tool that investigates and visualizes public open data related with the spread of coronavirus pandemic COVID-19, in the accommodation structures of asylum seekers in Greece. The platform has been developed by members of the voluntary initiative 🔗 <a href="https://covid19response.gr/">Covid-19 Response Greece</a> in collaboration with 🔗 <a href="http://crisis.med.uoa.gr/"> MSc “Global Health - Disaster Medicine”, Medical School, National & Kapodistrian University of Athens (NKUA)</a>. The public open data that are presented through the platform, are collected from the available databases of national public bodies and international organizations (see "Data Sources") in almost real time.
        </p><br></br>
        <h2>The Voluntary Initiative Covid-19 Response Greece</h2>
        <p>COVID-19 Response Greece is a voluntary initiative organized during the appearance of COVID-19 in Greece, through the OK!Thess community in Thessaloniki, in order to offer practical and immediately applicable solutions to critical problems and challenges caused by the pandemic. Today, it has more than 270 members with scientific and technological background in Greece and abroad, who are participating to 8 projects.
        </p><br></br>
        <h2>Web page:</h2><a href="https://covid19response.gr/">https://covid19response.gr/</a>
        <p>This web application is developed by a voluntary group of "Data Collection and Disposal" project  (<a href="https://covid19response.gr/project5.html">https://covid19response.gr/project5.html</a>), among other technological solutions, with the scientific support in the design and implementation of the scientific of MSc “Global Health - Disaster Medicine”, Medical School, National & Kapodistrian University of Athens (NKUA).</p>
        <br></br>
        <h2>Data resources</h2>
        <p>The data are provided through the open data service for the spread of COVID-19 in Greece 🔗 <a href="https://covid-19-greece.herokuapp.com/">Coronavirus Greece API</a>, which has been also developed by a voluntary team of 🔗 <a href="https://covid19response.gr/">Covid-19 Response Greece</a>. The scientific supervision along with the management of the completeness and reliability of the data are supervised by the 🔗 <a href="http://crisis.med.uoa.gr/">MSc Global Health - Disaster Medicine of the Medical School of the National & Kapodistrian University of Athens (NKUA)</a>. The whole data comes from reports of the 🔗 <a href="https://eody.gov.gr/">National Public Health Organization (NPHO)</a>, as well as reports of the 🔗 <a href="https://www.unhcr.org/">UNCHR</a>.</p>
        <br></br>
        <h2>Suggestions and Discussion</h2>
        <p>If you encounter any issues or have suggestions for improving or enriching the content, you can create a 🔗 <a href="https://github.com/Covid-19-Response-Greece/covid19-refugee-camps-map/issues/new">(new issue)</a>  in our troubleshooter (Issue Tracker) in GitHub.</p>
        <br></br><br></br>
        <h2>Lending</h2>
        <p>Proponents of this initiative are defenders of the utilization of open sources and open public data for the encouragement of transparency in civic life, as well as the enforcement of scientific research’s participation. This platform uses open data sets, it is based on open source technologies and it is released to the public under a European Union Public License 1.2. The relevant code is available on our 🔗 <a href="https://github.com/Covid-19-Response-Greece/covid19-refugee-camps-map">project page in Github</a>.</p>
      </Container>
    </Layout>
  );
};

export default ThirdPage;