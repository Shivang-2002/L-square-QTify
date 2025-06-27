import React from 'react';
import styles from './Card.module.css';
import Chip from '@mui/material/Chip';

function Card({ data }) {
  const { image, title, follows } = data;

  return (
    <div>
    <div className={styles.card}>
      <img className={styles.albumImage} src={image} alt={title} />
      <div className={styles.chipWrapper}>
        <Chip label={`${follows} Follows`} className={styles.chip} />
      </div>
    </div>
    <div className={styles.title}>{title}</div>
    </div>
  );
}

export default Card;
