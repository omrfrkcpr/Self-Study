
import React,{useState} from 'react'
import {Nav,Logo,Hamburger,Menu,MenuLink,A} from './NavbarStyles'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  
 
  
  return (
    <Nav>
      <Logo onClick={()=>setIsOpen(false)} to="/home">
        <i>{`<Anthony/>`}</i>
        <span >recipe</span>
      </Logo>
      
      <Hamburger onClick={()=>setIsOpen(!isOpen)}>
        <span/>
        <span/>
        <span/>
      </Hamburger>
      <Menu hamburOpen={isOpen}>
        <MenuLink to="/about" onClick={()=>setIsOpen(!isOpen)}>About</MenuLink>
        
        <A href="https://github.com/anthonyharold67" target="_blank">
          Github
        </A>
        
        <MenuLink onClick={()=>setIsOpen(!isOpen)} onMouseUp={()=>sessionStorage.clear()} to="/">LOGOUT</MenuLink>
      </Menu> 
    </Nav>
  )
}

export default Navbar