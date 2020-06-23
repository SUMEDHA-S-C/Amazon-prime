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

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return ( <
            Fragment >
            <
            Router >
            <
            header >
            <
            HeaderComponent / >
            <
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