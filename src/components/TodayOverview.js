import CardSmall from "./Card-small";
import "../styles/overview.css";

import { overviews } from "../data/overviews";

function TodayOverview() {
  return (
    <section className="overview">
      <div className="wrapper">
        <h2>Today's Overview</h2>

        <div className="grid">
          {overviews.map(({ icon, pageViews, growth, key }) => (
            <CardSmall
              icon={icon}
              key={key}
              pageViews={pageViews}
              growth={growth}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TodayOverview;
