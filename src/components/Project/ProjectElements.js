import styled from 'styled-components'

export const ProjectContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  overflow-x: hidden; /* Prevent horizontal scroll on container */
  width: 100vw; /* Ensure full width */
  
  @media screen and (max-width: 1000px){
    justify-content: flex-start;
    height: auto;
    min-height: 75vh;
    padding: 2rem 0;
  }
  
  @media screen and (max-width: 820px){
    height: auto;
    min-height: 75vh;
    justify-content: flex-start;
    padding: 2rem 0;
  }
`;

export const ProjectWrapper = styled.div`
  color: #010606;
  border: 2px solid;
  border-radius: 10px;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;

  min-height: 480px;
  height: auto; 
  width: 85vw; /* Changed from max-width to width */
  padding: 0 2rem;
  margin-bottom: 4em;
  overflow-x: auto; /* Allow scrolling within wrapper */
  overflow-y: hidden;
  
  /* Hide scrollbar but keep functionality */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  
  @media screen and (max-width: 1000px){
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 0 20px;
    transform: scale(0.85);
    overflow-x: hidden;
    align-items: center;
    width: 90vw;
  }
  @media screen and (max-width: 820px){
    display: flex;
    flex-direction: column;
    padding: 0 15px;
    transform: scale(1);
    overflow-x: hidden;
    height: auto;
    width: 95vw;
    align-items: center;
    border: none; /* Remove border on mobile for cleaner look */
  }
  @media screen and (max-width: 1300px){
    justify-content: center;
  }
`;

export const ProjectCard = styled.div`
  background: #fff;
  min-height: 450px;   /* control minimum size */
  height: auto;       /* allow growth */
  width: 290px;
  min-width: 290px; /* Prevent cards from shrinking */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 11px;
  border-radius: 13px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;
  flex-shrink: 0; /* Prevent flex items from shrinking */

  position: relative; /* For positioning CardLink */
  overflow: hidden;
  
  &:hover {
    transform: scale(1.037);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  
  @media screen and (max-width: 1000px){
    margin: 10px 0;
    margin-bottom: 20px;
    min-width: auto;
    flex-shrink: 1;
    width: 100%;
    max-width: 350px;
  }
  
  @media screen and (max-width: 820px){
    margin: 10px 0;
    margin-bottom: 22px;
    min-width: auto;
    flex-shrink: 1;
    width: 100%;
    max-width: 300px;
    height: auto;
    max-height: none;
    padding: 20px;
  }
  
  @media screen and (max-width: 1300px){
    width: 270px;
  }
`;

export const ProjectIcon = styled.img`
  height: 160px;
  width: auto;
  margin-bottom: 10px;

  position: relative;
`;

export const ProjectH1 = styled.h1`
  font-size: 2.5rem;
  color: #ffd02b;
  margin-bottom: 64px;
  @media screen and (max-width: 820px){
    margin-top: 9rem;
  }
`;

export const ProjectH2 = styled.h2`
  color: #fc6545;
  font-size: 1.1rem;
  margin-bottom: 10px;

  position: relative;
`;

export const ProjectP = styled.p`
  font-size: 1rem;
  text-align: center;

  position: relative;
`;

export const CardLink = styled.a`
  position: absolute; /* Changed from fixed to absolute */
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  inset: 0;
  z-index: 3;
`;