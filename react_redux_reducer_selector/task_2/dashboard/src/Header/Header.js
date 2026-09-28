import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';
import AppContext from '../App/AppContext';

class Header extends React.Component {
  render() {
    const { user, logOut } = this.context;
    return (
      <div className={css(styles.header)}>
        <img src={logo} className={css(styles.logo)} alt="Holberton logo" />
        <h1 className={css(styles.title)}>School dashboard</h1>
        {user.isLoggedIn && (
          <p id="logoutSection">
            Welcome <strong>{user.email}</strong> (
            <a onClick={logOut} className={css(styles.link)}>
              Log out
            </a>
            )
          </p>
        )}
      </div>
    );
  }
}

Header.contextType = AppContext;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#171d26',
    color: 'white',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    marginBottom: '10px',
  },
  title: {
    margin: 0,
    fontSize: '24px',
  },
  link: {
    color: 'white',
    cursor: 'pointer',
  },
});

export default Header;
