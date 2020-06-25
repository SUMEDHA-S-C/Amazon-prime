import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "../../firebase";
import { toast } from "react-toastify";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleSubmit(e) {
    let { email, password } = this.state;
    e.preventDefault();
    // console.log(this.state);
    //firebase
    try {
      let userData = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      if (userData.user.emailVerified) {
        toast.success("Logged in successfully");
        this.props.history.push("/");
      } else {
        let message = `${email} is not verified. Please verify`;
        toast.error(message);
      }
      this.setState({ username: "", email: "", password: "" });
    } catch (err) {
      toast.error(err.message);
    }
  }
  render() {
    return (
      <Fragment>
        <section className="align-items-center justify-content-center d-flex loginComponent">
          <div className="col-md-3 mx-auto ">
            <img src="register-logo.png" alt="logo" />
            <div className="card card-body">
              <h4 className="display-6  text-capitalize text-left">Sign-In</h4>

              <form onSubmit={this.handleSubmit}>
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
                  <span className="float-right">
                    <Link to="/password-rest">Forgot Password?</Link>{" "}
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="username"></label>
                  <button className="btn btn-warning btn-block">Sign-In</button>
                </div>

                <p>
                  By continuing an account, you agree to Amazon's Conditions of
                  Use and Privacy Notice.{" "}
                </p>
                <hr />
                <span>New to Amazon?</span>
                <p className="create-acc">
                  {" "}
                  <Link to="/register">Create your own account</Link>{" "}
                </p>
              </form>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default withRouter(Login);
