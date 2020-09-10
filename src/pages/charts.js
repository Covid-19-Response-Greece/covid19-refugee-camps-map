import React from "react";
import Chart from "components/Chart";
import CampPicker from "components/CampPicker"
import Footer from "components/Footer"
import { Typography } from '@material-ui/core';
import { fetchData } from "hooks/fetchData";
import '../assets/stylesheets/pages/_charts.scss';


class SixthPage extends React.Component {
  state = {
    data: [],
    selectedCamp: "",
    camps: [],
  };

  async componentDidMount() {
    

    const data = await fetchData();
    const camps = data.map((camp) => camp.name_gr);
    
    this.setState({ data, camps });
  }

  handleCampChange = async (selectedCamp) => {
    this.setState({ selectedCamp });
  };

  render() {
    const { data, camps, selectedCamp } = this.state;

    return (
      <div className="charts">
        <div className="charts-container_outer">
          <div className="charts-container">

            <Typography color='textSecondary'>
            <div>
              <a href="/"><img class="alignleft" src="https://devpap.co.uk/wp-content/uploads/2020/07/icon1.png" alt="" width="22" height="22" /></a><a href="/">   Πίσω στην Αρχική</a>
            </div>
            </Typography>
            <h2>Κρούσματα COVID19 ανά δομή φιλοξενίας</h2>
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
