import React, { Component, Fragment } from "react";
import "./Auth.style.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import firebase from "../../firebase";
import { toast } from "react-toastify";

class Register extends Component {
  // static defaultProps = {
  //   username: "Shashi",
  //   password: "shashi@123",
  //   email: "shashi@gmail.com",
  // };
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      confirm_password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleSubmit(e) {
    if (this.state.password === this.state.confirm_password) {
      e.preventDefault();
      // console.log("Submitted", this.state);
      let { email, password } = this.state;
      try {
        let userData = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password);
        toast.success("Succesfully prime video account created");
        console.log(userData);
      } catch (err) {
        toast.error(err.message);
      }
    } else {
      alert("Password is not same ");
    }
  }
  render() {
    return (
      <Fragment>
        <section className="vh-100 align-items-center justify-content-center d-flex registerComponent">
          <div className="col-md-3 mx-auto ">
            <img src="register-logo.png" alt="logo" />
            <div className="card card-body">
              <h4 className="display-6  text-capitalize text-left">
                Create account
              </h4>

              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirm_password">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="confirm_password"
                    value={this.state.confirm_password}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="username"></label>
                  <button className="btn btn-warning btn-block">
                    Create your Amazon account
                  </button>
                </div>
                <hr />
                <p>
                  By creating an account, you agree to Amazon's Conditions of
                  Use and Privacy Notice.{" "}
                </p>
                <p>
                  Already have an account?<Link to="/login">Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Register;
