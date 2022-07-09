import { saveAs } from 'file-saver';
import resume from '../icons/programming_resume.pdf';

function FileDownloader() {
  const dwnldFile = () => {
    saveAs(resume, 'funayans_resume.pdf');
  };
  return { dwnldFile };
}

export default FileDownloader;
