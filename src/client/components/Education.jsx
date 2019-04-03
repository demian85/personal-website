import React from 'react';
import PropTypes from 'prop-types';

import Section from './Section';

import styles from './Education.css';

function Item(props) {
  return (
    <div className={styles.item}>
      <div className={styles.duration}>{props.duration}</div>
      <h3>{props.entity}</h3>
      <h4>{props.degree}</h4>
    </div>
  );
}

Item.propTypes = {
  duration: PropTypes.string.isRequired,
  entity: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
};

export default function Education() {
  return (
    <Section icon="/images/ic_school_black_24px.svg" title="Education">
      <Item
        duration="2004 - 2008"
        entity="Universidad Argentina 'John F. Kennedy'"
        degree="Computer Software Engineering"
      />
      <Item
        duration="2003"
        entity="UBA"
        degree="CBC"
      />
      <Item
        duration="1996 - 2012"
        entity="Colegio Santa Teresita del Niño Jesús"
        degree="Art, design and communication certificate"
      />
    </Section>
  );
}
