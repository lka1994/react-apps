import React from "react";
import UserHeader from "./UserHeader";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  renderList() {
    return this.props.postList.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="huge middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.props.postList ? this.renderList() : ""}</div>;
  }
}

const mapStateToProps = state => {
  return { postList: state.posts };
};

const mapDispatchToProps = {
  getPosts: fetchPostsAndUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
