import React, { useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Searchbar from "./Searchbar";
import YoutubeApi from "../api/YoutubeApi";
import VideoList from "./VideoList";
import PlayingVideo from "./PlayingVideo";

import "../css/App.css";

const App = function () {
  const [searchTerm, setSearchTerm] = useState("wgtf cypher");
  const [searchData, setSearchData] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const getData = async function (searchTerm) {
      const { data } = await YoutubeApi.get("/search", {
        params: { q: searchTerm },
      });

      setSearchData(data.items);
      setSelectedVideo(data.items[0]);
    };

    if (searchTerm) {
      getData(searchTerm);
    }
  }, [searchTerm]);

  const onSearchSubmit = (input) => {
    setSearchTerm(input);
  };

  const onVideoSelected = function (video) {
    console.log(video);
    setSelectedVideo(video);
  };
  return (
    <div>
      <Searchbar
        placeholder={"Search a video"}
        onSearchSubmit={onSearchSubmit}
        className="searchbar"
      />
      <div className="body-container">
        {selectedVideo ? <PlayingVideo video={selectedVideo} /> : null}
        <VideoList videos={searchData} onVideoSelected={onVideoSelected} />
      </div>
    </div>
  );
};

export default App;
