import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "../../firebase";
import { toast } from "react-toastify";
class PasswordReset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  async handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    try {
      let userData = await firebase
        .auth()
        .sendPasswordResetEmail(this.state.email);
      this.props.history.push("/login");
      toast.success("Password reset successfully");
    } catch (err) {
      toast.error(err.message);
      this.props.history.push("/password-rest");
      this.setState({ email: "" });
    }
  }
  render() {
    return (
      <Fragment>
        <section className="align-items-center justify-content-center d-flex loginComponent">
          <div className="col-md-3 mx-auto ">
            <img src="register-logo.png" alt="logo" />
            <div className="card card-body">
              <h4 className="display-6  text-capitalize text-left">
                Password assistance
              </h4>
              <p>
                Enter the email address or mobile phone number associated with
                your Amazon account.
              </p>
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
                  <label htmlFor="username"></label>
                  <button className="btn btn-warning btn-block">
                    Continue
                  </button>
                </div>
                <p style={{ fontSize: "15px" }}>
                  Has your email or mobile number changed?
                </p>
                <p style={{ fontSize: "12px" }}>
                  If you no longer use the email address associated with your
                  Amazon account, you may contact Customer Service for help
                  restoring access to your account.{" "}
                </p>
                <hr />
                <p>
                  <Link to="/login">Login</Link>
                </p>
              </form>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default withRouter(PasswordReset);
