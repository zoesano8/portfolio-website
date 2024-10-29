// src/layouts/MinimalLayout.js
import React from 'react';

const MinimalLayout = ({ children }) => {
  return (
    <div className="minimal-layout">
      {children} {/* Only render the children */}
    </div>
  );
};

export default MinimalLayout;
