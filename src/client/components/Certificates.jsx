import React from 'react';

import Section from './Section';

import styles from './Certificates.css';

export default function Certificates() {
  return (
    <Section
      icon="/images/ic_card_membership_black_24px.svg"
      title="Certificates"
    >
      <ul className={styles.list}>
        <li>
          <span className={styles.name}>
            Cambridge First Certificate exam.
            <em>Grade B.</em>
          </span>
        </li>
      </ul>
    </Section>
  );
}
