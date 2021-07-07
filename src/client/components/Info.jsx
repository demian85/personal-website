import React from 'react';

import Section from './Section';

import styles from './Info.css';

export default function Info() {
  return (
    <Section icon="/images/ic_info_24px.svg" title="Personal information">
      <ul className={styles.list}>
        <li className={styles.home} itemProp="birthPlace">
          Buenos Aires, Argentina
        </li>
        <li className={styles.email} itemProp="email">
          demian85@gmail.com
        </li>
        <li className={styles.skype}>demianr85</li>
      </ul>
    </Section>
  );
}
