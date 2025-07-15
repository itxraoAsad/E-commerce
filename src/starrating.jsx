import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa'; // install with: npm install react-icons

function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => {
        const current = index + 1;
        return (
          <button
            key={current}
            type="button"
            onClick={() => setRating(current)}
            onMouseEnter={() => setHover(current)}
            onMouseLeave={() => setHover(0)}
          >
            <FaStar
              size={24}
              className={
                current <= (hover || rating)
                  ? 'text-yellow-400'
                  : 'text-gray-300'
              }
            />
          </button>
        );
      })}
    </div>
  );
}

export default StarRating;
