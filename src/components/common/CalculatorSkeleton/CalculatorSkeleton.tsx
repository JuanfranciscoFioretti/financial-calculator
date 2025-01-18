import React from 'react';
import Skeleton from '../Skeleton/Skeleton';

const CalculatorSkeleton = () => {
  return (
    <div className="p-4">
      <Skeleton height={40} className="mb-4" /> {/* Title */}
      <div className="space-y-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton width={120} height={20} /> {/* Label */}
            <Skeleton height={40} /> {/* Input */}
          </div>
        ))}
        <Skeleton height={48} width={200} /> {/* Button */}
      </div>
    </div>
  );
};

export default CalculatorSkeleton;