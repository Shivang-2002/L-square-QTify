import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";
import axios from "axios";

function Section({ title, fetchUrl }) {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const res = await axios.get(fetchUrl);
        setData(res.data);
      } catch (error) {
        console.error("Failed to fetch albums:", error);
      }
    };

    fetchAlbums();
  }, [fetchUrl]);

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <button onClick={toggleShowAll}>
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>

      {showAll ? (
        <div className={styles.grid}>
          {data.map((album) => (
            <Card key={album.id} data={album} />
          ))}
        </div>
      ) : (
        <Carousel data={data} renderCard={(album) => <Card data={album} />} />
      )}
    </section>
  );
}

export default Section;
