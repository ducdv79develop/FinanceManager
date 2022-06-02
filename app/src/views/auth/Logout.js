import React, { Component } from "react";
import PropTypes, {instanceOf} from "prop-types";
import { connect } from "react-redux";
import { withCookies, Cookies } from 'react-cookie';
import { Navigate } from "react-router-dom";
import apiAuth from "../../apis/Auth";

const redirectToLogin = '/admin/login';

class Logout extends Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        };
    }

    async logout() {
        const {cookies} = this.props;
        let site_token = cookies.get("site_token")
        let config = {
            headers: {
                Authorization: site_token.token_type + " " + site_token.access_token,
            }
        }
        await apiAuth.get('logout', config)
            .then(response => {
                console.log(response.data);
                cookies.set("site_token", {}, {path: "/"});
                this.setState({ redirect: true });
            })
            .catch(error => {
                const response = error.response;
                console.log(response);
            });

    }

    render() {
        this.logout().then(r => true);
        if (this.state.redirect) {
            return (<Navigate replace={ true } to={ redirectToLogin } />);
        }

        return null;
    }
}

export default connect()(withCookies(Logout));