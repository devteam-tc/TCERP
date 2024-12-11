import React, { useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const StyledColumn = styled.div`
  opacity: 0;
  transform: translateX(${(props) => (props.direction === 'left' ? '-50px' : '50px')});
  transition: all 0.2s ease-out;

  ${(props) =>
    props.isVisible &&
    css`
      opacity: 1;
      transform: translateX(0);
      animation: ${(props) => (props.direction === 'left' ? slideInLeft : slideInRight)} 0.6s ease-out;
    `}
`;

const AnimatedColumn = ({ direction = 'left', children, ...props }) => {
  const ref = useRef(null);
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

    const element = ref.current;
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <StyledColumn ref={ref} direction={direction} isVisible={isVisible} {...props}>
      {children}
    </StyledColumn>
  );
};

export default AnimatedColumn;
