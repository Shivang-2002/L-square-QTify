import React from "react";
import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";

function Card({ data, type }) {
  const { image, title, follows, likes } = data;

  return (
    <div className={styles.card}>
      <img className={styles.albumImage} src={image} alt={title} />
      
      <div className={styles.chipWrapper}>
        <Chip
          label={type === "song" ? `${likes} Likes` : `${follows} Follows`}
          className={styles.chip}
        />
      </div>

      <div className={styles.title}>{title}</div>
    </div>
  );
}

export default Card;
