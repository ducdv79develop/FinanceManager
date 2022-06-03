import React, { Component } from "react";
import PropTypes, {instanceOf} from "prop-types";
import { connect } from "react-redux";
import { withCookies, Cookies } from 'react-cookie';
import { Navigate } from "react-router-dom";
import apiAuth from "../../apis/Auth";
import { CProgress, CProgressBar } from "@coreui/react";
import { ImageLogout } from "../../assets/brand/ImageLogout";

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
            progress: 1,
        };
        this.setProgress();
        this.logout().then(r => console.log(r));
    }
    setProgress() {
        let i = 1;
        let masterClass = this;
        function myLoop() {
            setTimeout(function () {
                masterClass.setState({progress: i});
                i = i + 10;
                if (i <= 91) {
                    myLoop();
                }
            }, 300);
        }
        myLoop();
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
                cookies.set("site_token", {}, {path: "/"});
                this.setState({
                    redirect: true,
                    progress: 100
                });
            })
            .catch(error => {
                const response = error.response;
            });
    }

    render() {
        if (this.state.redirect) {
            return (<Navigate replace={ true } to={ redirectToLogin } />);
        }

        return (
          <div>
            <CProgress className="mb-3 mt-5">
              <CProgressBar color="success" variant="striped" value={ this.state.progress }/>
            </CProgress>
            <ImageLogout/>
          </div>
        );
    }
}

export default connect()(withCookies(Logout));