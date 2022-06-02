import React from 'react';
import apiAuth from './../../apis/Auth';
import { withCookies, Cookies } from 'react-cookie';
import {
    CAlert,
    CButton,
    CCard,
    CCardBody,
    CCardGroup,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CRow, CSpinner,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilLockLocked, cilUser } from '@coreui/icons';
import { instanceOf } from "prop-types";
import { Navigate } from "react-router-dom";

const redirectToDashboard = '/admin/dashboard';

class LoginForm extends React.Component {

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      disabled_submit: false,
      redirect: false,
      incorrect: false
    };

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  checkAccess() {
      const { cookies } = this.props;
      let site_token = cookies.get('site_token');
      if (site_token.access_token) {
          return true;
      }
      return false;
  }

  handleChangeUsername(event) {
    this.setState({ username: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { cookies } = this.props;
    this.setState({ disabled_submit: true });
    let param = {
      email: this.state.username,
      password: this.state.password
    }
    await apiAuth.post('login', param)
        .then(response => {
          const token = response.data;
          if (token.access_token) {
            cookies.set("site_token", {
              access_token: token.access_token,
              expires_at: token.expires_at,
              token_type: token.token_type,
            }, { path: "/" });
            this.setState({
                disabled_submit: false,
                redirect: true,
                incorrect: false,
            });
          }
        })
        .catch(error => {
          const response = error.response;
          console.log(response.errors);
          this.setState({
              disabled_submit: false,
              incorrect: true,
          });
        });
  }

  render() {
    if (this.state.redirect || this.checkAccess()) {
      return (<Navigate replace={true} to={ redirectToDashboard } />);
    }

    return (
      <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={5}>
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm onSubmit={this.handleSubmit}>
                      <h1>Login</h1>
                      <p className="text-medium-emphasis">Sign In to your account</p>
                      <CAlert color="danger" dismissible visible={this.state.incorrect}>
                          Username or password incorrect.
                      </CAlert>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon icon={cilUser} />
                        </CInputGroupText>
                        <CFormInput
                            name="username" value={this.state.username} onChange={this.handleChangeUsername}
                            placeholder="Username Or Email"
                            autoComplete="username"
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupText>
                          <CIcon icon={cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                            name="password" value={this.state.password} onChange={this.handleChangePassword}
                            type="password" placeholder="Password"
                            autoComplete="current-password"
                        />
                      </CInputGroup>
                      <CRow>
                        <CCol xs={6}>
                          <CButton type="submit" disabled={this.state.disabled_submit}
                            color="primary" className="px-4">
                            <CSpinner size="sm" color="light" className={ !this.state.disabled_submit ? 'visually-hidden' : '' } />
                              &nbsp;Login
                          </CButton>
                        </CCol>
                        <CCol xs={6} className="text-right">
                          <CButton color="link" className="px-0">
                            Forgot password?
                          </CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    );
  }
}

export default withCookies(LoginForm);
