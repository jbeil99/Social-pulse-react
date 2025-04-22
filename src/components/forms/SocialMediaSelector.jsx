import React, { useState } from 'react';
import { 
  Twitter, Facebook, Instagram, Linkedin, 
  Music, Youtube, MessageCircle, CircleDashed
} from 'lucide-react';
import '../../styles/SocialMediaSelector.css';

const SocialMediaSelector = () => {
  const [activeIcon, setActiveIcon] = useState('youtube');

  const handleIconClick = (icon) => {
    setActiveIcon(icon);
  };

  return (
    <div className="social-media-selector mb-3">
      <div className="platform-icons">
        <button 
          className={`platform-icon ${activeIcon === 'twitter' ? 'active' : ''}`}
          onClick={() => handleIconClick('twitter')}
        >
          <Twitter size={20} />
        </button>
        <button 
          className={`platform-icon ${activeIcon === 'facebook' ? 'active' : ''}`}
          onClick={() => handleIconClick('facebook')}
        >
          <Facebook size={20} />
        </button>
        <button 
          className={`platform-icon ${activeIcon === 'instagram' ? 'active' : ''}`}
          onClick={() => handleIconClick('instagram')}
        >
          <Instagram size={20} />
        </button>
        <button 
          className={`platform-icon ${activeIcon === 'linkedin' ? 'active' : ''}`}
          onClick={() => handleIconClick('linkedin')}
        >
          <Linkedin size={20} />
        </button>
        <button 
          className={`platform-icon ${activeIcon === 'tiktok' ? 'active' : ''}`}
          onClick={() => handleIconClick('tiktok')}
        >
          <Music size={20} />
        </button>
        <button 
          className={`platform-icon ${activeIcon === 'mastodon' ? 'active' : ''}`}
          onClick={() => handleIconClick('mastodon')}
        >
          <MessageCircle size={20} />
        </button>
        <button 
          className={`platform-icon ${activeIcon === 'youtube' ? 'active' : ''}`}
          onClick={() => handleIconClick('youtube')}
        >
          <Youtube size={20} className="youtube-icon" />
        </button>
        <button 
          className={`platform-icon ${activeIcon === 'threads' ? 'active' : ''}`}
          onClick={() => handleIconClick('threads')}
        >
          <CircleDashed size={20} />
        </button>
      </div>
      
      <div className="content-type-selector mt-3">
        <div className="d-flex align-items-center">
          <div className="youtube-icon-small me-2">
            <Youtube size={16} color="red" />
          </div>
          <div className="form-check">
            <input 
              className="form-check-input" 
              type="radio" 
              name="contentType" 
              id="shortRadio" 
              defaultChecked
            />
            <label className="form-check-label" htmlFor="shortRadio">
              Short
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaSelector;
