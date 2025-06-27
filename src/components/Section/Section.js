import React from "react";
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";

function Section({ title, data = [], showAll = false, onToggleShowAll, type = "album", disableCarousel = false }) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h3>{title}</h3>
        {!disableCarousel && (
          <button onClick={onToggleShowAll}>
            {showAll ? "Collapse" : "Show All"}
          </button>
        )}
      </div>

      {(showAll || disableCarousel) ? (
        <div className={styles.grid}>
          {data.map((item) => (
            <Card key={item.id} data={item} type={type} />
          ))}
        </div>
      ) : (
        <Carousel
          data={data}
          renderCard={(item) => <Card data={item} type={type} />}
        />
      )}
    </section>
  );
}

export default Section;
