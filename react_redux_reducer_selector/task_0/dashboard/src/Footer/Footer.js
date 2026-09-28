import { useContext } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { getFullYear, getFooterCopy } from '../utils/utils';
import AppContext from '../App/AppContext';

function Footer() {
  const { user } = useContext(AppContext);

  return (
    <p style={{ margin: 0 }}>
      Copyright {getFullYear()} - {getFooterCopy(false)}
      {user.isLoggedIn && (
        <span className={css(styles.contact)}>
          {' '}
          <a href="#">Contact us</a>
        </span>
      )}
    </p>
  );
}

const styles = StyleSheet.create({
  contact: {
    display: 'inline',
  },
});

export default Footer;
