import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Heading.module.css';

function Heading() {
    return (
        <>
        <Row>
            <Col sm={10} md={5} className="header heading-one">
                <div className={styles.headerOne}>
                    <h1 >Heading One</h1>
                    <p>Random text over and over again in repeat, Random text over and over again in repeat</p>
                </div>
            </Col>
            <Col sm={10} md={5} className="header heading-two">
                <div className={styles.headerTwo}>
                    <h2>Heading Two</h2>
                    <p>Random text over and over again in repeat, Random text over and over again in repeat</p>
                </div>
            </Col>
        </Row>
        </>
    );
}

export default Heading
