import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import heroBg from '../../images/hero-bg.jpg'
import { Button } from '../ButtonElement';
import { HeroContainer, HeroBg, ImageBg, VideoBg, HeroContent, 
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
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
                    primary="true" dark="true">
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
            
        </HeroContainer>
    )
}

export default HeroSection
