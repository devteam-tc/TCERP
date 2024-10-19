import React from 'react';
import { Link } from 'react-router-dom';

const DropdownContent = ({
  submenuscontent,
  setIsDrawerOpen,
  handleClick,
  parentLabel,
}) => {
  const isIndustries = parentLabel === 'Industries';

  return (
    <div className={`dropdown_content ${isIndustries ? 'industries_grid' : ''}`}>
      {submenuscontent.map((item, index) => (
        <React.Fragment key={index}>
          <section>
            <h6>{item.heading}</h6>
            {isIndustries && <hr />}
            <ul>
              {item.submenu.map(({ label, href }, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setIsDrawerOpen && setIsDrawerOpen(false);
                    handleClick();
                  }}
                >
                  <Link to={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </section>
        </React.Fragment>
      ))}
      
    </div>
  );
};

export default DropdownContent;
