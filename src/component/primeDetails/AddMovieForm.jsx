import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";

class AddMovieForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      genere: "",
      rating: "",
      language: "",
      type: "",
      price: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.addVideo(this.state);
  }
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="card">
            <h1 className="text-uppercase text-left font-weight-bold p-2">
              Add Movies
            </h1>
            <div className="card-body text-dark">
              <form action="/" onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Enter Name"
                      value={this.state.name}
                      onChange={this.handleChange}
                      required
                    ></input>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      name="genere"
                      placeholder="Enter genre"
                      value={this.state.genere}
                      onChange={this.handleChange}
                      required
                    ></input>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="number"
                      className="form-control"
                      name="rating"
                      placeholder="Enter rating"
                      value={this.state.rating}
                      onChange={this.handleChange}
                      required
                    ></input>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      name="language"
                      placeholder="Enter language"
                      value={this.state.language}
                      onChange={this.handleChange}
                      required
                    ></input>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      name="type"
                      placeholder="Enter Movie Type"
                      value={this.state.type}
                      onChange={this.handleChange}
                      required
                    ></input>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="number"
                      className="form-control"
                      name="price"
                      placeholder="Enter price"
                      value={this.state.price}
                      onChange={this.handleChange}
                      required
                    ></input>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary">Add Movie</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(AddMovieForm);
