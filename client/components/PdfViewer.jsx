import React from 'react';

import styles from './PdfViewer.css';

export default function PdfViewer() {
  return (
    <object
      className={styles.pdf}
      data="https://www.dropbox.com/s/bdwuo599p5i947x/Demian_Andres_Rodriguez_CV.pdf?raw=1"
      type="application/pdf"
    >
      <p>
        This browser does not support inline PDFs.
        <a href="https://www.dropbox.com/s/bdwuo599p5i947x/Demian_Andres_Rodriguez_CV.pdf?raw=1">Please download the PDF</a> to view it.
      </p>
    </object>
  );
}
