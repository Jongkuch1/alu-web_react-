import React from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false,
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.validateSubmit = this.validateSubmit.bind(this);
  }

  validateSubmit() {
    const { email, password } = this.state;
    this.setState({ enableSubmit: email !== '' && password !== '' });
  }

  handleChangeEmail(event) {
    const email = event.target.value;
    this.setState({ email }, this.validateSubmit);
  }

  handleChangePassword(event) {
    const password = event.target.value;
    this.setState({ password }, this.validateSubmit);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  render() {
    const { email, password, enableSubmit } = this.state;
    return (
      <React.Fragment>
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <label className={css(styles.label)} htmlFor="email">
            Email
          </label>
          <input
            className={css(styles.input)}
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={this.handleChangeEmail}
          />
          <label className={css(styles.label)} htmlFor="password">
            Password
          </label>
          <input
            className={css(styles.input)}
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={this.handleChangePassword}
          />
          <input
            className={css(styles.button)}
            type="submit"
            value="OK"
            disabled={!enableSubmit}
          />
        </form>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    marginRight: '10px',
    '@media (max-width: 900px)': {
      display: 'block',
      marginRight: 0,
    },
  },
  input: {
    '@media (max-width: 900px)': {
      display: 'block',
      width: '100%',
    },
  },
  button: {
    '@media (max-width: 900px)': {
      display: 'block',
      width: '100%',
    },
  },
});

export default Login;
