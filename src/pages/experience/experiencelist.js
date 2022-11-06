// images
import {
  Artsite,
  CPlus,
  Css,
  Html,
  Java,
  Js,
  Linux,
  NodeJs,
  Pedalup,
  ReactJs,
  Docker,
} from '../../util/photoExport';

const skillsList = [
  { image: ReactJs, desc: 'React.Js' },
  { image: NodeJs, desc: 'Noder.Js' },
  { image: Linux, desc: 'Linux' },
  { image: Js, desc: 'JavaScript' },
  { image: Java, desc: 'Java' },
  { image: Html, desc: 'HTML' },
  { image: Css, desc: 'CSS' },
  { image: CPlus, desc: 'C++' },
  { image: Docker, desc: 'Docker' },
];
const projectsList = [
  {
    image: Pedalup,
    title: 'Buycycle',
    desc: 'A website geared towards selling bicycle',
    link: 'https://buycycleteam.netlify.app',
  },
  {
    image: Artsite,
    title: 'Art Portfolio',
    desc: 'A Project Created For a client',
    link: 'https://artportfolioweb.netlify.app',
  },
];
export { skillsList, projectsList };
