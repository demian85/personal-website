import React from 'react';
import { Link } from 'react-router-dom';

import CV from './CV';

import styles from './Home.css';

export default function Home() {
  return (
    <section className={styles.root}>
      <CV />
      <footer>
        <p>Last updated: Aug 2021</p>
        <Link to="/cv">View as PDF</Link>
      </footer>
    </section>
  );
}
