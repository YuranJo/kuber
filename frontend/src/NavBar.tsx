
import React from 'react';
import './NavBar.css';
import ThemeWrapper from './ThemWrapper';

type NavLink = {
  label: string;
  url: string;
};

const navLinks: NavLink[] = [
  { label: 'Home', url: '#' },
  { label: 'About', url: '#' },
  { label: 'Services', url: '#' },
  { label: 'Contact', url: '#' },
];

const SimpleNavbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {navLinks.map((link, index) => (
          <li key={index} className="navbar-item">
            <a href={link.url} className="navbar-link">
              {link.label}
            </a>
          </li>
        ))}
      <ThemeWrapper />
      </ul>
    </nav>
  );
};

export default SimpleNavbar;
