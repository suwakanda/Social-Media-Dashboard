import { settings } from "../data/settings";
import styles from "../styles/Settings.module.css";

const SettingsPage = () => {
  return (
    <div className="padded">
      <form className={styles.formContainer}>
        <h2>General</h2>
        <label className={styles.formLabel}>Name:</label>
        <input
          type="text"
          defaultValue={settings.name}
          className={styles.inputField}
        />
        <label className={styles.formLabel}>Email:</label>
        <input
          type="email"
          defaultValue={settings.email}
          className={styles.inputField}
        />
        <label className={styles.formLabel}>Username:</label>
        <input
          type="text"
          defaultValue={settings.username}
          className={styles.inputField}
        />
        <label className={styles.formLabel}>City:</label>
        <input
          type="text"
          defaultValue={settings.city}
          className={styles.inputField}
        />
        <label className={styles.formLabel}>Country:</label>
        <input
          type="text"
          defaultValue={settings.country}
          className={styles.inputField}
        />
        <br />
        <br />
        <hr />

        <h2>Accounts</h2>
        {settings.accounts.map((acc, index) => (
          <div key={index}>
            <label className={styles.formLabel}>
              Social Media #{index + 1}:
            </label>
            <input
              type="text"
              defaultValue={acc}
              className={`${styles.inputField} ${styles.usernameField}`}
            />
          </div>
        ))}
        <button
          type="button"
          className={`${styles.inputField} ${styles.submitButton}`}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default SettingsPage;
