import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaTiktok, FaYoutube, FaMastodon } from "react-icons/fa";
import { BsImage, BsEmojiSmile, BsTag, BsHash } from "react-icons/bs";

function PostComposer() {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      {/* Button to Open Modal */}
      <Button variant="primary" onClick={handleShow}>
        Create Post
      </Button>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Create Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container fluid>
            <Row>
              {/* Left Section */}
              <Col md={8}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex gap-3">
                    <FaTwitter className="text-primary" size={24} />
                    <FaFacebook className="text-primary" size={24} />
                    <FaInstagram className="text-danger" size={24} />
                    <FaLinkedin className="text-primary" size={24} />
                    <FaTiktok className="text-dark" size={24} />
                    <FaYoutube className="text-danger" size={24} />
                    <FaMastodon className="text-secondary" size={24} />
                  </div>
                  <Button variant="outline-secondary" size="sm">Add Tags</Button>
                </div>

                <Form.Group className="mb-3 text-center border p-4 rounded bg-light">
                  <Form.Label className="d-block">
                    📷 Drag & drop or <span className="text-primary">select a photo/video</span>
                  </Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*,video/*"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    placeholder="Start writing or ✨ Use the AI Assistant"
                    rows={3}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                </Form.Group>

                <div className="mb-3 d-flex justify-content-between">
                  <div>
                    <BsImage className="me-3" size={20} />
                    <BsEmojiSmile className="me-3" size={20} />
                    <BsTag className="me-3" size={20} />
                    <BsHash size={20} />
                  </div>
                  <span className="text-muted">0/2200</span>
                </div>

                <Button className="w-100 mt-3" variant="primary">
                  Connect Channels to Post
                </Button>
              </Col>

              {/* Right Section */}
              <Col md={4}>
                <div className="text-center">
                  <h6>Facebook Preview</h6>
                  <div className="bg-light rounded p-5 mt-3">
                    <p className="text-muted">See your post’s preview here</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PostComposer;