import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../../index.css'
import styles from './Navigation.module.css';

function Navigation() {
    return (
      <>
        <div className={styles.centerNavigation}>
          <Navbar.Brand href="#home" className="navbar__brand-center">CSS Modules Task</Navbar.Brand>
          </div>
          <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home" className="active-link" className={styles.navLink}>HOME</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" className={styles.navLink}>ABOUT</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" className={styles.navLink}>CONTACT</Nav.Link>
          </Nav.Item>
          </Nav>
      </>
    );
}

export default Navigation
