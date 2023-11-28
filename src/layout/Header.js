import { NavLink } from "react-router-dom";
import Switch from "../components/Switch.js";

import classes from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className="wrapper">
        <div className="header-grid">
          <div>
            <div className={classes.myContainer}>
              <img
                className={classes.myImg}
                src="images/myself.jpg"
                alt="John Smith"
                width="64px"
              />
              <b className={classes.welcomeMsg}>Welcome, John Smith 👋 </b>
            </div>
            <p className={classes.headerDate}>{formatDate()}</p>
          </div>
          <Switch />
        </div>
        <div className={classes.navList}>
          <button>
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Overview 👀
            </NavLink>
          </button>
          <button>
            <NavLink
              to="analytics"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Analytics 📊
            </NavLink>
          </button>
          <button>
            <NavLink
              to="aggregator"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Aggregator 📥
            </NavLink>
          </button>
          <button>
            <NavLink
              to="content-calendar"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Content Calendar 🗓️
            </NavLink>
          </button>
          <button>
            <NavLink
              to="schedule-posts"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Schedule Posts 🕔
            </NavLink>
          </button>
          <button>
            <NavLink
              to="settings"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Settings ⚙️
            </NavLink>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

function formatDate() {
  const now = new Date();

  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  const hours = String(now.getHours() - 12).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const ampm = now.getHours() >= 12 ? "PM" : "AM";

  const formattedDate = `${day}/${month}/${year}  ${hours}:${minutes} ${ampm}`;

  return formattedDate;
}
