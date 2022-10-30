import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import resumePDF from '../../public/myResume.pdf';

const PdfReader = () => {

  const PdfPage = (props) => {
      const [numPages, setNumPages] = useState(null);
      const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

      function onDocumentLoadSuccess({ numPages }) {
        setNumPages(1);
        setPageNumber(1);
      }

      const { pdf } = props;
      
    return(
      <>
        <Document
          file={pdf}
          options={{ workerSrc: "/pdf.worker.js" }}
          onLoadSuccess={onDocumentLoadSuccess}
        >
        </Document>
      </>
    )
  }

  return (
    <>
      <PdfPage pdf={resumePDF} />
    </>
  );
}

export default PdfReader; 