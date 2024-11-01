import React, { useState, useEffect } from 'react';
import { BsArrowUp } from 'react-icons/bs'; // Using React Icons for the up arrow

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when the user scrolls down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <div style={styles.scrollButton} onClick={scrollToTop}>
          <BsArrowUp style={styles.arrowIcon} />
        </div>
      )}
    </div>
  );
};

const styles = {
  scrollButton: {
    position: 'fixed',
    bottom: '90px',
    right: '30px',
    backgroundColor: '#EF5226', 
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    padding: '10px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
    animation: 'bounce 2s infinite', 
  },
  arrowIcon: {
    fontSize: '24px',
  },
};

// Keyframes are added as a <style> element in the component
const bounceAnimation = `
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px); /* Move up */
    }
    60% {
      transform: translateY(-5px); /* Smaller move up */
    }
  }
`;

// Inject the keyframes as a <style> tag in the DOM
const styleElement = document.createElement('style');
styleElement.innerHTML = bounceAnimation;
document.head.appendChild(styleElement);

export default ScrollToTopButton;