import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) =>{
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>

                <SidebarMenu>

                    <SidebarLink to='about_me' onClick={toggle} >About Me</SidebarLink>
                    <SidebarLink to='skills' onClick={toggle} >Skills</SidebarLink>
                    <SidebarLink to='projects' onClick={toggle} >Projects</SidebarLink>

                </SidebarMenu>

                <SideBtnWrap>
                    <SidebarRoute to={{pathname: "//github.com/natthapong2100"}} target="_blank" onClick={toggle} >GitHub</SidebarRoute>
                </SideBtnWrap>

            </SidebarWrapper>
        </SidebarContainer>
    )
};

export default Sidebar