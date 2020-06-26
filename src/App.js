import React, { Component, Fragment } from "react";
import HeaderComponent from "./component/HeaderComponent/header.component";
import {
    BrowserRouter as Router,
    Route,
    withRouter,
    Switch,
} from "react-router-dom";
import HomeComponent from "./component/HomepageComponent/Homepage.component";
import Login from "./component/AuthComponent/Login.component";
import Register from "./component/AuthComponent/Register.component";
import PasswordReset from "./component/AuthComponent/passwordResetComponent";
import PageNotFound from "./component/PageNotFound/pageNotFoundComponent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import firebase from "./firebase";

class App extends Component {
    constructor(props) {
            super(props);
            this.state = {
                userData: "",
            };
        }
        // call firebase API
    async componentDidMount() {
        await firebase.auth().onAuthStateChanged((user) => {
            // console.log(user);
            if (user) {
                this.props.history.push("/");
                this.setState({ userData: user });
            } else {
                this.props.history.push("/login");
                this.setState({ userData: "" });
            }
        });
    }
    render() {
        return ( <
            Fragment >
            <
            Router >
            <
            header > { /* conditional redering */ } { /* {this.state.userData?} */ } <
            HeaderComponent user = { this.state.userData }
            /> <
            /header> <
            ToastContainer / >
            <
            main >
            <
            Switch >
            <
            Route path = "/"
            exact component = { HomeComponent }
            /> <
            Route path = "/login"
            exact component = { Login }
            /> <
            Route path = "/register"
            exact component = { Register }
            /> <
            Route path = "/password-rest"
            exact component = { PasswordReset }
            /> <
            Route path = "**"
            component = { PageNotFound }
            /> <
            /Switch> <
            /main> <
            /Router> <
            /Fragment>
        );
    }
}

export default withRouter(App);