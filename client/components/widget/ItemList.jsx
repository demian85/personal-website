import React from 'react';
import PropTypes from 'prop-types';

import styles from './ItemList.css';

export function Item(props) {
  return (
    <li style={{ width: props.width }}>
      <i className={`material-icons ${styles.icon}`}>done</i>&nbsp;
      <span className={styles.text}>{props.text}</span>
    </li>
  );
}

Item.propTypes = {
  text: PropTypes.string.isRequired,
  width: PropTypes.string,
};

Item.defaultProps = {
  width: '50%',
};

export function ItemList(props) {
  return (
    <ul className={`${styles.list} ${styles.row}`}>
      {props.children}
    </ul>
  );
}
