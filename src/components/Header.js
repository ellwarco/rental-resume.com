import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

function Header({ printResume, toggleMenu, closeMenu }) {
  return (
    <header className="header">
      <Link className="logo--mobile" to="/" onClick={closeMenu}>
        Rental Resume
      </Link>
      <button className="toggle" onClick={toggleMenu}>
        <span className="toggle__bars" />
      </button>
      <nav className="nav">
        <ul>
          <Link to="/" className="logo" onClick={closeMenu}>
            <span className="icon-resume" />
            <h1 to="/">Rental Resume</h1>
          </Link>
          <li>
            <Link
              to="/applicant"
              title="Applicant"
              className="btn--nav"
              activeClassName="btn--nav--active"
              onClick={closeMenu}
            >
              <span className="btn--nav__lines" />
              Applicant
            </Link>
          </li>
          <li>
            <Link
              to="/summary"
              title="Summary"
              className="btn--nav"
              activeClassName="btn--nav--active"
              onClick={closeMenu}
            >
              <span className="btn--nav__lines" />
              Summary
            </Link>
          </li>
          <li>
            <Link
              to="/employment-history"
              title="Employment History"
              className="btn--nav"
              activeClassName="btn--nav--active"
              onClick={closeMenu}
            >
              <span className="btn--nav__lines" />
              Employment History
            </Link>
          </li>
          <li>
            <Link
              to="/rental-history"
              title="Rental History"
              className="btn--nav"
              activeClassName="btn--nav--active"
              onClick={closeMenu}
            >
              <span className="btn--nav__lines" />
              Rental History
            </Link>
          </li>
          <li>
            <Link
              to="/income"
              title="Income"
              className="btn--nav"
              activeClassName="btn--nav--active"
              onClick={closeMenu}
            >
              <span className="btn--nav__lines btn--nav__lines--last" />
              Income
            </Link>
          </li>
          <li>
            <Link
              to="/preview"
              title="preview"
              className="btn--nav btn--preview"
              activeClassName="btn--nav--active"
              onClick={closeMenu}
            >
              <span className="icon-preview" />
              Preview
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  printResume: PropTypes.func,
  toggleMenu: PropTypes.func,
  closeMenu: PropTypes.func,
};

export default Header;