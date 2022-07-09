import styles from "./index.module.css";

import React from "react";

export default function TextInput({ handleChange = null, searchValue = "" }) {
  function onHandleChange(e) {
    if (handleChange) {
      handleChange(e);
    }
  }

  return (
    <div className={styles.textInput}>
      <input
        type="search"
        name="search"
        id="search"
        value={searchValue}
        onChange={onHandleChange}
      />
    </div>
  );
}
