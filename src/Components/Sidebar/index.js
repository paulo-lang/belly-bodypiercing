import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="inicio" onClick={toggle}>Inicio</SidebarLink>
                    <SidebarLink to="About" onClick={toggle}>Sobre</SidebarLink>
                    <SidebarLink to="galeria" onClick={toggle}>Galeria</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="agendamento">Agendar</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
