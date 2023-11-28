import GridContainer from "./GridContainer";
import styles from "../styles/FeedContainer.module.css";

import "@fortawesome/fontawesome-free/css/all.min.css";

const FeedContainer = ({ platform, content, date, time, likes, views }) => {
  return (
    <GridContainer>
      <div className={styles.postContent}>
        <p className="card-title">
          <img src={`images/${platform}.png`} alt={platform} />
          {platform.charAt(0).toUpperCase() + platform.slice(1)}
        </p>
        <p>{content}</p>
        <span className={styles.icon}>
          <i className="fa-solid fa-calendar-days"></i>
          {date}
        </span>
        <span className={styles.icon}>
          <i className="fa-solid fa-clock"></i>
          {time}
        </span>
        <span className={styles.icon}>
          <i className="fa-solid fa-heart"></i>
          {likes} Likes
        </span>
        <span className={styles.icon}>
          <i className="fa-solid fa-eye"></i>
          {views} Views
        </span>
      </div>
      <div className={styles.actions}>
        <button className={styles.editButton}>Edit</button>
        <button className={styles.deleteButton}>Delete</button>
      </div>
    </GridContainer>
  );
};

export default FeedContainer;
