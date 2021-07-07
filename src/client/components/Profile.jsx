import React from 'react';

import Photo from './Photo';

import styles from './Profile.css';

export default function Profile() {
  return (
    <section className={styles.root}>
      <header>
        <h1>
          <Photo className={styles.photo} />
          <span itemProp="name">DEMIAN ANDRES RODRIGUEZ</span>
        </h1>
        <h2>
          <span itemProp="jobTitle">
            Full Stack Web Developer, Javascript Engineer & Node.js enthusiast
          </span>
        </h2>
      </header>
      <p>
        I'm a Full Stack Javascript Developer with more than 15 years of
        experience building complex single-page Web Apps.
      </p>
      <p>
        I discovered Node.js in its early stages (v0.1) and made my way into
        asynchronous logic by creating many Apps for real-time monitoring and
        statistics generation. Since then, I started focusing my career on
        Node.js.
      </p>
      <p>
        Currently, my preferred tech stack for building Web Apps and RESTful
        services is Javascript/Typescript + React/Redux + Node.js + Express +
        MongoDB/PostgreSQL + Heroku/AWS + Serverless
      </p>
      <p>
        Many of my recent projects are IoT-related and rely on many AWS
        services, including Kinesis, Lambda, RDS, API Gateway, ElastiCache, EC2,
        and Elastic Beanstalk.
      </p>
      <p>
        I have experience working with electronic devices and home-automation
        systems that use the MQTT protocol for pub-sub real-time communication.
      </p>
      <p>
        I like having the possibility to research and stay up to date with the
        latest tech trends to innovate and develop stunning products with high
        functionality, usability, and visualizations.
      </p>
      <p>
        I consider myself to have critical and analytical thinking, being
        meticulous, organized, and self-motivated. I'm also an advocate of TDD
        and writing clean, modular, and maintainable code.
      </p>
    </section>
  );
}
