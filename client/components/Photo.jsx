import React from 'react';
import PropTypes from 'prop-types';

import styles from './Photo.css';

export default function Photo(props) {
  const css = [styles.photo];
  if (props.className) css.push(props.className);
  return (
    <img src="/images/photo.jpg" alt="" className={css.join(' ')} />
  );
}

Photo.propTypes = {
  className: PropTypes.string,
};

Photo.defaultProps = {
  className: ''
};
