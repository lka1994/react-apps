import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import MockFakerComment from "./MockFakerComment";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail content={new MockFakerComment().get()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail content={new MockFakerComment().get()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail content={new MockFakerComment().get()} />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
