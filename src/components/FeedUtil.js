import styles from "../styles/FeedUtil.module.css";

const FeedUtil = () => {
  return (
    <div className={styles.feedUtil}>
      <div>
        <i className={`${styles.icon} fa-solid fa-magnifying-glass`}></i>
        <input type="text" placeholder="Search" className={styles.searchBar} />
      </div>

      <div className={styles.feedUtilAction}>
        <div className={styles.sortBySection}>
          <span>
            <i className={`${styles.icon} fa-solid fa-sort`}></i> Sort By
          </span>
          <select className={styles.dropdown}>
            <option value="" disabled defaultValue>
              -- Select a value --
            </option>
            <option value="platform">Platform</option>
            <option value="date">Date</option>
            <option value="time">Time</option>
            <option value="likes">Likes</option>
            <option value="views">Views</option>
          </select>
        </div>

        <div className={styles.exportSection}>
          <i className={`${styles.icon} fa-solid fa-download`}></i>
          <button className={styles.exportButton}>Export</button>
        </div>
      </div>
    </div>
  );
};

export default FeedUtil;
