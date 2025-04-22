import React from 'react';
import SocialMediaSelector from './SocialMediaSelector';
import ContentEditor from './ContentEditor';
import PostSettings from './PostSettings';
import PreviewPanel from './PreviewPanel';
import '../../styles/YouTubeShortCreator.css';

const YouTubeShortCreator = () => {
  return (
    <div className="youtube-grid-container py-4 px-3">
      
      <div className="create-post-panel">
        <div className="creator-card shadow-sm card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2 className="m-0">Create Post</h2>
              <div className="add-tags-btn">
                <button className="btn btn-outline-secondary">
                  Add Tags <span className="ms-1">▼</span>
                </button>
              </div>
            </div>

            <SocialMediaSelector />
            <ContentEditor />
            <PostSettings />

            <div className="d-flex justify-content-end mt-4">
              <button className="btn btn-primary connect-youtube-btn">
                Connect YouTube to Post
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel: Preview */}
      <div className="preview-panel-wrapper">
        <PreviewPanel />
      </div>
    </div>
  );
};

export default YouTubeShortCreator;
