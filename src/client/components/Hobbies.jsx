import React from 'react';

import Section from './Section';

import styles from './Hobbies.css';

export default function Hobbies() {
  return (
    <Section icon="/images/ic_star_black_24px.svg" title="Hobbies">
      <ul className={styles.list}>
        <li>
          <img src="/images/technology.svg" alt="" />
          <div>Technology</div>
        </li>
        <li>
          <img src="/images/bicycle.svg" alt="" />
          <div>Cycling</div>
        </li>
        <li>
          <img src="/images/travel.svg" alt="" />
          <div>Travel</div>
        </li>
        <li>
          <img src="/images/iot.svg" alt="" />
          <div>IoT</div>
        </li>
        <li>
          <img src="/images/blockchain.svg" alt="" />
          <div>Blockchain</div>
        </li>
        <li>
          <img src="/images/cryptocurrency.svg" alt="" />
          <div>Finance</div>
        </li>
      </ul>
    </Section>
  );
}
