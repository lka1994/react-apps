import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onItemClick }) => {
  return (
    <div className="video-item item" onClick={() => onItemClick(video)}>
      <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} />
      <div className="content">
        <a className="header" href={() => onItemClick(video)}>
          {video.snippet.title}
        </a>
      </div>
    </div>
  );
};

export default VideoItem;
