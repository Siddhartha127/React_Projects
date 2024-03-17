import React from 'react'
import styles from './Button.module.css'
import { MdMessage } from "react-icons/md";
function Button(props) {
  return (
<button className={props.isOutline ? styles.outline_btn : styles.primary_btn}>
    {props.icon}
    {props.text}
</button>
  );
};

export default Button;