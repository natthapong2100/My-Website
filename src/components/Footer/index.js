import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {FaFacebook, FaLine, FaGithub, FaLinkedin} from 'react-icons/fa'
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, 
    WebsiteRights, SocialIcons, SocialIconLink, InnerWrap, AddressTxt, MiddleWrap } from './FooterElements';


const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
    <>
        <FooterContainer id="contact">
            <FooterWrap>

                <SocialMedia>
                    <SocialMediaWrap>
                        <InnerWrap>
                            <SocialLogo to='/' onClick={toggleHome}>
                            Natthapong L.
                            </SocialLogo>
                            <WebsiteRights>Natthapong L. © {new Date().getFullYear()} All rights 
                            reserved.</WebsiteRights>
                        </InnerWrap>
                            
                        <MiddleWrap>
                            <AddressTxt> Address: Bangkok 10220 <br></br> Email address: 63011208@kmitl.ac.th </AddressTxt>                                              
                            
                        </MiddleWrap>
                        
                        
                        <SocialIcons>

                            <SocialIconLink href='//www.facebook.com/profile.php?id=100009865321766' target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>

                            <SocialIconLink href='//line.me/ti/p/gwGXeNv5cC' target="_blank" aria-label="Line">
                                <FaLine />
                            </SocialIconLink>

                            <SocialIconLink href='//github.com/natthapong2100' target="_blank" aria-label="Github">
                                <FaGithub />
                            </SocialIconLink>

                            <SocialIconLink href='//www.linkedin.com/in/natthapong-lueangphumphitthaya-24441520a/' target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>                          

                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>

            </FooterWrap>
        </FooterContainer>

    </>
  );
};

export default Footer;
