import React from "react";

const VideoDetail = ({ video }) => {
  if (video.length === 0) return <div></div>;
  else
    return (
      <div className="ui segment">
        <div className="ui embed">
          <iframe
            title={video.id.videoId}
            width={video.snippet.thumbnails.high.width}
            height={video.snippet.thumbnails.high.height}
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    );
};

export default VideoDetail;
