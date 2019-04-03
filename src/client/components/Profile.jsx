import React from 'react';

import Photo from './Photo';

import styles from './Profile.css';

export default function Profile() {
  return (
    <section className={styles.root}>
      <header>
        <h1>
          <Photo className={styles.photo} />
          <span itemProp="name">DEMIÁN ANDRÉS RODRIGUEZ</span>
        </h1>
        <h2><span itemProp="jobTitle">Full Stack Web Developer, Javascript Engineer & Node.js enthusiast</span></h2>
      </header>
      <p>
        I've been a developer for the past 14 years.<br />
        During this time, I developed many complex single-page
        Web applications combining Javascript with the
        latest technologies and Web API's.<br />
        I've been venturing into Node.js since version 0.1 and made my way into asynchronous logic. I'm sure it has great potential and I'm looking forward to work on projects using this runtime from now on.<br />
        I like having the possibility to research and stay up to
        date with the latest tech trends so I can innovate and
        develop stunning products with great functionality,
        usability and visualizations.<br />
        In my spare time I love contributing to open source
        projects on Github and working with IoT & Home Automation. I also have many projects of my
        own.
      </p>

    </section>
  );
}
