import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleOAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({ clientId: "476798277869-rvcnkcfn7dvadaouc8a55s8vebmsg9ll.apps.googleusercontent.com", scope: "email" }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) this.props.fetchSignIn(this.auth.currentUser.get().getId());
    else this.props.fetchSignOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) return <div>Checking...</div>;
    else if (this.props.isSignedIn)
      return (
        <button className="ui red google button" onClick={this.auth.signOut}>
          <i className="google icon" />
          Sign out of google
        </button>
      );
    else
      return (
        <button className="ui blue google button" onClick={this.auth.signIn}>
          <i className="google icon" />
          Sign in with google
        </button>
      );
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

const mapDispatchToProps = {
  fetchSignIn: signIn,
  fetchSignOut: signOut
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GoogleOAuth);
