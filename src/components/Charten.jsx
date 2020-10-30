import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import moment from "moment";
import '../assets/stylesheets/components/_chart.scss';


const Chart = ({ data, selectedCamp }) => {
  const [selectedCampData, setselectedCampData] = useState([]);
  const [weeklyData, setweeklyData] = useState([]);

  useEffect(() => {
    let cases = [];

    if (selectedCamp) {
      let selectedData = data.map((camp) => {
        if (camp.name_en === selectedCamp) {
          camp.recorded_events.forEach((event) => {
            if (event.confirmed_cases) {
              cases.push({
                case_detection_week: event.case_detection_week,
                confirmed_cases: event.confirmed_cases,
              });
            }
          });
        }
      });
      setselectedCampData(cases);
    } else {
      let recorded_events = data
        .map(({ recorded_events }) => {
          const cases = recorded_events.filter((weekly_case) => {
            if (
              !weekly_case.case_detection_week ||
              !weekly_case.confirmed_cases
            )
              return false;
            return true;
          });
          return cases;
        })
        .map((array) => {
          if (array.length > 0) return array;
        })
        .filter((array) => {
          if (array) return true;
          return false;
        });

      recorded_events.forEach((event) => {
        event.forEach((item) => {
          let case_detection_week = item.case_detection_week;
          let str = case_detection_week.split("-");
          const newStr =
            moment(str[0], "DD/MM/YYYY").format("DD/MM/YYYY") +
            " - " +
            moment(str[1], "DD/MM/YYYY").format("DD/MM/YYYY");
          item.case_detection_week = newStr;
        });
      });
      //remove zero length arrays
      // const recorded_events_edited = Object.values(recorded_events.reduce((a, b) => { a[b.case_detection_week] = Object.assign(a[b.case_detection_week] || {}, b); return a; }, {}));
      const recorded_events_edited = Object.values(
        []
          .concat(...recorded_events)
          .reduce((a, { case_detection_week, confirmed_cases }) => {
            a[case_detection_week] = a[case_detection_week] || {
              case_detection_week,
              confirmed_cases: 0,
            };
            a[case_detection_week].confirmed_cases = String(
              Number(a[case_detection_week].confirmed_cases) +
                Number(confirmed_cases)
            );
            return a;
          }, {})
      );

      // recorded_events_edited.sort((a, b) => a.case_detection_week.localeCompare(b.case_detection_week));

      recorded_events_edited.sort(function (a, b) {
        let date1 = a.case_detection_week.split("-")[0];
        let date2 = b.case_detection_week.split("-")[0];
        return moment(date1, "DD/MM/YYYY") - moment(date2, "DD/MM/YYYY");
      });
      setweeklyData(recorded_events_edited);
    }
  }, [data, selectedCamp]);

  const barChart = selectedCampData[0] ? (
    <Line
      options={{
        title: {
          display: true,
          text: `Confirmed cases of ${selectedCamp} Refugees Camp` ,
        },
      }}
      data={{
        labels: selectedCampData.map(
          ({ case_detection_week }) => case_detection_week
        ),
        datasets: [
          {
            data: selectedCampData.map((data) => data.confirmed_cases),
            label: "Covid19 Confirmed Cases Curve",
            borderColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : (
    <span style={{ marginBottom: "35px" }}>
      There are no recorded cases in {selectedCamp}'s Camp.
    </span>
  );

  const lineChart = weeklyData[0] ? (
    <Line
      options={{
        title: {
          display: true,
          text: "Total Covid19 Confirmed Cases",
        },
      }}
      data={{
        labels: weeklyData.map(
          ({ case_detection_week }) => case_detection_week
        ),
        datasets: [
          {
            data: weeklyData.map((data) => data.confirmed_cases),
            label: "Covid19 Confirmed Cases Curve",
            borderColor: "red",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return (
    <>
      <div className="chart">
        {selectedCamp ? barChart : lineChart}
      </div>
      {selectedCamp && selectedCampData[0] ? (
        <h4>Weekly COVID19 Cases Distribution</h4>
      ) : null}
      {!selectedCamp && <h4>Weekly COVID19 Cases Distribution</h4>}
    </>
  );
};

export default Chart;