import Card from "./Card";

import "../styles/followers.css";

import { accounts } from "../data/accounts";

function Followers() {
  return (
    <section className="top-card">
      <div className="wrapper">
        <div className="grid">
          {accounts.map((acc) => (
            <Card key={acc.id} {...acc} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Followers;
