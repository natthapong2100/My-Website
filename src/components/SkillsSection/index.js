import React from 'react';

import { SkillsContainer, SkillsWrapper, SkillsRow, Column1, Column2,
TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img } from './SkillsElements';


const SkillsSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, 
    description1, description2, description3, img, alt}) => {
    return (
        <>
          <SkillsContainer lightBg={lightBg} id={id}>
              
            <SkillsWrapper>
                <SkillsRow imgStart={imgStart}>

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

                </SkillsRow>
            </SkillsWrapper>

          </SkillsContainer>
        </>
    )
}


export default SkillsSection;
