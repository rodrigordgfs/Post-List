import styles from "./index.module.css";

export default function Button({
  label = "",
  onButtonClick = null,
  disabled = false,
}) {
  function handleButtonClick() {
    if (onButtonClick) {
      onButtonClick();
    }
  }

  return (
    <button
      disabled={disabled}
      className={styles.button}
      onClick={handleButtonClick}
    >
      {label}
    </button>
  );
}
