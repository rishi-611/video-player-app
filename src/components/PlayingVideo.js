import React, { useEffect } from "react";
import "../css/PlayingVideo.css";

const PlayingVideo = function ({ video }) {
  const { title, description } = video.snippet;
  const id = video.id.videoId;

  useEffect(() => {
    document.querySelector("form").addEventListener("submit", (e) => {
      e.target.blur();
    });
  }, []);

  return (
    <div className="container">
      <div className="iframe-container">
        <iframe
          title={title}
          src={`https://www.youtube.com/embed/${id}`}
        ></iframe>
      </div>

      <div className="text">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PlayingVideo;
