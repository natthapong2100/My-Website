import { nativeTouchData } from "react-dom/cjs/react-dom-test-utils.production.min";

import natPic from '../../images/nat-pic.JPG'

export const homeObjOne = {
    id: 'about_me',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,

    topLine: 'About Me',
    headline: 'Artificial Intelligence Student at University of St Andrews',
    description: 'Hello, my nickname is Nate. Once, I build this website for gaining more experience and \
        learning React and other web app frameworks. Currently, I am interesting in the data scientist and web development field.',

    to: {pathname: '//drive.google.com/file/d/1VP0NBWyDVYsZuZwCuvbeKyd9UtIVHPqA/view?usp=sharing'},
    target: "_blank",
    
    buttonLabel: 'My Resume',
    imgStart: false,
    img: natPic,
    alt: 'about',
    dark: true,
    primary: true,
    dartText: false,


};
