import React from 'react';
import { Route } from 'react-router-dom';

import PdfViewer from './PdfViewer';
import Home from './Home';

import styles from './App.css';

export default function App() {
  return (
    <section className={styles.root}>
      <Route exact path="/" component={Home} />
      <Route path="/cv" component={PdfViewer} />
    </section>
  );
}
