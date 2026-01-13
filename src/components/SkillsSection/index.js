import React from 'react';

import { SkillsContainer, SkillsWrapper, SkillsRow, Column1, Column2,
TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img, SkillBlock, SkillTitle } from './SkillsElements';


const SkillsSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, 
    description1, description2, description3, description4, img, alt}) => {
    return (
        <>
          <SkillsContainer lightBg={lightBg} id={id}>
              
            <SkillsWrapper>
                <SkillsRow imgStart={imgStart}>

                    <Column1>
                        <TextWrapper>

                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>

                            {/* <Subtitle darkText={darkText}>{description1}</Subtitle>
                            <Subtitle darkText={darkText}>{description2}</Subtitle>
                            <Subtitle darkText={darkText}>{description3}</Subtitle>
                            <Subtitle darkText={darkText}>{description4}</Subtitle>                             */}

                            <SkillBlock>
                                <SkillTitle>{description1.title}</SkillTitle>
                                <Subtitle darkText={darkText}>{description1.content}</Subtitle>
                            </SkillBlock>

                            <SkillBlock>
                                <SkillTitle>{description2.title}</SkillTitle>
                                <Subtitle darkText={darkText}>{description2.content}</Subtitle>
                            </SkillBlock>

                            <SkillBlock>
                                <SkillTitle>{description3.title}</SkillTitle>
                                <Subtitle darkText={darkText}>{description3.content}</Subtitle>
                            </SkillBlock>

                            <SkillBlock>
                                <SkillTitle>{description4.title}</SkillTitle>
                                <Subtitle darkText={darkText}>{description4.content}</Subtitle>
                            </SkillBlock>

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
