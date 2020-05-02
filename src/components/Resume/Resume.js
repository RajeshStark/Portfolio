import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './Resume.css';

export default function Resume() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                      <h2 className="main-heading">Education</h2>
                    </Col>
                    <Col>
                      <h3>Sri Chaitnya jr. College</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
