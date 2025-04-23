import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, Button, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for routing
import {
  Search, User, ShoppingCart, Menu, X, Home, Settings, LogOut, Bell, LayoutGrid
} from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home', icon: <Home size={18} className="me-1" /> },
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
];

const productItems = [
  { href: '#products/1', label: 'Product One' },
  { href: '#products/2', label: 'Product Two' },
  { href: '#products/3', label: 'Product Three' },
  { divider: true },
  { href: '#products/all', label: 'View All Products' },
];

const userDropdownItems = (handleLogout) => [
  { href: '#profile', label: 'Profile' },
  {
    href: '#account',
    label: (
      <>
        <Settings size={16} className="me-2" />
        Account Settings
      </>
    ),
  },
  { divider: true },
  {
    href: '#logout',
    label: (
      <>
        <LogOut size={16} className="me-2" />
        Logout
      </>
    ),
    onClick: handleLogout,
  },
];

const NavbarComponent = () => {
  const [expanded, setExpanded] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);  // Authentication state
  const [userName, setUserName] = useState(''); // Placeholder for username
  const navigate = useNavigate();  // Hook for routing

  const handleToggle = () => setExpanded(!expanded);
  const closeNavbar = () => setExpanded(false);

  // Simulating authentication check
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user')); // Example from localStorage
    if (user) {
      setIsAuthenticated(true);
      setUserName(user.name);  // Assuming the user object has a 'name' property
    }
  }, []);

  const handleLogout = () => {
    // Clear authentication data and redirect to login page (or handle as per your needs)
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setUserName('');
    navigate('/login');  // Redirect to login page after logout
  };

  const handleLoginRedirect = () => {
    // Redirect to the login page if not authenticated
    navigate('/login');
  };

  return (
    <Navbar
      bg="light"
      expand="lg"
      expanded={expanded}
      className="py-3 shadow-sm sticky-top"
    >
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <LayoutGrid className="me-2" size={24} color="#0D6EFD" />
          <span className="fw-bold">CompanyName</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleToggle}
          className="border-0"
        >
          {expanded ? <X size={24} /> : <Menu size={24} />}
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navLinks.map((link, idx) => (
              <Nav.Link
                key={idx}
                href={link.href}
                className="d-flex align-items-center"
                onClick={closeNavbar}
              >
                {link.icon}
                {link.label}
              </Nav.Link>
            ))}

            <NavDropdown title="Products" id="basic-nav-dropdown">
              {productItems.map((item, idx) =>
                item.divider ? (
                  <NavDropdown.Divider key={idx} />
                ) : (
                  <NavDropdown.Item
                    key={idx}
                    href={item.href}
                    onClick={closeNavbar}
                  >
                    {item.label}
                  </NavDropdown.Item>
                )
              )}
            </NavDropdown>
          </Nav>

          <Form className="d-flex mx-auto my-2 my-lg-0" style={{ maxWidth: '300px' }}>
            <InputGroup>
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
                className="border-end-0"
              />
              <Button variant="outline-secondary" className="border-start-0 bg-white">
                <Search size={18} />
              </Button>
            </InputGroup>
          </Form>

          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link href="#notifications" className="position-relative me-2" onClick={closeNavbar}>
              <Bell size={20} />
              <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger rounded-circle">
                <span className="visually-hidden">New notifications</span>
              </span>
            </Nav.Link>

            <Nav.Link href="#cart" className="position-relative me-2" onClick={closeNavbar}>
              <ShoppingCart size={20} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                3
                <span className="visually-hidden">items in cart</span>
              </span>
            </Nav.Link>

            {isAuthenticated ? (
              <NavDropdown title={<User size={20} />} id="user-dropdown" align="end">
                <NavDropdown.Item disabled>Welcome, {userName}</NavDropdown.Item>
                {userDropdownItems(handleLogout).map((item, idx) =>
                  item.divider ? (
                    <NavDropdown.Divider key={idx} />
                  ) : (
                    <NavDropdown.Item key={idx} href={item.href} onClick={item.onClick || closeNavbar}>
                      {item.label}
                    </NavDropdown.Item>
                  )
                )}
              </NavDropdown>
            ) : (
              <Nav.Link href="#login" onClick={handleLoginRedirect}>
                <User size={20} /> Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
