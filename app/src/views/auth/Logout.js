import React, { Component } from "react";
import PropTypes, {instanceOf} from "prop-types";
import { connect } from "react-redux";
import { withCookies, Cookies } from 'react-cookie';

class Logout extends Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        cookies: instanceOf(Cookies).isRequired
    };

    logout() {
        console.log();
        const { cookies } = this.props;
        cookies.set("site_token", {}, { path: "/" });
    }

    render() {
        this.logout();
        return null;
    }

}

export default connect()(withCookies(Logout));