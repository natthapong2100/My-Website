import React, {useState} from 'react';
import heroBg from '../../images/hero-bg.jpg'
import { ButtonS } from '../ButtonElement';
import { HeroContainer, HeroBg, ImageBg, HeroContent, 
    HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover);

    };

    return (
        <HeroContainer>
            <HeroBg>
                <ImageBg src={heroBg}/>
            </HeroBg>

            <HeroContent>
                <HeroH1>
                    Natthapong Lueangphumphitthaya
                </HeroH1>
                <HeroP>
                    Welcome to My Website
                </HeroP>

                <HeroBtnWrapper>
                    <ButtonS to="about_me" onMouseEnter={onHover} onMouseLeave={onHover}
                    primary="true" dark="true"
                    smooth={true} duration={500} spy={true} exact='true' offset={-80} 
                    >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </ButtonS>
                </HeroBtnWrapper>
            </HeroContent>
            
        </HeroContainer>
    )
}

export default HeroSection
