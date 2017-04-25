import React from 'react';
import PropTypes from 'prop-types';

import styles from './Section.css';

export default function Section(props) {
  const iconClassName = props.headerStyle === '1' ? styles.light : styles.dark;
  const headerClassName = props.headerStyle === '1' ? styles.lightHeader : styles.darkHeader;
  const cssClass = props.allowPageBreak ? styles.root : styles.avoidPageBreak;
  return (
    <section className={cssClass}>
      {
        props.title &&
          <h2 className={`${styles.header} ${headerClassName}`}>
            <img src={props.icon} alt="" className={`${styles.icon} ${iconClassName}`} />
            <span>{props.title}</span>
          </h2>
      }
      <div className={styles.content}>
        {props.children}
      </div>
    </section>
  );
}

Section.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  headerStyle: PropTypes.oneOf(['1', '2']),
  allowPageBreak: PropTypes.bool,
};

Section.defaultProps = {
  icon: '',
  title: '',
  headerStyle: '1',
  allowPageBreak: false,
};
