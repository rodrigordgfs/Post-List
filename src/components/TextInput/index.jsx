import styles from "./index.module.css";

export const TextInpt = ({ handleChange, searchValue }) => {
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
};
