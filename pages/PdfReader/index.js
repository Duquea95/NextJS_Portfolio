import resumePDF from '../../public/myResume.pdf';

const PdfReader = () => {

  return (
    <>
      <iframe src={resumePDF} />
    </>
  );
}

export default PdfReader; 