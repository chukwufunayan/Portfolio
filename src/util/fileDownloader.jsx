import { saveAs } from 'file-saver';
import resume from '../resources/resume.pdf';

function FileDownloader() {
  const dwnldFile = () => {
    saveAs(resume, 'Chukwufunayan_Ojiagbaje_resume.pdf');
  };
  return { dwnldFile };
}

export default FileDownloader;
