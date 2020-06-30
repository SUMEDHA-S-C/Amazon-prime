import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import firebase from "../../firebase";

import "./video.style.css";
class UploadVideoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: null,
      url: "",
      video_title: "",
      videosBlock: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUploadChange = this.handleUploadChange.bind(this);
    this.uploadVideoSubmit = this.uploadVideoSubmit.bind(this);
  }

  handleChange(e) {
    //one is for input text
    this.setState({ [e.target.name]: e.target.value });
  }

  handleUploadChange(e) {
    //file handeling
    if (e.target.files[0]) {
      let uploadVideo = e.target.files[0];
      this.setState({ video: uploadVideo });
    }
  }
  uploadVideoSubmit(e) {
    e.preventDefault();
    // console.log(this.state);
    let { video, video_title } = this.state;
    let uploadTask = firebase.storage().ref(`/videos/${video.name}`).put(video);
    //events
    uploadTask.on(
      "state_changed",
      () => {
        //progress
      },
      () => {
        //error handling
      },
      () => {
        //complete-- you can store in firebase storage
        firebase
          .storage()
          .ref("videos")
          .child(video.name)
          .getDownloadURL()
          .then((url) => {
            this.setState({ url }, () => {
              let newVideos = this.state;
              //storing videos and all properties in database
              firebase
                .database()
                .ref("videos")
                .push({
                  ...newVideos,
                });
              console.log(url);
            });
            // this.props.history.push("/");
          })
          .catch((err) => console.log(err));
      }
    );
  }
  render() {
    return (
      <Fragment>
        <section className="align-items-center justify-content-center d-flex loginComponent">
          <div className="col-md-3 mx-auto ">
            <img src="register-logo.png" alt="logo" />
            <div className="card card-body">
              <h4 className="display-6  text-capitalize text-left">
                Upload Video
              </h4>
              <p style={{ fontSize: "12px" }}>
                Uplaod the video with firebase associated with your Amazon
                account.
              </p>
              <form onSubmit={this.uploadVideoSubmit}>
                <div className="form-group">
                  <input
                    type="file"
                    name="upload_video"
                    className="form-control"
                    onChange={this.handleUploadChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    value={this.state.video_title}
                    name="video_title"
                    className="form-control"
                    placeholder="Enter Video Name"
                    onChange={this.handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="username"></label>
                  <button className="btn btn-warning btn-block">
                    Continue
                  </button>
                </div>
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

export default UploadVideoForm;
