import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";

import "./App.css";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);

  const [showTopAll, setShowTopAll] = useState(false);
  const [showNewAll, setShowNewAll] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [topRes, newRes, songRes] = await Promise.all([
          axios.get("https://qtify-backend-labs.crio.do/albums/top"),
          axios.get("https://qtify-backend-labs.crio.do/albums/new"),
          axios.get("https://qtify-backend-labs.crio.do/songs"),
        ]);

        setTopAlbums(topRes.data);
        setNewAlbums(newRes.data);
        setSongs(songRes.data);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />

      {/* Top Albums Section */}
      <Section
        title="Top Albums"
        data={topAlbums}
        showAll={showTopAll}
        onToggleShowAll={() => setShowTopAll((prev) => !prev)}
        type="album"
      />

      {/* New Albums Section */}
      <Section
        title="New Albums"
        data={newAlbums}
        showAll={showNewAll}
        onToggleShowAll={() => setShowNewAll((prev) => !prev)}
        type="album"
      />

      {/* Songs Section - Always Grid, no Show All */}
      <Section
        title="Songs"
        data={songs}
        type="song"
        disableCarousel
      />
    </div>
  );
}

export default App;
