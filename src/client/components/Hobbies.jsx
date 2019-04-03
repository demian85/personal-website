import React from 'react';

import Section from './Section';

import styles from './Hobbies.css';

export default function Hobbies() {
  return (
    <Section icon="/images/ic_star_black_24px.svg" title="Hobbies">
      <ul className={styles.list}>
        <li><img src="/images/ic_computer_white_24px.svg" alt="" /><div>Technology</div></li>
        <li><img src="/images/ic_directions_bike_white_24px.svg" alt="" /><div>Cycling</div></li>
        <li><img src="/images/ic_flight_takeoff_white_24px.svg" alt="" /><div>Travel</div></li>
        <li><img src="/images/baseline-devices_other-24px.svg" alt="" /><div>IoT</div></li>
      </ul>
    </Section>
  );
}
