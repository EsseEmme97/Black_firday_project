import { FaRegStar, FaStar } from "react-icons/fa";
import { useState } from "react";

export default function RatingStar({ stars = 5, value = 0, readonly = false, onRate, className }) {
  const [hoverIndex, setHoverIndex] = useState(null); 
  const [selectedIndex, setSelectedIndex] = useState(value); 

  const handleMouseEnter = (index) => {
    if (!readonly) {
      setHoverIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (!readonly) {
      setHoverIndex(null);
    }
  };

  const handleClick = (index) => {
    if (!readonly) {
      setSelectedIndex(index);
      if (onRate) onRate(index); 
    }
  };

  return (
    <div className={`flex ${className}`}>
      {[...Array(stars)].map((_, index) => {
        const isFilled = hoverIndex !== null ? index < hoverIndex : index < selectedIndex;

        return (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(index + 1)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index + 1)}
            style={{ cursor: readonly ? "default" : "pointer" }}
          >
            {isFilled ? (
              <FaStar color="gold" size={24} />
            ) : (
              <FaRegStar color="gray" size={24} />
            )}
          </div>
        );
      })}
    </div>
  );
}
