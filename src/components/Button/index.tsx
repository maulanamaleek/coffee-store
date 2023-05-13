import { CSSProperties } from "react";

import styles from './Button.module.css';

interface ButtonProps {
  text: string;
  onClick: () => void;
  style?: CSSProperties;
}

const Button = ({
  text,
  onClick,
  style,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={style}
      className={styles.button}
    >
      {text}
    </button>
  )
}

export default Button