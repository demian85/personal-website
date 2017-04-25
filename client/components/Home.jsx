import React from 'react';
import { Link } from 'react-router-dom';

import CV from './CV';

import styles from './Home.css';

export default function Home() {
  return (
    <section className={styles.root}>
      <CV />
      <footer>
        <Link to="/cv">View as PDF</Link>
      </footer>
    </section>
  );
}
