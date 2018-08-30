import React, { Component } from 'react';


class LogIn extends Component {
    state = {
        userName: "",
        password: ""
    }

    onUserNameChange = e => {
        this.setState({
            userName: e.target.value
        })
    }
    onPasswordChange = e => {
        this.setState({
            password: e.target.value
        })
    }
    onBtnClick = e => {
        e.preventDefault();
        this.props.logIn(this.state);
        this.props.logInCheck(this.logInCheck);
        // this.props.changePage("userProfile");
        this.setState({
            userName: "",
            password: ""
        })
    }

    render() {
        return (
            <div></div>
        )
    }






}

export default LogIn;