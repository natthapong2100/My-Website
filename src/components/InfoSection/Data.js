import { nativeTouchData } from "react-dom/cjs/react-dom-test-utils.production.min";

import natPic from '../../images/nat-pic.JPG'
import skillsPic from '../../images/svg-2.svg'

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,

    topLine: 'About Me',
    headline: 'Software Engineering Student at KMITL',
    description: 'Hello, my nickname is Nat. I build this website for gaining more experience and \
        learning React, JavaScript and CSS. Currently, I am a sophomore at Software Engineering (International Program), KMITL. \
        Please enjoy! ',

    buttonLabel: 'My Resume',
    imgStart: false,
    img: natPic,
    alt: 'Car',
    dark: true,
    primary: true,
    dartText: false

};

export const homeObjTwo = {
    id: 'skills',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,

    topLine: 'Skills',
    headline: 'Software Engineering Student at KMITL',
    description: 'Hello, my nickname is Nat. I build this website for gaining more experience and \
        learning React, JavaScript and CSS. Currently, I am a sophomore at Software Engineering (International Program), KMITL. \
        Please enjoy! ',

    imgStart: true,
    img: skillsPic,
    alt: 'Skills',
    dark: true,
    primary: true,
    dartText: false

};
