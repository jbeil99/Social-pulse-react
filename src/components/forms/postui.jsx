import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Nav, Modal } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube, FaTwitter, FaWandMagicSparkles } from "react-icons/fa6";
import { PiMagicWandFill } from "react-icons/pi";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
 
import {  Image } from "react-bootstrap";
import { FaSmile, FaCalendarAlt, FaCog, FaPlus, FaClock, FaHashtag } from "react-icons/fa";

const BufferPostUI = () => {
  const [activePlatform, setActivePlatform] = useState("facebook");
  const [showModal, setShowModal] = useState(false);

  const handlePlatformClick = (platform) => {
    setActivePlatform(platform);
    setShowModal(true);
  };

  const renderPreview = () => {
    switch (activePlatform) {
      case "linkedin":
        return (
            <div className="border rounded-4 bg-white p-3 shadow-sm" style={{ maxWidth: "500px" }}>
              <div className="d-flex align-items-center mb-2">
                <Image
                  src="/user-placeholder.png"
                  roundedCircle
                  width="40"
                  height="40"
                  className="me-2"
                />
                <div>
                  <strong>Reham Ashraf</strong>
                  <div className="text-muted small">Post to Anyone</div>
                </div>
              </div>
        
              <Form>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="What do you want to talk about?"
                  className="border-0 shadow-none mb-3"
                  style={{ resize: "none", fontSize: "1.1rem" }}
                />
                
                <div className="d-flex justify-content-between align-items-center pt-2 border-top">
                  <div className="d-flex gap-3 mt-2 text-muted">
                    <FaSmile />
                    <FaCalendarAlt />
                    <FaCog />
                    <FaPlus />
                  </div>
                  <Button className="btn-sm mt-2" disabled>
                    <FaClock className="me-1" />
                    Post
                  </Button>
                </div>
              </Form>
            </div>
          );
      case "facebook":
        return (
          <div className="facebook-preview p-3 border rounded-3 bg-white">
            <div className="d-flex align-items-center mb-2">
              <div className="rounded-circle bg-primary" style={{ width: 48, height: 48 }}></div>
              <div className="ms-2">
                <div className="fw-bold">John Doe</div>
                <small className="text-muted">Public Post</small>
              </div>
            </div>
            <div className="text-muted">What's on your mind?</div>
            <div className="mt-3 p-3 border rounded text-center text-muted bg-light" style={{ fontSize: '0.9rem' }}>
              <span>Facebook post preview area</span>
            </div>
          </div>
        );
      case "tiktok":
        return (
          <div className="tiktok-preview p-3 border rounded-3 bg-white">
            <div className="d-flex align-items-center mb-2">
              <div className="rounded-circle bg-success" style={{ width: 48, height: 48 }}></div>
              <div className="ms-2">
                <div className="fw-bold">John Doe</div>
                <small className="text-muted">Video Post</small>
              </div>
            </div>
            <div className="text-muted">Upload your video</div>
            <div className="mt-3 p-3 border rounded text-center text-muted bg-light" style={{ fontSize: '0.9rem' }}>
              <span>TikTok video preview area</span>
            </div>
          </div>
        );
      // Add other platforms as needed (Instagram, Twitter, etc.)
      default:
        return <div className="text-muted text-center mt-4">See your post's preview here</div>;
    }
  };

  const renderModalContent = () => {
    switch (activePlatform) {
      case "facebook":
        return (
          <Form>
            <Card.Title className="fw-bold fs-4 mb-3">Create Facebook Post</Card.Title>
            <div className="d-flex gap-3 mb-3">
              <Form.Check type="radio" label="Post" name="postType" defaultChecked />
              <Form.Check type="radio" label="Reel" name="postType" />
              <Form.Check type="radio" label="Story" name="postType" />
            </div>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Write your Facebook post..."
              className="mb-3 shadow-sm rounded-3"
            />
            <div className="mb-3">
              <div className="border border-dashed p-3 rounded-3 text-center bg-light-subtle">
                <Form.Label className="text-muted mb-0">
                  Drag & drop or <a href="#">select a file</a>
                </Form.Label>
                <Form.Control type="file" hidden />
              </div>
            </div>
            <Button className="mt-4 w-100 btn btn-primary rounded-3 shadow">
              Post to Facebook
            </Button>
          </Form>
        );

        case "linkedin":
            return (
              <Form>
                <Card.Title className="fw-bold fs-4 mb-3">Create LinkedIn Post</Card.Title>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Write your LinkedIn post..."
                  className="mb-3 shadow-sm rounded-3"
                />
                <Button className="mt-4 w-100 btn btn-primary rounded-3 shadow">
                  Post to LinkedIn
                </Button>
              </Form>
            );

      case "tiktok":
        return (
            <Form className="p-4 border rounded-4 bg-white shadow-sm">
            <Card.Title className="fw-bold fs-4 mb-4">Create TikTok Video Post</Card.Title>
      
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Write your TikTok caption..."
              className="mb-4 shadow-sm rounded-3"
            />
      
            <div className="mb-4">
              <div
                className="d-flex flex-column align-items-center justify-content-center p-5 border border-2 border-dashed rounded-3 text-center bg-light"
                style={{ height: "250px", cursor: "pointer" }}
                onClick={() => document.getElementById("videoUpload").click()}
              >
                <img
                  src="/upload-icon.svg"
                  alt="upload icon"
                  style={{ width: "48px", marginBottom: "10px" }}
                />
                <strong className="mb-2">Select video to upload</strong>
                <span className="text-muted">Or drag and drop it here</span>
                <Form.Control type="file" hidden id="videoUpload" />
              </div>
            </div>
      
            <div className="text-muted small mb-4">
              <div>📦 Maximum size: 30 GB, duration: 60 mins</div>
              <div>🎞️ Formats: .mp4 (recommended)</div>
              <div>📺 Resolutions: 1080p, 1440p, 4K</div>
              <div>📐 Aspect ratios: 16:9 (landscape), 9:16 (vertical)</div>
            </div>
      
            <div className="d-flex gap-3 align-items-center text-secondary mb-3">
              <FaHashtag className="fs-5" />
              <PiMagicWandFill className="fs-5" />
              <span className="ms-auto text-muted small">AI Assistant</span>
            </div>
      
            <Button className="w-100 btn btn-primary rounded-3 shadow">
              Post to TikTok
            </Button>
          </Form>
        );
      // Add other platform-specific forms as needed
      default:
        return <div>Choose a platform to create a post.</div>;
    }
  };

  return (
    <Container fluid className="p-4 bg-light min-vh-100">
      <Row className="g-4">
        <Col md={3}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-3 rounded shadow border-0">
              <h5 className="fw-bold mb-3">Channels</h5>
              <Nav className="flex-column">
                <Nav.Link href="#">All Channels</Nav.Link>
                <Nav.Link href="#" onClick={() => handlePlatformClick("facebook")}>Connect Facebook</Nav.Link>
                <Nav.Link href="#" onClick={() => handlePlatformClick("instagram")}>Connect Instagram</Nav.Link>
                <Nav.Link href="#" onClick={() => handlePlatformClick("twitter")}>Connect Twitter</Nav.Link>
                <Nav.Link href="#" onClick={() => handlePlatformClick("tiktok")}>Connect TikTok</Nav.Link>
                <Nav.Link href="#">Show more channels</Nav.Link>
              </Nav>
            </Card>
          </motion.div>
        </Col>

        <Col md={6}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-4 shadow rounded-4 border-0 bg-white animate__animated animate__fadeIn">
              <Card.Title className="fw-bold fs-4 mb-3">Choose Platform</Card.Title>
              <Nav
                variant="tabs"
                activeKey={activePlatform}
                onSelect={(selectedKey) => handlePlatformClick(selectedKey)}
                className="mb-3 justify-content-around"
              >
                <Nav.Item><Nav.Link eventKey="facebook"><FaFacebookF /></Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="instagram"><FaInstagram /></Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="linkedin"><FaLinkedinIn /></Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="tiktok"><FaTiktok /></Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="youtube"><FaYoutube /></Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="twitter"><FaTwitter /></Nav.Link></Nav.Item>
              </Nav>
            </Card>
          </motion.div>
        </Col>

        <Col md={3}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="p-4 shadow rounded-4 border-0">
              <Card.Title className="fw-bold fs-5 text-capitalize">{activePlatform} Preview</Card.Title>
              {renderPreview()}
            </Card>
          </motion.div>
        </Col>
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Create {activePlatform.charAt(0).toUpperCase() + activePlatform.slice(1)} Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>{renderModalContent()}</Modal.Body>
      </Modal>
    </Container>
  );
};

export default BufferPostUI;
