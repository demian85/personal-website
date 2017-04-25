import React from 'react';

import Section from './Section';

import styles from './RankedSkills.css';

function Rank(props) {
  const dots = [];
  for (let i = 1; i <= 6; i++) {
    const css = i <= props.value ? styles.fill : styles.empty;
    dots.push(<span key={i} className={css} />);
  }
  return (
    <span className={styles.rank}>
      {dots}
    </span>
  );
}

export default function RankedSkills(props) {
  return (
    <Section icon="/images/ic_code_black_24px.svg" title="Programming Languages">
      <ul className={styles.list}>
        <li><span className={styles.name}>Javascript</span> <Rank value="6" /></li>
        <li><span className={styles.name}>SQL</span> <Rank value="5" /></li>
        <li><span className={styles.name}>PHP</span> <Rank value="5" /></li>
        <li><span className={styles.name}>Java</span> <Rank value="4" /></li>
        <li><span className={styles.name}>C</span> <Rank value="4" /></li>
        <li><span className={styles.name}>C++</span> <Rank value="3" /></li>
      </ul>
    </Section>
  );
}
