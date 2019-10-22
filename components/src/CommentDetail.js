import React from "react";

const CommentDetail = props => {
  const { author, avatar, comment, datetime, name } = props.content;
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={avatar} />
      </a>
      <div className="content">
        <a href="/" className={name}>
          {author}
        </a>
        <div className="metadata">
          <span className="date">{datetime}</span>
        </div>
        <div className="text">{comment}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
