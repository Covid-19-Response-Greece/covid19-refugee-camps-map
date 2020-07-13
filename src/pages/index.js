import React from "react";
import Helmet from "react-helmet";
import L from "leaflet";
import axios from "axios";
import Layout from "components/Layout";
import Container from "components/Container";
import Map from "components/Map";

const LOCATION = {
  lat: 38.814566,
  lng: 23.06738,
};
const CENTER = [LOCATION.lat, LOCATION.lng];
const DEFAULT_ZOOM = 6.5;

const IndexPage = () => {

  const [data, setdata] = React.useState([]);
  const [filter, setfilter] = React.useState(false);
  React.useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://api.jsonbin.io/b/5ee9d1a3ccc9877ac37d5cf0/7"
      );

      setdata(response.data["refugees-camps"]);
    }
    fetchData();
  }, []);
  
  /**
   * mapEffect
   * @description Fires a callback once the page renders
   * @example Here this is and example of being used to zoom in and set a popup on load
   */

  async function mapEffect({ leafletElement: map } = {}) {
    /**const { "refugee-camps" : refugeeCamps } = refugeeCamps; */

    const hasData = Array.isArray(data) && data.length >= 0;

    if (!hasData) return;
    const geoJson = {
      type: "FeatureCollection",
      features: data
        .filter((element) => {
          if(element.capacity === null) return false
          if (element.total_confirmed_cases === 0 && filter === true) return false;
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
          description,
          name_gr,
          region_gr,
          total_confirmed_cases,
          total_samples,
        } = properties;

        casesString = `${capacity}`;

        if (capacity > 1000) {
          casesString = `${casesString.slice(0, -3)}k+`;
        }

        const html = `
          <span class="icon-marker">
            <span class="icon-marker-tooltip">
              <h3> Camp ${name_gr}</h3>
              <h3>${region_gr}</h3>
              <ul>
              <li><strong>Χωρητικότητα:</strong> ${capacity}</li>
              <li><strong>Αριθμός Tests:</strong> ${total_samples}</li>
              <li><strong>Κρούσματα COVID19:</strong> ${total_confirmed_cases}</li>
                <li><i><h3>Camp info:</h3> ${description} </i></li>
                <li><strong>Τελευταία ανανέωση:</strong> ${lastupdate}</li>
              </ul>
            </span>
            ${total_confirmed_cases}
          </span>
        `;

        return L.marker(latlng, {
          icon: L.divIcon({
            className: "icon",
            html,
          }),
          riseOnHover: true,
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
    zoomSnap: 0.25,
    zoomDelta: 0.5,
  };

  const setMappingFilter = () => {
    setfilter(!filter)
  };

  return (
    <Layout pageName="home">
      <Helmet>
        <title>COVID-19 στα Camps</title>
      </Helmet>
      {filter && <Map {...mapSettings} setfilter={setMappingFilter} />}
      {!filter && <Map {...mapSettings} setfilter={setMappingFilter} />}

      <Container type="content" className="home-start">
        <h2>
          Refugees Camps - Χωρητικότητα και εξέλιξη των Covid19 κρουσμάτων
        </h2>
        <pre></pre>
        <p>κειμενο</p>
        <p className="note">Πηγές DATA: </p>
      </Container>
    </Layout>
  );
};

export default IndexPage;
