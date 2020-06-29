import React, { Component, Fragment } from "react";
import "./Header.style.css";
import { Link, withRouter } from "react-router-dom";
import firebase from "../../firebase";
import { toast } from "react-toastify";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
    };
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.props.history.push("/login");
        toast.success("Logged out Successfully");
      })
      .catch((err) => toast.errror(err.message));
  }

  render() {
    let { photoURL, displayName, email } = this.props.user;
    let Annonymous = () => {
      return (
        <Fragment>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li>
        </Fragment>
      );
    };

    let AuthUser = () => {
      return (
        <Fragment>
          <li className="nav-item">
            <Link to="/list-movies" className="nav-link">
              Movies
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link">{email}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={this.signOut}>
              Logout
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <img
                src={photoURL}
                alt={displayName}
                className="img-circle profile-img"
              />
            </a>
          </li>
        </Fragment>
      );
    };
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-light">
          <a className="navbar-brand" href="#">
            <img src="logo.svg" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              {this.props.user.emailVerified ? <AuthUser /> : <Annonymous />}
            </ul>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default withRouter(HeaderComponent);
