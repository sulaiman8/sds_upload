import { Col, Container, Row, Button } from "react-bootstrap"
import React from 'react'

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white text-center d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">WARTA</div>
            <div className="title">BERITA</div>
            <div className="introButton mt-4 text-center">
              <Button variant="dark" href='#trending'>Lihat Berita Terkini</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Intro
