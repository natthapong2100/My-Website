import React, { useEffect, useState } from 'react';
import {FaBars} from 'react-icons/fa';

import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, 
    NavLinks, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 260){
            setScrollNav(true)
        } else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)

    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return(
        <>
            
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}>
                            Natthapong L. XXXX
                        </NavLogo>
                        <MobileIcon onClick={toggle} >
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>

                            <NavItem>
                                <NavLinks to="about_me" smooth={true} 
                                duration={500} spy={true} exact='true' 
                                offset={-80} activeClass="active"
                                >About Me</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="skills" smooth={true} 
                                duration={500} spy={true} exact='true' 
                                offset={-80} activeClass="active"
                                >Skills</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="projects" smooth={true} 
                                duration={500} spy={true} exact='true' 
                                offset={-80} activeClass="active"
                                >Projects</NavLinks>
                            </NavItem>
                            

                        </NavMenu>

                        <NavBtn>
                            <NavBtnLink to={{pathname: "//github.com/natthapong2100"}} target="_blank">GitHub</NavBtnLink>
                        </NavBtn>
                    
                    </NavbarContainer>
                </Nav>
        
        </>
    );
};

export default Navbar;
