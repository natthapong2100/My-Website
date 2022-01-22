import React from 'react';
import {FaFacebook, FaLine, FaGithub, FaLinkedin} from 'react-icons/fa'
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, 
    WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements';


const Footer = () => {
  return (
    <>
        <FooterContainer id="contact">
            <FooterWrap>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            Natthapong L.
                        </SocialLogo>
                        <WebsiteRights>Natthapong L. © {new Date().getFullYear()} All rights 
                        reserved.</WebsiteRights>
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

                            <SocialIconLink href='/' target="_blank" aria-label="Linkedin">
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
