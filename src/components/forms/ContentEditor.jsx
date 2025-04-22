import React, { useState } from 'react';
import { 
  ImageIcon, Smile, Sparkles, Hash, 
  LayoutGrid, Clock 
} from 'lucide-react';
import '../../styles/ContentEditor.css';

const ContentEditor = () => {
  const [content, setContent] = useState('');
  const maxChars = 5000;

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <div className="content-editor mb-3">
      <div className="editor-area">
        <textarea 
          className="form-control editor-textarea" 
          placeholder="Start writing or ✨ Use the AI Assistant" 
          rows={6}
          value={content}
          onChange={handleContentChange}
        ></textarea>
        
        <div className="video-upload-area">
          <div className="upload-placeholder">
            <ImageIcon size={24} className="mb-2" />
            <p className="mb-1">Drag & drop</p>
            <p className="mb-0">or <a href="#" className="text-primary">select a video</a></p>
          </div>
        </div>
      </div>

      <div className="editor-toolbar d-flex justify-content-between align-items-center mt-2">
        <div className="toolbar-left d-flex">
          <button className="btn btn-sm toolbar-btn">
            <ImageIcon size={18} />
          </button>
          <button className="btn btn-sm toolbar-btn">
            <Smile size={18} />
          </button>
          <button className="btn btn-sm toolbar-btn sparkles-btn">
            <Sparkles size={18} />
          </button>
          <button className="btn btn-sm toolbar-btn">
            <Hash size={18} />
          </button>
          <button className="btn btn-sm toolbar-btn">
            <LayoutGrid size={18} />
          </button>
          <button className="btn btn-sm ai-assistant-btn">
            <Clock size={18} className="me-1" /> AI Assistant
          </button>
        </div>
        <div className="toolbar-right">
          <span className="char-counter">{content.length}/{maxChars}</span>
        </div>
      </div>

      <div className="automatic-settings d-flex justify-content-end mt-2">
        <button className="btn btn-sm btn-light">
          <Sparkles size={16} className="me-1" /> Automatic <span className="ms-1">▼</span>
        </button>
      </div>
    </div>
  );
};

export default ContentEditor;
