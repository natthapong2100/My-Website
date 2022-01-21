import React from 'react';
import { Button } from '../ButtonElement';

import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2,
TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './SkillsElements';


const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, 
    description1, description2, description3, img, alt, primary, dark, dark2}) => {
    return (
        <>
          <InfoContainer lightBg={lightBg} id={id}>
              
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>

                    <Column1>
                        <TextWrapper>

                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>

                            <Subtitle darkText={darkText}>{description1}</Subtitle>
                            <Subtitle darkText={darkText}>{description2}</Subtitle>
                            <Subtitle darkText={darkText}>{description3}</Subtitle>

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

const InfoSection2 = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, img, alt, primary, dark, dark2}) => {
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
