import styled from 'styled-components'

export const ProjectContainer = styled.div`
    height: 75vh; // for found footer contact , (ori = 100vh), 75vh = no contact
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }

`;

export const ProjectWrapper = styled.div`
    color: #010606;
    border: 2px solid;
    border-radius: 10px;
    right: 0;
    max-width: 1000px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    
    flex-direction: row;

    height: 370px;
    max-width: 85vw;
    padding: 0 2rem;
    margin-bottom: 4em;



    @media screen and (max-width: 1000px){ // if sreen max-width is 1000px, do this
        grid-template-columns: 1fr 1fr;
        height: 450px;
        padding: 0 20px;
        display: grid;

        transform: scale(0.58);
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr 1fr;
        padding: 0 20px;
        display: grid;

        transform: scale(0.75);
    }

`;

export const ProjectCard = styled.div`
    background: #fff;
    height: 700px;
    max-height: 370px;
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 0 11px; // space
    border-radius: 13px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.037);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 1000px){ // if sreen max-width is 1000px, do this
        margin: 0 10px;
        margin-bottom: 18px;
    }

    @media screen and (max-width: 768px){
        margin: 0 10px;
        margin-bottom: 18px; // space
    }

`;

export const ProjectIcon = styled.img`
    height: 160px;
    width: auto;
    margin-bottom: 10px;
`;

export const ProjectIconTwogether = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

export const ProjectH1 = styled.h1`
    font-size: 2.5rem;
    color: #ffd02b;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }

`;

export const ProjectH2 = styled.h2`
    color: #fc6545;
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const ProjectP = styled.p`
    font-size: 1rem;
    text-align: center;
`