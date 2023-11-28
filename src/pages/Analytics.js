import GridContainer from "../components/GridContainer";

import MyBarChart from "../components/charts/MyBarChart";
import MyLineChart from "../components/charts/MyLineChart";
import MyPieChart from "../components/charts/MyPieChart";

const AnalyticsPage = () => {
  return (
    <div className="container">
      <GridContainer>
        <h3>Total Followers / Subscribers</h3>
        <MyBarChart />
      </GridContainer>
      <GridContainer>
        <h3>Total Followers / Subscribers Gained</h3>
        <MyLineChart />
      </GridContainer>
      <GridContainer>
        <h3>Breakdown by Latest Total Followers / Subscribers</h3>
        <MyPieChart />
      </GridContainer>
    </div>
  );
};

export default AnalyticsPage;
