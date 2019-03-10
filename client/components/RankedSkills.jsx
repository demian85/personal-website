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
        <li><span className={styles.name}>JavaScript</span> <Rank value="6" /></li>
        <li><span className={styles.name}>TypeScript</span> <Rank value="6" /></li>
        <li><span className={styles.name}>Bash</span> <Rank value="5" /></li>
        <li><span className={styles.name}>PHP</span> <Rank value="5" /></li>
        <li><span className={styles.name}>Java</span> <Rank value="4" /></li>
        <li><span className={styles.name}>Lua</span> <Rank value="4" /></li>
        <li><span className={styles.name}>C / C++</span> <Rank value="4" /></li>
      </ul>
    </Section>
  );
}
