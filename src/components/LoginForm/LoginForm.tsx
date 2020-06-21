import React from 'react';
import {Link} from 'react-router-dom';
import ReactLoading from 'react-loading';
import {DESKTOP_ITEMS} from '../../constants';
import {isMobileWidth} from '../../utils';
import './LoginForm.css';
import loginImg from '../../../public/login.jpg';

interface LoginFormState {
  isMobile: boolean;
  isError: boolean;
  isLoading: boolean;
  error: string;
}

export default class LoginForm extends React.Component<any, LoginFormState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isMobile: isMobileWidth(),
      isError: false,
      isLoading: false,
      error: '',
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({isMobile: isMobileWidth()});
  }

  handleSignIn() {
    setTimeout(() => this.setState({isLoading: true}), 300);

    setTimeout(() => {
      this.setState({error: 'Invalid Credentials.'});
      this.setState({isError: true});
      this.setState({isLoading: false});
    }, 2500);

    setTimeout(() => this.setState({isError: false}), 6000);
  }

  render() {
    const {isMobile, isError, error, isLoading}: LoginFormState = this.state;
    return (
      <>
        <div className="rts-page-container">
          <div className="rts-page-login-pane">
            <div className="rts-page-item">
              <label>Email</label>
              <input type="text" className="rts-page-item-input" />
            </div>
            <div className="rts-page-item">
              <label>Password</label>
              <input type="password" className="rts-page-item-input" />
            </div>
            <div className="rts-page-item-actions">
              <div
                className="rt-access-btn rt-rounded rts-page-sign-in-btn"
                onClick={() => this.handleSignIn()}
              >
                Sign In
              </div>
            </div>
            {isError && <div className="rts-page-error">{error}</div>}
          </div>
          <div className="rts-page-right" />
        </div>
        {isLoading && (
          <div className="rts-page-loading">
            <ReactLoading type="spin" color="#ff4970" />
          </div>
        )}
      </>
    );
  }
}
