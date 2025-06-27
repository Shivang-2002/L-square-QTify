import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "@mui/material";
import Section from "../Section/Section";
import styles from "./SongSection.module.css";
import axios from "axios";

export default function SongsSection() {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [activeGenre, setActiveGenre] = useState("All");

  useEffect(() => {
    async function fetchData() {
      const [songsRes, genresRes] = await Promise.all([
        axios.get("https://qtify-backend-labs.crio.do/songs"),
        axios.get("https://qtify-backend-labs.crio.do/genres"),
      ]);
      setSongs(songsRes.data);
      setGenres(["All", ...genresRes.data.data.map((g) => g.label)]);
    }
    fetchData();
  }, []);

  const filteredSongs =
    activeGenre === "All"
      ? songs
      : songs.filter((song) => song.genre.label === activeGenre);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h3>Songs</h3>
        <Tabs
          value={activeGenre}
          onChange={(e, val) => setActiveGenre(val)}
          className={styles.tabs}
          TabIndicatorProps={{ className: styles.tabIndicator }}
        >
          {genres.map((genre) => (
            <Tab key={genre} label={genre} value={genre} className={styles.tab} />
          ))}
        </Tabs>
      </div>

      <Section
        title=""
        data={filteredSongs}
        disableCarousel={true}
        type="song"
      />
    </div>
  );
}
