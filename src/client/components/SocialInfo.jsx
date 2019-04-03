import React from 'react';

import Section from './Section';

import styles from './SocialInfo.css';

export default function Info() {
  return (
    <Section icon="/images/ic_public_black_24px.svg" title="">
      <ul className={styles.root}>
        <li>
          <a title="LinkedIn" href="https://www.linkedin.com/in/demian85/" target="_blank" rel="noopener noreferrer">
            <img alt="LinkedIn" src="/images/social/linkedin.svg" />
          </a>
        </li>
        <li>
          <a title="Github" href="https://github.com/demian85" target="_blank" rel="noopener noreferrer">
            <img alt="Github" src="/images/social/github.svg" />
          </a>
        </li>
        <li>
          <a title="Stack Overflow" href="http://stackoverflow.com/story/demian85" target="_blank" rel="noopener noreferrer">
            <img alt="Stack Overflow" src="/images/social/stack-overflow.svg" />
          </a>
        </li>
        <li>
          <a title="Facebook" href="https://www.facebook.com/demianrodriguez" target="_blank" rel="noopener noreferrer">
            <img alt="Facebook" src="/images/social/facebook.svg" />
          </a>
        </li>
        <li>
          <a title="Twitter" href="https://twitter.com/demianr85" target="_blank" rel="noopener noreferrer">
            <img alt="Twitter" src="/images/social/twitter.svg" />
          </a>
        </li>
      </ul>
    </Section>
  );
}
