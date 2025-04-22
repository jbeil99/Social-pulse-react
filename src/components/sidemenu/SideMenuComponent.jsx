import React, { useState } from 'react';
import { ListCollapse, Facebook, Instagram, Twitter, Tags, Settings, ChevronDown, Grid } from 'lucide-react';
import './SideMenuStyles.css';

const SideMenuComponent = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="side-menu bg-light p-4 border-end h-100">
      <h6 className="text-uppercase text-muted mb-4 d-flex align-items-center">
        Channels
        <button className="btn btn-link btn-sm ms-auto p-0 text-decoration-none">
          <ListCollapse size={16} />
        </button>
      </h6>

      <div className="channel-list">
        <a href="#all-channels" className="channel-item active">
          <Grid size={20} />
          <span>All Channels</span>
        </a>

        <a href="#facebook" className="channel-item">
          <Facebook size={20} />
          <span>Connect Facebook</span>
        </a>

        <a href="#instagram" className="channel-item">
          <Instagram size={20} />
          <span>Connect Instagram</span>
        </a>

        <a href="#twitter" className="channel-item">
          <Twitter size={20} />
          <span>Connect Twitter / X</span>
        </a>

        {showMore && (
          <>
            <a href="#linkedin" className="channel-item">
              <img src="https://cdn.simpleicons.org/linkedin" alt="LinkedIn" width="20" height="20" />
              <span>Connect LinkedIn</span>
            </a>

            <a href="#youtube" className="channel-item">
              <img src="https://cdn.simpleicons.org/youtube" alt="YouTube" width="20" height="20" />
              <span>Connect YouTube</span>
            </a>

            <a href="#tiktok" className="channel-item">
              <img src="https://cdn.simpleicons.org/tiktok" alt="TikTok" width="20" height="20" />
              <span>Connect TikTok</span>
            </a>
          </>
        )}

        <button 
          className="channel-item text-primary border-0 bg-transparent w-100 text-start"
          onClick={toggleShowMore}
        >
          <ChevronDown size={20} className={`transition-transform ${showMore ? 'rotate-180' : ''}`} />
          <span>{showMore ? 'Show less channels' : 'Show more channels'}</span>
        </button>
      </div>

      <div className="management-options mt-4">
        <h6 className="text-uppercase text-muted mb-3">Management</h6>
        
        <a href="#tags" className="channel-item">
          <Tags size={20} />
          <span>Manage Tags</span>
        </a>

        <a href="#channels" className="channel-item">
          <Settings size={20} />
          <span>Manage Channels</span>
        </a>
      </div>
    </div>
  );
};

export default SideMenuComponent;
