import { saveAs } from 'file-saver';
import resume from '../resources/programming_resume+final (1).pdf';

function FileDownloader() {
  const dwnldFile = () => {
    saveAs(resume, 'funayans_resume.pdf');
  };
  return { dwnldFile };
}

export default FileDownloader;
