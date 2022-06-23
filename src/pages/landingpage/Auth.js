/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';
import Signup from './Signup';
import Signin from './Signin';
import './Auth.css';

export default class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 'signin'
    };
  }

  changeTab = () => {
    this.setState({
      tab: this.state.tab === 'signup' ? 'signin' : 'signup'
    });
  };

  render() {
    const page =
      this.state.tab === 'signin' ? (
        <Signin signIn={this.signIn} />
      ) : (
        <Signup signUp={this.signUp} />
      );
    return (
      <div>
        {page}
        <div
          className="new"
          style={{ position: 'absolute', bottom: 0, left: 0, cursor: 'pointer', color: '#fff' }}
          onClick={this.changeTab}
        >
          {this.state.tab === 'signin'
            ? "Accountingiz yo'qmi? Ro'yhatdan o'tish"
            : 'Accountingiz bormi? Kirish'}
        </div>
      </div>
    );
  }
}
