import React from 'react';
import webPic from '../../images/web-pic.png';
import narocalPic from '../../images/narocal-pic.png';
import twogetherPic from '../../images/twogether-pic.png';
import penguinPic from '../../images/penguin-pic.png';
import spacePic from '../../images/space-pic.png';

import { ProjectContainer, ProjectH1, ProjectWrapper, ProjectCard, 
  ProjectIcon, ProjectH2, ProjectP, CardLink } from './ProjectElements';


const Project = () => {
  return (
    <ProjectContainer id="projects">
      <ProjectH1>My Projects</ProjectH1>
      <ProjectWrapper>

        <ProjectCard>
            <CardLink href="//github.com/Beammi/NAROCAL" target='_blank'></CardLink>
            <ProjectIcon src={narocalPic}/>
            <ProjectH2>Narocal</ProjectH2>
            <ProjectP>
              A marketplace web application where Thai people can easily shop for local products from other countries.
            </ProjectP>
        </ProjectCard>

        <ProjectCard>
          <CardLink href="//github.com/natthapong2100/My-Website" target='_blank'></CardLink>
          <ProjectIcon src={webPic}/>
          <ProjectH2>My Website</ProjectH2>
          <ProjectP>The website that is written by React, JavaScript, HTML and CSS which have
            About Me, Skills and Projects section.
          </ProjectP>
        </ProjectCard>


        <ProjectCard>
          <CardLink href="//github.com/natthapong2100/Twogether" target='_blank'></CardLink>
          <ProjectIcon src={twogetherPic}/>
          <ProjectH2>Twogether</ProjectH2>
          <ProjectP>Andrioid application which the main features are creating 
            a post, having user profile page, chat room and newsfeed.</ProjectP>
        </ProjectCard>

        <ProjectCard>
          <CardLink href="//github.com/natthapong2100/Penguin-VS-COVID" target='_blank'></CardLink>
          <ProjectIcon src={penguinPic}/>
          <ProjectH2>Penguin VS COVID</ProjectH2>
          <ProjectP>Python programming project, this is a fighting game which 
              we will play the penguin fight to the COVID.</ProjectP>
        </ProjectCard>

        <ProjectCard>
          <ProjectIcon src={spacePic}/>
          <CardLink href="//github.com/natthapong2100/Space-Destroyer" target='_blank'></CardLink>
          <ProjectH2>Space Destroyer</ProjectH2>
          <ProjectP>C++ programming project, this is a game that play 
            your rocket and destroy enemy rockets.</ProjectP>
        </ProjectCard>

      </ProjectWrapper>


    </ProjectContainer>
  )
  
};

export default Project;
