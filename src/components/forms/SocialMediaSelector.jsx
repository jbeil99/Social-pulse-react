import React, { useState } from 'react';
import { 
  Twitter, Facebook, Instagram, Linkedin, 
  Music, Youtube, MessageCircle, CircleDashed 
} from 'lucide-react';
import '../../styles/SocialMediaSelector.css';

const SocialMediaSelector = () => {
  const [activeIcons, setActiveIcons] = useState([]);
  const [expandedIcon, setExpandedIcon] = useState(null); // State to track expanded content

  const handleIconClick = (icon) => {
    setActiveIcons((prev) =>
      prev.includes(icon) ? prev.filter((i) => i !== icon) : [...prev, icon]
    );
  };

  const handlePlatformNameClick = (icon) => {
    setExpandedIcon((prev) => (prev === icon ? null : icon)); // Toggle visibility of content
  };

  const renderInputFields = (icon) => {
    return (
      <div key={icon} className="social-media-input mb-4 p-3 border rounded">
        <div className="d-flex align-items-center mb-3">
          <div className="icon me-2">
            {icon === 'twitter' && <Twitter size={20} />}
            {icon === 'facebook' && <Facebook size={20} />}
            {icon === 'instagram' && <Instagram size={20} />}
            {icon === 'linkedin' && <Linkedin size={20} />}
            {icon === 'tiktok' && <Music size={20} />}
            {icon === 'youtube' && <Youtube size={20} />}
            {icon === 'mastodon' && <MessageCircle size={20} />}
            {icon === 'threads' && <CircleDashed size={20} />}
          </div>
          {/* Clickable platform name */}
          <span
            className="platform-name text-capitalize fw-bold"
            onClick={() => handlePlatformNameClick(icon)} // Toggle content on click
            style={{ cursor: 'pointer' }}
          >
            {icon}
          </span>
        </div>

        {/* Conditionally Render Additional Sections */}
        {expandedIcon === icon && (
          <>
            {/* Textarea for writing */}
            <textarea
              className="form-control mb-3"
              placeholder={`Start writing for ${icon}...`}
              rows={3}
            ></textarea>

            {/* Drag and Drop Section */}
            <div className="drag-drop-section text-center mb-3 p-3 border rounded bg-light">
              <p className="mb-1">Drag & drop or <span className="text-primary">select a file</span></p>
            </div>

            {/* Additional Options */}
            <div className="additional-options d-flex justify-content-between align-items-center">
              <div className="left-options d-flex gap-2">
                <button className="btn btn-light btn-sm">📷</button>
                <button className="btn btn-light btn-sm">😊</button>
                <button className="btn btn-light btn-sm">#</button>
              </div>
              <div className="right-options">
                <span className="text-muted">0/5000</span>
              </div>
            </div>

            {/* Title and Category Section */}
            <div className="mt-3">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Title"
              />
              <div className="d-flex gap-2">
                <select className="form-select">
                  <option value="category">Category</option>
                  <option value="autos">Autos & Vehicles</option>
                  <option value="education">Education</option>
                </select>
                <select className="form-select">
                  <option value="visibility">Visibility</option>
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                </select>
              </div>
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="social-media-selector">
      {/* Social Media Icons */}
      <div className="platform-icons mb-3">
        <button
          className={`platform-icon ${activeIcons.includes('facebook') ? 'active' : ''}`}
          onClick={() => handleIconClick('facebook')}
        >
          <Facebook size={20} />
        </button>
        <button
          className={`platform-icon ${activeIcons.includes('twitter') ? 'active' : ''}`}
          onClick={() => handleIconClick('twitter')}
        >
          <Twitter size={20} />
        </button>
        <button
          className={`platform-icon ${activeIcons.includes('instagram') ? 'active' : ''}`}
          onClick={() => handleIconClick('instagram')}
        >
          <Instagram size={20} />
        </button>
        <button
          className={`platform-icon ${activeIcons.includes('linkedin') ? 'active' : ''}`}
          onClick={() => handleIconClick('linkedin')}
        >
          <Linkedin size={20} />
        </button>
        <button
          className={`platform-icon ${activeIcons.includes('tiktok') ? 'active' : ''}`}
          onClick={() => handleIconClick('tiktok')}
        >
          <Music size={20} />
        </button>
        <button
          className={`platform-icon ${activeIcons.includes('youtube') ? 'active' : ''}`}
          onClick={() => handleIconClick('youtube')}
        >
          <Youtube size={20} />
        </button>
        <button
          className={`platform-icon ${activeIcons.includes('mastodon') ? 'active' : ''}`}
          onClick={() => handleIconClick('mastodon')}
        >
          <MessageCircle size={20} />
        </button>
        <button
          className={`platform-icon ${activeIcons.includes('threads') ? 'active' : ''}`}
          onClick={() => handleIconClick('threads')}
        >
          <CircleDashed size={20} />
        </button>
      </div>

      {/* Dynamic Input Fields */}
      <div className="social-media-inputs">
        {activeIcons.map((icon) => renderInputFields(icon))}
      </div>
    </div>
  );
};

export default SocialMediaSelector;