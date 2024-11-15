import React, { useEffect } from 'react';
import useCalendlyWidget from './CalendlyWidget'; // Adjust path if needed

const DemoPage = () => {
  const openCalendlyWidget = useCalendlyWidget('https://calendly.com/dvignesh-techclouderp/demo');

  useEffect(() => {
    if (openCalendlyWidget) {
      openCalendlyWidget(); // Open Calendly popup on component mount
    }
  }, [openCalendlyWidget]);

  return null; // No UI needed, as the popup opens directly
};

export default DemoPage;
