import React from "react";
import styles from "./menuitem.module.css";

const MenuItem = ({
  label,
  color,
  onMouseEnter,
  onMouseLeave,
  onClick,
  visible,
}) => {
  // const menuItemClasses = `${className.menuItem}  ${visible ? "item-active" : "item-wrap"}`

  return (
    <div
      className={styles[`${visible ? "item-active" : "item-wrap"}`]}
      style={{ backgroundColor: color }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default MenuItem;
