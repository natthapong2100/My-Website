import React from 'react';
import { ButtonR } from '../ButtonElement';

import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2,
TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElements';


const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, 
    description, buttonLabel, img, alt, primary, dark, dark2, to, target}) => {
    return (
        <>
          <InfoContainer lightBg={lightBg} id={id}>
              
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>

                    <Column1>
                        <TextWrapper>

                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            {/* <BtnWrap>
                                <ButtonR
                                smooth={true}
                                duration={true}
                                spy={true}
                                exact="true"
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}
                                to={to}
                                target={target}
                                >
                                {buttonLabel}</ButtonR>
                            </BtnWrap> */}

                        </TextWrapper>
                    </Column1>

                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>

                </InfoRow>
            </InfoWrapper>

          </InfoContainer>
        </>
    )
}


export default InfoSection;
