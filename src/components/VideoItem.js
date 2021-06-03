import React from "react";
import "../css/VideoItem.css";

const VideoItem = function ({
  thumbnail,
  title,
  altText,
  onVideoSelected,
  video,
}) {
  return (
    <div
      className="list-group-item list-group-item-action item-container container"
      onClick={() => onVideoSelected(video)}
    >
      <div className="img-container">
        <img
          src={thumbnail}
          alt={altText}
          className="img-thumbnail video-thumbnail align-middle"
        />
      </div>
      <div className="title-container">
        <h6>{title}</h6>
      </div>
    </div>
  );
};
export default VideoItem;
