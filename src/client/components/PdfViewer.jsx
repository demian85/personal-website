import React from 'react';

import styles from './PdfViewer.css';

export default function PdfViewer() {
  return (
    <object
      className={styles.pdf}
      data="https://www.dropbox.com/s/q5cn5lyb0smo2k7/Demian_Andres_Rodriguez_CV.pdf?raw=1"
      type="application/pdf"
    >
      <p>
        This browser does not support inline PDFs.
        <a href="https://www.dropbox.com/s/q5cn5lyb0smo2k7/Demian_Andres_Rodriguez_CV.pdf?dl=0">
          Please download the PDF
        </a>{' '}
        to view it.
      </p>
    </object>
  );
}
