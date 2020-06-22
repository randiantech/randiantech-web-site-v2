import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';

class RTSPage extends React.Component {
  render() {
    return <LoginForm />;
  }
}

export default React.memo(RTSPage);
