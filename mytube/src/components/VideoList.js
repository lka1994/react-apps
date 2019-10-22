import React from "react";
import VideoItem from "./VideoItem";

const VideoList = props => {
  const videoList = props.videos.map(video => {
    return <VideoItem key={video.id.videoId} video={video} onItemClick={props.onVideoClick} />;
  });
  return (
    <div className="ui segment">
      <div className="ui relaxed divided list">{videoList}</div>
    </div>
  );
};

export default VideoList;
