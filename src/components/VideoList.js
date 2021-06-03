import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import VideoItem from "./VideoItem";

const VideoList = function ({ videos, onVideoSelected }) {
  const renderedVideos = videos.map((video, i) => {
    const title = video.snippet.title;
    const thumbnail = video.snippet.thumbnails.default.url;
    const altText = video.snippet.description;
    // console.log(title, thumbnail)

    return (
      <React.Fragment key={`video-${i}`}>
        <VideoItem
          video={video}
          title={title}
          thumbnail={thumbnail}
          altText={altText}
          onVideoSelected={onVideoSelected}
        />
      </React.Fragment>
    );
  });
  // console.log(onVideoSelected);
  return <div className="list-group">{renderedVideos}</div>;
};

export default VideoList;
