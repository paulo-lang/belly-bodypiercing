import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements'
import { FaBars } from 'react-icons/fa'

const Navbar = ({ toggle }) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
              <NavMenu>
                <NavItem>
                  <NavLinks to="Home">INÍCIO</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="About">SOBRE</NavLinks>
                </NavItem>
              </NavMenu>
              <NavLogo to='/'>Belly</NavLogo>
              <MobileIcon onClick={toggle}>
                <FaBars />
              </MobileIcon>
              <NavMenu>
                <NavItem>
                  <NavLinks to="contact">CONTATO</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="schedule">AGENDAR</NavLinks>
                </NavItem>
              </NavMenu>

            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar