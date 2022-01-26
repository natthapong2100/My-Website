import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterContainer = styled.footer`
    background-color: #0f1421; // 101522, #0c101a
`;

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;

`;


export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px){ // active when have window like on Phone
        flex-direction: column;
    }
`;

export const InnerWrap = styled.div` // Natthapong L. and Rights
    display: block;

    @media screen and (max-width: 820px){ // active on Phone
        margin-bottom: 1.4rem;
    }
    
`;

export const MiddleWrap = styled.div` // address and email address
    display: flex;

    @media screen and (max-width: 820px){ // active on Phone
        margin-bottom: 1.4rem;
        
    }

`;


export const AddressTxt = styled.b`
    color: #fff; 
    font-size: 1.0rem;
    margin-bottom: 5px;
    text-align: center; // use this because I use break
    
`;

export const SocialLogo = styled(Link)` // Natthapong L.
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.7rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;

    @media screen and (max-width: 820px){ // active on Phone
        margin-bottom: 0px;
        justify-content: center;

    }

`;

export const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;


`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialIconLink = styled.a`
    color: #fff; 
    font-size: 35px; // social icon size

`;
