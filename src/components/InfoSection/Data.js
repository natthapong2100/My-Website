import { nativeTouchData } from "react-dom/cjs/react-dom-test-utils.production.min";

import natPic from '../../images/nat-pic.JPG'
import natPicGrad from '../../images/nat-pic-grad.jpeg'

export const homeObjOne = {
    id: 'about_me',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,

    topLine: 'About Me',
    headline: 'MSc Artificial Intelligence Student at University of St Andrews',
    description: 'Hello, I am Nat. I build this website for gaining more experience and \
        learning React and other web app frameworks. Currently, I am interesting in Artificial Intelligence, Machine Learning, Data Science and Large Language Models (LLM).',

    to: {pathname: '//drive.google.com/file/d/1VP0NBWyDVYsZuZwCuvbeKyd9UtIVHPqA/view?usp=sharing'},
    target: "_blank",
    
    buttonLabel: 'My Resume',
    imgStart: false,
    img: natPicGrad,
    alt: 'about',
    dark: true,
    primary: true,
    dartText: false,


};
