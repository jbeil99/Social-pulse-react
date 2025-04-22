import React, { useState, useEffect } from 'react';
import { ListCollapse, Facebook, Instagram, Twitter, Tags, Settings, ChevronDown, Grid } from 'lucide-react';
import './SideMenuStyles.css';

const SideMenuComponent = () => {
  const [showMore, setShowMore] = useState(false);
  const [fbProfile, setFbProfile] = useState(null);
  const [showPostModal, setShowPostModal] = useState(false);
  const [postText, setPostText] = useState("");
  const [postImage, setPostImage] = useState(null);
  const [postImageUrl, setPostImageUrl] = useState("");
  const [showRemoveConfirm, setShowRemoveConfirm] = useState(false);
  const [postStatus, setPostStatus] = useState("");
  const [fbPages, setFbPages] = useState([]);
  const [selectedPage, setSelectedPage] = useState(null);

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (!selectedPage) {
      setPostStatus('Please select a page to post to.');
      return;
    }
    setPostStatus('Posting...');
    const formData = new FormData();
    formData.append('text', postText);
    formData.append('page_id', selectedPage.id);
    if (postImage) {
      formData.append('image', postImage);
    }
    try {
      const resp = await fetch('http://localhost:8000/facebook/post/', {
      credentials: 'include',
        method: 'POST',
        body: formData,
      });
      const data = await resp.json();
      if (data.success) {
        setPostStatus('Post sent successfully!');
        setPostText('');
        setPostImage(null);
        setSelectedPage(null);
        setTimeout(() => {
          setShowPostModal(false);
          setPostStatus('');
        }, 2000);
      } else {
        setPostStatus(data.error || 'Failed to post.');
      }
    } catch (err) {
      setPostStatus('Error posting.');
    }
  };


  const handleRemoveAccount = () => {
    fetch('http://localhost:8000/facebook/disconnect/', {
      credentials: 'include',
      method: 'POST',
      credentials: 'include',
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setFbProfile(null);
        }
        setShowRemoveConfirm(false);
      })
      .catch(() => setShowRemoveConfirm(false));
  };



  useEffect(() => {
    fetch('http://localhost:8000/facebook/profile/', {
      credentials: 'include', credentials: 'include' })
      .then(async res => {
        try {
          if (!res.ok) return null;
          return await res.json();
        } catch (e) {
          return null;
        }
      })
      .then(data => {
        if (data && data.name) setFbProfile(data);
        else setFbProfile(null);
      })
      .catch(err => console.error('Error fetching profile:', err));

    fetch('http://localhost:8000/facebook/pages/', {
      credentials: 'include', credentials: 'include' })
      .then(async res => {
        try {
          if (!res.ok) return null;
          return await res.json();
        } catch (e) {
          return null;
        }
      })
      .then(data => {
        if (data && data.success) setFbPages(data.pages);
        else setFbPages([]);
      })
      .catch(err => setFbPages([]));

    const handleMsg = (e) => {
      if (e.data === 'facebook_connected') {
        fetch('http://localhost:8000/facebook/profile/', {
      credentials: 'include', credentials: 'include' })
          .then(async res => {
            try {
              if (!res.ok) return null;
              return await res.json();
            } catch (e) {
              return null;
            }
          })
          .then(data => {
            if (data && data.name) setFbProfile(data);
            else setFbProfile(null);
          });

          fetch('http://localhost:8000/facebook/pages/', {
      credentials: 'include', credentials: 'include' })
          .then(async res => {
            try {
              if (!res.ok) return null;
              return await res.json();
            } catch (e) {
              return null;
            }
          })
          .then(data => {
            if (data && data.success) setFbPages(data.pages);
            else setFbPages([]);
          })
          .catch(err => setFbPages([]));
      }
    };
    window.addEventListener('message', handleMsg);
    return () => window.removeEventListener('message', handleMsg);
  }, []);

  const handleFacebookConnect = () => {
    window.open(
      'http://localhost:8000/facebook/login/',
      'fbPopup',
      'width=600,height=700'
    );
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

        {fbProfile ? (
          <div style={{display:'flex',alignItems:'center',gap:8}}>
            <button className="channel-item" style={{background:'none',border:'none',padding:0,flex:1,display:'flex',alignItems:'center'}}>
              <Facebook size={20} />
              <span>{fbProfile.name}</span>
            </button>
            <button onClick={() => setShowRemoveConfirm(true)} style={{background:'none',border:'none',color:'#dc3545',marginLeft:4,fontSize:18,cursor:'pointer'}} title="Remove Account">×</button>

            <button onClick={() => setShowPostModal(true)} style={{marginLeft:8,background:'#2563eb',color:'#fff',border:'none',borderRadius:6,padding:'4px 14px',fontWeight:600,cursor:'pointer'}}>
              + New Post
            </button>
          </div>
        ) : (
          <button className="channel-item" onClick={handleFacebookConnect} style={{background:'none',border:'none',padding:0}}>
            <Facebook size={20} />
            <span>Connect Facebook</span>
          </button>
        )}
        
        {showRemoveConfirm && (
          <div className="modal-backdrop" style={{position:'fixed',top:0,left:0,right:0,bottom:0,background:'rgba(0,0,0,0.3)',zIndex:1001}}>
            <div className="modal-content" style={{background:'#fff',margin:'15% auto',padding:24,borderRadius:10,maxWidth:340,position:'relative',boxShadow:'0 4px 24px #0002'}}>
              <h5 style={{marginBottom:16}}>Remove Account Confirmation</h5>
              <p style={{marginBottom:24}}>Are you sure you want to remove this account from the app?</p>
              <div style={{display:'flex',justifyContent:'flex-end',gap:8}}>
                <button onClick={() => setShowRemoveConfirm(false)} style={{padding:'6px 18px',background:'#e0e0e0',border:'none',borderRadius:6}}>Cancel</button>
                <button onClick={handleRemoveAccount} style={{padding:'6px 18px',background:'#dc3545',color:'#fff',border:'none',borderRadius:6}}>Yes, Remove</button>
              </div>
            </div>
          </div>
        )}

        {showPostModal && (
          <div className="modal-backdrop" style={{position:'fixed',top:0,left:0,right:0,bottom:0,background:'rgba(0,0,0,0.3)',zIndex:1002}}>
            <div className="modal-content" style={{background:'#fff',margin:'3% auto',padding:24,borderRadius:10,maxWidth:520,position:'relative',boxShadow:'0 4px 24px #0002'}}>
              <h4 style={{marginBottom:18}}>Create Post</h4>
            
              <div style={{marginBottom:18}}>
                <label style={{display:'block',marginBottom:6,fontWeight:600}}>Choose a Page to Post:</label>
                <select
                  value={selectedPage ? selectedPage.id : ''}
                  onChange={e => {
                    const page = fbPages.find(pg => pg.id === e.target.value);
                    setSelectedPage(page);
                  }}
                  style={{width:'100%',padding:8,border:'1px solid #ccc',borderRadius:6,marginBottom:6}}
                >
                  <option value="">-- Select Page --</option>
                  {fbPages.map(pg => (
                    <option key={pg.id} value={pg.id}>
                      {pg.name}
                    </option>
                  ))}
                </select>
                
                {selectedPage && (
                  <div style={{display:'flex',alignItems:'center',gap:8,marginTop:4}}>
                    <img src={selectedPage.picture?.data?.url} alt="page" style={{width:32,height:32,borderRadius:'50%'}} />
                    <strong>{selectedPage.name}</strong>
                  </div>
                )}
              </div>
              <textarea value={postText} onChange={e => setPostText(e.target.value)} placeholder="Start writing..." style={{width:'100%',minHeight:90,marginBottom:12,padding:10,border:'1px solid #ccc',borderRadius:6}} />
              <div style={{marginBottom:12}}>
                <input type="file" accept="image/*" onChange={e => {
                  const file = e.target.files[0];
                  setPostImage(file);
                  if (file) {
                    const reader = new FileReader();
                    reader.onload = ev => setPostImageUrl(ev.target.result);
                    reader.readAsDataURL(file);
                  } else {
                    setPostImageUrl("");
                  }
                }} />
                {postImageUrl && <img src={postImageUrl} alt="preview" style={{maxWidth:'100%',maxHeight:120,marginTop:8,borderRadius:8}} />}
              </div>
              <div style={{display:'flex',justifyContent:'flex-end',gap:8}}>
                <button onClick={()=>setShowPostModal(false)} style={{padding:'7px 20px',background:'#e0e0e0',border:'none',borderRadius:6}}>Cancel</button>
                <button 
                  style={{padding:'7px 20px',background: (postText || postImage) ? '#2563eb' : '#aaa',color:'#fff',border:'none',borderRadius:6,fontWeight:600,cursor:(postText||postImage)?'pointer':'not-allowed'}}
                  disabled={!(postText || postImage)}
                  onClick={handlePostSubmit}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        )}


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
          onClick={() => setShowMore(!showMore)}
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
