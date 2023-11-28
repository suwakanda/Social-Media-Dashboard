import { useState } from "react";
import styles from "../styles/ContentCalendar.module.css";

const ContentCalendarPage = () => {
  const [documentURL, setDocumentURL] = useState("");
  const [isValidURL, setIsValidURL] = useState(false);

  const handleURLChange = (event) => {
    const urlRegex = /^(https?|http):\/\/.*$/;

    if (urlRegex.test(event.target.value)) {
      setDocumentURL(event.target.value);
      setIsValidURL(true);
    } else {
      setIsValidURL(false);
    }
  };

  return (
    <div className="padded">
      <div>
        <i className={`${styles.icon} fa-solid fa-link`}></i>
        <b>URL :</b>
        <input
          type="text"
          placeholder="Paste the URL here"
          className={styles.inputField}
          onChange={handleURLChange}
        />
      </div>
      <br /> <br />
      {!isValidURL && (
        <div>
          <h2>Invalid URL!</h2>
          <p>Please ensure the url to the file is valid. </p>
        </div>
      )}
      {isValidURL && (
        <iframe
          title="my-spreadsheet"
          src={documentURL}
          width="100%"
          height="1000px"
        />
      )}
    </div>
  );
};

export default ContentCalendarPage;
