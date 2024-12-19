import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const floatUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledSection = styled.section`
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.6s ease-out;

  &.visible {
    opacity: 1;

    transform: translateY(0);
    animation: ${floatUp} 0.6s ease-out;
  }
`;

const AnimatedSection = ({ children, className, ...props }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = sectionRef.current;
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <StyledSection
      ref={sectionRef}
      className={`${className} ${isVisible ? 'visible' : ''}`}
      {...props}
    >
      {children}
    </StyledSection>
  );
};

export default AnimatedSection;
