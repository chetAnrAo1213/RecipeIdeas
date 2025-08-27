import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';

function RecipeNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const navStyle = {
    backgroundColor: '#0a090aff',
  };

  const brandStyle = {
    color: '#fe5503',
    textDecoration: 'none',
    
  };

  const linkStyle = ({ isActive }) => ({
    color: isActive ? 'white' : '#fe5503',
    padding: '10px 15px',
    textDecoration: 'none',
    display: 'block',
  });

  const handleLinkClick = () => {
    setIsOpen(false); 
  };

  return (
    <Navbar expand="md" sticky="top" style={navStyle} dark>
      <NavbarBrand href="/" style={brandStyle}>
        Recipe Ideas
      </NavbarBrand>
      <NavbarToggler onClick={toggle} className="ms-auto" />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto text-center" navbar>
          <NavItem>
            <NavLink to="/name" style={linkStyle} onClick={handleLinkClick}>
              Meal Name
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/firstLetter" style={linkStyle} onClick={handleLinkClick}>
              Meal's First Letter
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/category" style={linkStyle} onClick={handleLinkClick}>
              Categories
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/categories" style={linkStyle} onClick={handleLinkClick}>
              Meal's Categories
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/randomMeal" style={linkStyle} onClick={handleLinkClick}>
              Random Meal
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default RecipeNavbar;
