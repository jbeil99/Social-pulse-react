import React from 'react';
import { Card } from 'react-bootstrap';
import { InfoIcon } from 'lucide-react';
import '../../styles/PreviewPanel.css';

const PreviewPanel = () => {
  return (
    <Card className="preview-panel shadow-sm h-100">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="m-0">YouTube Short Preview</h5>
          <InfoIcon size={18} className="text-muted" />
        </div>
        
        <div className="preview-placeholder">
          <div className="preview-header">
            <div className="preview-profile"></div>
            <div className="preview-lines">
              <div className="preview-line-short"></div>
              <div className="preview-line"></div>
            </div>
          </div>
          
          <div className="preview-content"></div>
          
          <p className="text-center text-muted mt-3">
            See your post's preview here
          </p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PreviewPanel;
