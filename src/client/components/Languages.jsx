import React from 'react';

import Section from './Section';

import styles from './Languages.css';

function Rank(props) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const css = i <= props.value ? styles.fill : styles.empty;
    stars.push(
      <span key={i} className={css}>
        ★
      </span>
    );
  }
  return <span className={styles.rank}>{stars}</span>;
}

export default function Languages() {
  return (
    <Section icon="/images/ic_language_black_24px.svg" title="Languages">
      <ul className={styles.list}>
        <li>
          <span className={styles.name}>Spanish</span>
          <Rank value="5" />
        </li>
        <li>
          <span className={styles.name}>English</span>
          <Rank value="4" />
        </li>
      </ul>
    </Section>
  );
}
