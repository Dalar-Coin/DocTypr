import React, { useEffect, useState } from 'react';

const FadeTransition = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to ensure the fade in animation plays
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
      }}
    >
      {children}
    </div>
  );
};

export default FadeTransition;