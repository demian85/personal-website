import React from 'react';
import { Route } from 'react-router-dom';

import PdfViewer from './PdfViewer';
import Home from './Home';

export default function App() {
  return (
    <section>
      <Route exact path="/" component={Home} />
      <Route path="/cv" component={PdfViewer} />
    </section>
  );
}
