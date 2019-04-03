import React from 'react';

import styles from './Social.css';

export default function Social() {
  return (
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
  );
}
