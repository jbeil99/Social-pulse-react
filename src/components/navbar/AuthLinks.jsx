import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { User, Settings, LogOut } from 'lucide-react';

const userDropdownItems = [
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
  },
];

const AuthLinks = ({ isAuthenticated, onLogout, closeNavbar }) => {
  return (
    <>
      {isAuthenticated ? (
        <NavDropdown title={<User size={20} />} id="user-dropdown" align="end">
          {userDropdownItems.map((item, idx) =>
            item.divider ? (
              <NavDropdown.Divider key={idx} />
            ) : item.href === '#logout' ? (
              <NavDropdown.Item key={idx} onClick={onLogout}>
                {item.label}
              </NavDropdown.Item>
            ) : (
              <NavDropdown.Item key={idx} href={item.href} onClick={closeNavbar}>
                {item.label}
              </NavDropdown.Item>
            )
          )}
        </NavDropdown>
      ) : (
        <>
          <Nav.Link href="/login" onClick={closeNavbar}>Login</Nav.Link>
          <Nav.Link href="/register" onClick={closeNavbar}>Register</Nav.Link>
        </>
      )}
    </>
  );
};

export default AuthLinks;
  