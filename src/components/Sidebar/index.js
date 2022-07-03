import React from 'react'
import { CloseIcon, Icon, SidbarContainer,SidebarWrapper,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute } from './StyledSidebar'

function Sidebar({isOpen,toggle}) {
    return (
        <SidbarContainer isOpen={isOpen} toggle={toggle} >
            <Icon onClick={toggle} >
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle} >
                        About
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin" onClick={toggle} >Sign IN</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidbarContainer>
      )

}

export default Sidebar