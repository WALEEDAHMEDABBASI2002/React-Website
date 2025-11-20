import React, { useState } from "react";

export const Image = ({ title, largeImage, smallImage }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className="portfolio-item">
        <div className="hover-bg" onClick={openModal} style={{ cursor: 'pointer' }}>
          <div className="hover-text">
            <h4>{title}</h4>
          </div>
          <img
            src={smallImage}
            className="img-responsive"
            alt={title}
            loading="lazy"
            decoding="async"
            width="600"
            height="400"
          />
        </div>
      </div>

      {/* Simple Modal for Large Image */}
      {showModal && (
        <div 
          className="image-modal" 
          onClick={closeModal}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            cursor: 'pointer',
            padding: '20px'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '92vw',
              maxHeight: '90vh',
              position: 'relative',
              overflow: 'auto',
              borderRadius: '8px'
            }}
          >
            <img
              src={largeImage}
              alt={title}
              style={{
                display: 'block',
                maxWidth: '100%',
                maxHeight: '85vh',
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                margin: '0 auto'
              }}
            />
            <button
              onClick={closeModal}
              aria-label="Close"
              style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                background: 'rgba(255,255,255,0.9)',
                color: '#000',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                cursor: 'pointer',
                fontSize: '18px',
                lineHeight: '32px'
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};
