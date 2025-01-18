import React from 'react';
import './Skeleton.css';

const SidebarSkeleton = () => {
  return (
    <div className="sidebar-skeleton">
      <div className="sidebar-skeleton-header">
        <div className="skeleton-title skeleton-pulse" />
        <div className="skeleton-subtitle skeleton-pulse" />
      </div>
      
      <div className="skeleton-nav">
        {[...Array(9)].map((_, index) => (
          <div key={index} className="skeleton-nav-item">
            <div className="skeleton-icon skeleton-pulse" />
            <div className="skeleton-text skeleton-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarSkeleton;