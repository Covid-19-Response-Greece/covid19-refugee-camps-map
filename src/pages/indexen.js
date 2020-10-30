import React from "react";
import Helmet from "react-helmet";
import L, { point } from "leaflet";
import axios from "axios";
import Layout from "components/Layouten";
import Container from "components/Container";
import Map from "components/Mapen";

const LOCATION = {
  lat: 38.814566,
  lng: 24.06738,
};
const CENTER = [LOCATION.lat, LOCATION.lng];
const DEFAULT_ZOOM = 6.60;

const IndexPage = () => {
  const [data, setdata] = React.useState([]);
  const [filter, setfilter] = React.useState(false);
  React.useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://covid-19-greece.herokuapp.com/refugee-camps"
      );
      setdata(response.data["refugee-camps"]);
    }
    fetchData();
  }, []);
     
  async function mapEffect({ leafletElement: map } = {}) {

    const hasData = Array.isArray(data) && data.length >= 0;
    if (!hasData) return;
    const geoJson = {
      type: "FeatureCollection",
      features: data
        .filter((element) => {
          if (element.total_confirmed_cases === 0 && filter === true)
            return false;
          return true;
        })
        .map((region = {}) => {
          const { latitude: lat, longtitude: lng } = region;
          return {
            type: "Feature",
            properties: {
              ...region,
            },
            geometry: {
              type: "Point",
              coordinates: [lng, lat],
            },
          };
        }),
    };

    const geoJsonLayers = new L.GeoJSON(geoJson, {
      pointToLayer: (feature = {}, latlng) => {
        const { properties = {} } = feature;
        let casesString;

        const {
          capacity,
          "last update": lastupdate,
          name_en,
          region_en,
          total_confirmed_cases,
          total_samples,
        } = properties;

        casesString = `${capacity}`;

        if (capacity > 1000) {
          casesString= `${casesString.slice(0, -3)}χ+`;
        }
        
        let capacity_fixed = (capacity === null) ? 'N/A' : capacity

        const html = `
          <span class="icon-marker">
            <span class="icon-marker-tooltip">
              <h3>${name_en} Camp</h3>
              <h3>${region_en}</h3>
              <ul>
              <li><strong>Capacity:</strong> ${capacity_fixed}</li>
              <li><strong>COVID19 Tests:</strong> ${total_samples}</li>
              <li><strong>COVID19 incidents:</strong> ${total_confirmed_cases}</li>
                <li><strong>Last Update:</strong> ${lastupdate}</li>
              </ul>
            </span>
            ${name_en}
          </span>
        `;

        return L.marker(latlng, {
          icon: L.divIcon({
            className: "icon",
            html
          }),
          riseOnHover: true
        });
      },
    });

    geoJsonLayers.addTo(map);
  }

  const mapSettings = {
    center: CENTER,
    defaultBaseMap: "OpenStreetMap",
    zoom: DEFAULT_ZOOM,
    mapEffect,
    zoomSnap: 0.10,
    zoomDelta: 0.2,
  };

  const setMappingFilter = () => {
    setfilter(!filter);
  };

  return (
    <Layout pageName="home">
      <Helmet>
        <title>Refugee Camps Greece - Covid19</title>
      </Helmet>
      {filter && <Map {...mapSettings} setfilter={setMappingFilter} />}
      {!filter && <Map {...mapSettings} setfilter={setMappingFilter} />}

      <Container type="content" className="home-start">
        <h2>
        STATISTICS IN REFUGEE CAMP STRUCTURES
        </h2>
        <pre></pre>
        <p>Includes: <br></br>
        Evolution of Covid19 cases<br></br>
        Number of Covid19 Tests that have been done<br></br>
        Capacity of Hosting Structure<br></br>
        Statistical graphs with diary recording of COVID19 cases per structure
        </p>
        <p>Developed by volunteers of <a href="https://www.covid19response.gr/">Covid-19 Response Greece</a>
        <br />Data provided by <a href="https://www.uoa.gr/">National &amp; Kapodistrian University of Athens</a> via <a href="https://covid-19-greece.herokuapp.com/">Coronavirus Greece API</a></p>
      </Container>
    </Layout>
  );
};

export default IndexPage;
