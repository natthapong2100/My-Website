import React from 'react';
import webPic from '../../images/web-pic.png';
import twogetherPic from '../../images/twogether-pic.png';
import penguinPic from '../../images/penguin-pic.png';
import spacePic from '../../images/space-pic.png';

import { ProjectContainer, ProjectH1, ProjectWrapper, ProjectCard, 
  ProjectIcon, ProjectH2, ProjectP, ProjectIconTwogether } from './ProjectElements';


const Project = () => {
  return (
    <ProjectContainer id="projects">
      <ProjectH1>My Projects</ProjectH1>
      <ProjectWrapper>
        <ProjectCard>
          <ProjectIcon src={webPic}/>
          <ProjectH2>My Website</ProjectH2>
          <ProjectP>The website that is written by React, JavaScript, HTML and CSS which have
            About Me, Skills, Projects and Contact section.
          </ProjectP>
        </ProjectCard>

        <ProjectCard>
          <ProjectIconTwogether src={twogetherPic}/>
          <ProjectH2>Twogether</ProjectH2>
          <ProjectP>Andrioid application which the main features are creating 
            a post, having user profile page, chat room and newsfeed.</ProjectP>
        </ProjectCard>

        <ProjectCard>
          <ProjectIcon src={penguinPic}/>
          <ProjectH2>Penguin VS COVID</ProjectH2>
          <ProjectP>Python programming project, this is a fighting game which 
              we will play the penguin fight to the COVID.</ProjectP>
        </ProjectCard>

        <ProjectCard>
          <ProjectIcon src={spacePic}/>
          <ProjectH2>Space Destroyer</ProjectH2>
          <ProjectP>C++ programming project, this is a game that play 
            your rocket and destroy enemy rockets.</ProjectP>
        </ProjectCard>

      </ProjectWrapper>


    </ProjectContainer>
  )
  
};

export default Project;
