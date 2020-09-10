import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Objects.module.css';

function Objects() {
    return (
        <>
        <Row>
            <Col className={styles.column} sm={7} xs={12}>
                <div className={styles.objectOne}><p>One</p></div>
                <div className={styles.objectTwo}><p>Two</p></div>
            </Col>
            <Col className={styles.column} sm={3} xs={12}>
                <div className={styles.objectThree}>Three</div>
            </Col>
        </Row>
        </>
    );
}

export default Objects
