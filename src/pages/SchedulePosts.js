import styles from "../styles/SchedulePosts.module.css";

const SchedulePostsPage = () => {
  return (
    <div className="padded">
      <form className={styles.formContainer}>
        {/* Post Title */}
        <label className={styles.formLabel}>
          <i className={`${styles.icon} fa-solid fa-t`}></i> Title
        </label>
        <input
          type="text"
          placeholder="Enter your title."
          className={styles.inputField}
        />

        {/* Post Content */}
        <label className={styles.formLabel}>
          <i className={`${styles.icon} fa-solid fa-comment`}></i> Content
        </label>
        <textarea
          rows="10"
          placeholder="Type your content."
          className={styles.inputField}
        ></textarea>

        {/* Schedule Date  */}
        <label className={styles.formLabel}>
          <i className={`${styles.icon} fa-solid fa-calendar-days`}></i>{" "}
          Schedule Date
        </label>
        <input type="date" className={styles.inputField} />

        {/* Schedule Time */}
        <label className={styles.formLabel}>
          <i className={`${styles.icon} fa-solid fa-clock`}></i> Schedule Time
        </label>
        <input type="time" className={styles.inputField} />

        {/* Platform  */}
        <label className={styles.formLabel}>
          <i className={`${styles.icon} fa-solid fa-globe`}></i> Platform
        </label>
        <select className={styles.inputField}>
          <option value="" defaultValue>
            -- Select a platform --
          </option>
          <option value="facebook">Facebook</option>
          <option value="instagram">Instagram</option>
          <option value="x">X</option>
          <option value="youtube">YouTube</option>
        </select>
        <br />

        <button
          type="button"
          className={`${styles.inputField} ${styles.submitButton}`}
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default SchedulePostsPage;
