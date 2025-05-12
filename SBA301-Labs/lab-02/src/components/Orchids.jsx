import React, { useState } from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import { OrchidsData } from '../ListOfOrchidss'
import Modal from 'react-bootstrap/Modal';

export default function Orchids() {
  const [show, setShow] = useState(false)
  const [selectedOrchid, setSelectedOrchid] = useState(null)

  const handleShow = (orchid) => {
    setSelectedOrchid(orchid)
    setShow(true)
  }

  const handleClose = () => {
    setShow(false)
    setSelectedOrchid(null)
  }

  return (
    <>
      <Container>
        <Row>
          {OrchidsData.map((orchid) => (
            <Col md={3} key={orchid.id} className="mb-4">
              <Card>
                <Card.Img variant='top' src={orchid.image} />
                <Card.Body>
                  <Card.Title>{orchid.orchidName}</Card.Title>
                  <Card.Text>{orchid.category}</Card.Text>
                  <Button variant='primary' onClick={() => handleShow(orchid)}>
                    Detail
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedOrchid ? selectedOrchid.orchidName : ''}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedOrchid ? (
              <div>
                <img
                  src={selectedOrchid.image}
                  alt={selectedOrchid.orchidName}
                  style={{ width: '100%' }}
                />
                <p>{selectedOrchid.description}</p>
              </div>
            ) : (
              <p>Loading details...</p>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  )
}
