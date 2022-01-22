import { nativeTouchData } from "react-dom/cjs/react-dom-test-utils.production.min";

import natPic from '../../images/nat-pic.JPG'

export const homeObjOne = {
    id: 'about_me',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,

    topLine: 'About Me',
    headline: 'Software Engineering Student at KMITL',
    description: 'Hello, my nickname is Nat. I build this website for gaining more experience and \
        learning React, JavaScript and CSS. Currently, I am a sophomore at Software \
        Engineering (International Program), KMITL.',

    to: {pathname: '//drive.google.com/file/d/1-52EAlzcYSC04ood_0Yw1dD-RjghN4Jw/view?usp=sharing'},
    target: "_blank",
    
    buttonLabel: 'My Resume',
    imgStart: false,
    img: natPic,
    alt: 'about',
    dark: true,
    primary: true,
    dartText: false,


};
