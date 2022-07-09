import { Component } from "react";
import styles from "./index.module.css";

export class Button extends Component {
  render() {
    const { label, onButtonClick, disabled } = this.props;

    function handleButtonClick() {
      onButtonClick();
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
}
