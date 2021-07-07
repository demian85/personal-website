import React from 'react';
import { Route } from 'react-router';

import PdfViewer from './PdfViewer';
import Home from './Home';

export default function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path="/cv" component={PdfViewer} />
    </>
  );
}
