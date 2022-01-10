import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = () =>{
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>

                <SidebarMenu>

                    <SidebarLink to='about_me'>About Me</SidebarLink>
                    <SidebarLink to='skills'>Skills</SidebarLink>
                    <SidebarLink to='projects'>Projects</SidebarLink>
                    <SidebarLink to='contact'>Contact</SidebarLink>

                </SidebarMenu>

                <SideBtnWrap>
                    <SidebarRoute to='/github'>GitHub</SidebarRoute>
                </SideBtnWrap>

            </SidebarWrapper>
        </SidebarContainer>
    )
};

export default Sidebar