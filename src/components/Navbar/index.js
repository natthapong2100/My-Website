import React from 'react';
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = ({toggle}) => {
    return(
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>Natthapong L.</NavLogo>
                    <MobileIcon onClick={toggle} >
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>

                        <NavItem>
                            <NavLinks to="about_me">About Me</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="skills">Skills</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects">Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">Contact</NavLinks>
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
