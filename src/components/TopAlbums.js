import React, { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";
import axios from "axios";

const TopAlbums = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get("https://qtify-backend-labs.crio.do/albums/top")
      .then((res) => setAlbums(res.data))
      .catch((err) => console.error("Failed to fetch albums", err));
  }, []);

  return (
    <div>
      <h2>Top Albums</h2>
      <Carousel
        data={albums}
        renderCard={(album) => <Card data={album} />}
      />
    </div>
  );
};

export default TopAlbums;
