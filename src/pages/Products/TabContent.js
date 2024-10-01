import React from 'react';
import styled from 'styled-components';

const StyledTabContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
`;

const TabContent = ({ content, image, alt }) => {
  const contentArray = Array.isArray(content) ? content : [];

  return (
    <StyledTabContent>
      <div className="row">
        <div className="col-12 col-lg-6 mb-4">
          {contentArray.map((item, index) => (
            <div key={index} className="mb-4">
              <div className="w-100">
                <p className="fw-semibold">
                  <span className="fw-bold">{item.title}</span> {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-center">
          <img
            src={image || '/default-image.png'}
            alt={alt || "Default alt text"}
            className="rounded-md img-fluid"
          />
        </div>
      </div>
    </StyledTabContent>
  );
};

export default TabContent;
