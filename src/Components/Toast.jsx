import React, { useEffect } from 'react';
import './Toast.css';

function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="toast">
      <div className="toast-content">
        {message}
      </div>
    </div>
  );
}

export default Toast;
