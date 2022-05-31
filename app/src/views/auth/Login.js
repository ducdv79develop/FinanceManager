import React from 'react';
import axios from 'axios';
import { withCookies, Cookies } from 'react-cookie';
import {
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
  CRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilLockLocked, cilUser } from '@coreui/icons';
import { instanceOf } from "prop-types";

const redirectToDashBoard = '/#/admin/dashboard';

class LoginForm extends React.Component implements withCookies {

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
    const { cookies } = props;
    this.state = {
      username: '',
      password: '',
    };

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeUsername(event) {

    this.setState({username: event.target.value});
  }

  handleChangePassword(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    const { cookies } = this.props;

    let param = {
      email: this.state.username,
      password: this.state.password
    }
    console.log(process.env.REACT_APP_API_AUTH + 'login');

    axios.post(process.env.REACT_APP_API_AUTH + 'login', { param })
        .then(res => {
          const persons = res.data;
          console.log(persons)
        })
        .catch(error => {
          console.log(error)
          const response = error.response
        });


    //window.location.href = redirectToDashBoard;
  }

  render() {
    return (
      <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={5}>
              <CCardGroup>
                <CCard className="p-4">
                  <CCardBody>
                    <CForm>
                      <h1>Login</h1>
                      <p className="text-medium-emphasis">Sign In to your account</p>
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
                          <CButton type="button" onClick={this.handleSubmit} color="primary" className="px-4">
                            Login
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
