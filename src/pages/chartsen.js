import React from "react";
import Chart from "components/Charten";
import CampPicker from "components/CampPickeren"
import Footer from "components/Footer"
import { Typography } from '@material-ui/core';
import { fetchData } from "hooks/fetchData";
import '../assets/stylesheets/pages/_charts.scss';
import { Button } from 'reactstrap';


class SixthPage extends React.Component {
  state = {
    data: [],
    selectedCamp: "",
    camps: [],
  };

  async componentDidMount() {
    

    const data = await fetchData();
    const camps = data.map((camp) => camp.name_en);
    
    this.setState({ data, camps });
  }

  handleCampChange = async (selectedCamp) => {
    this.setState({ selectedCamp });
  };

  render() {
    const { data, camps, selectedCamp } = this.state;

    const totalcases = data.reduce((currentTotal, data) => {
      return data.total_confirmed_cases + currentTotal
    }, 0)
    console.log(totalcases);

    return (
      <div className="charts">
        <div className="charts-container_outer">
          <div className="charts-container">

            <Typography color='textSecondary'>
            <div>
              <a href="/"><img class="alignleft" src="https://devpap.co.uk/wp-content/uploads/2020/07/icon1.png" alt="" width="22" height="22" /></a><a href="/indexen">   Camps Information Map        </a>
              <Button color="info" border-radius= "20" href="/informationen/">ABOUT</Button>
              <div class="btn-group" role="group" aria-label="GR-EN">
          <a href="/charts" class="btn btn-secondary btn-sm active" role="button" aria-pressed="true">GR</a>
          <a href="/chartsen" class="btn btn-secondary btn-sm" role="button" aria-pressed="true">EN</a>
          </div>
            </div>
            </Typography>
            <h4>TOTAL CONFIRMED COVID19 CASES IN ALL CAMPS: <a href="/covid19campsen/" class="badge-pill badge badge-danger"> {totalcases}</a></h4>
            <h6>COVID19 incidents by Refugees Camp</h6>
            <CampPicker camps={camps} handleCampChange={this.handleCampChange} />
            
            <Chart
              selectedCamp={selectedCamp}
              data={data}
            />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default SixthPage;
