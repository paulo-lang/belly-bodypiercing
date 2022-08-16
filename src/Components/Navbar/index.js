import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavbarContainer>
              <NavMenu>
                <NavItem>
                  <NavLinks to="/">INICIO</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="/">SOBRE</NavLinks>
                </NavItem>
              </NavMenu>
              <NavLogo to='/'>Belly BodyPiercing</NavLogo>
              <MobileIcon>
                <FaBars />
              </MobileIcon>
              <NavMenu>
              <NavItem>
                  <NavLinks to="/">NOVIDADES</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="/">CONTATO</NavLinks>
                </NavItem>
              </NavMenu>

            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar