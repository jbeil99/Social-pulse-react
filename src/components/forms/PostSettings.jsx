import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import '../../styles/PostSettings.css';

const PostSettings = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Autos & Vehicles');
  const [visibility, setVisibility] = useState('Public');
  const [license, setLicense] = useState('Standard YouTube License');
  const [notifySubscribers, setNotifySubscribers] = useState(true);
  const [allowEmbedding, setAllowEmbedding] = useState(true);
  const [madeForKids, setMadeForKids] = useState(false);

  return (
    <div className="post-settings mt-4">
      <Form>
        <Form.Group className="mb-3 ">
          <Form.Label>Title</Form.Label>
          <Form.Control 
            type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Autos & Vehicles</option>
                <option>Entertainment</option>
                <option>Music</option>
                <option>Sports</option>
                <option>Travel & Events</option>
                <option>Gaming</option>
                <option>People & Blogs</option>
                <option>Comedy</option>
                <option>News & Politics</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Visibility</Form.Label>
              <Form.Select 
                value={visibility}
                onChange={(e) => setVisibility(e.target.value)}
              >
                <option>Public</option>
                <option>Unlisted</option>
                <option>Private</option>
                <option>Scheduled</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>License</Form.Label>
          <Form.Select 
            value={license}
            onChange={(e) => setLicense(e.target.value)}
          >
            <option>Standard YouTube License</option>
            <option>Creative Commons - Attribution</option>
          </Form.Select>
        </Form.Group>

        <Row className="mb-3">
          <Col md={4}>
            <Form.Check 
              type="checkbox"
              id="notifySubscribers"
              label="Notify Subscribers"
              checked={notifySubscribers}
              onChange={(e) => setNotifySubscribers(e.target.checked)}
            />
          </Col>
          <Col md={4}>
            <Form.Check 
              type="checkbox"
              id="allowEmbedding"
              label="Allow Embedding"
              checked={allowEmbedding}
              onChange={(e) => setAllowEmbedding(e.target.checked)}
            />
          </Col>
          <Col md={4}>
            <Form.Check 
              type="checkbox"
              id="madeForKids"
              label="Made for Kids"
              checked={madeForKids}
              onChange={(e) => setMadeForKids(e.target.checked)}
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default PostSettings;
