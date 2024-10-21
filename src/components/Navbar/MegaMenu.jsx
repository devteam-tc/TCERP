import { menuData } from '../../menuData';
import MenuItem from './MenuItem';
import CalendlyWidget from './CalendlyWidget'; // Import the CalendlyWidget component

const MegaMenu = ({ handleToggle, clicked, setIsDrawerOpen }) => {
  const { openCalendlyWidget } = CalendlyWidget(); // Call CalendlyWidget to get the function

  const handleMenuClick = (isDemo) => {
    if (isDemo) {
      openCalendlyWidget(); // Open Calendly when the demo item is clicked
    }
  };

  return (
    <div className="nav__container">
      <nav>
        <ul>
          {menuData.map(({ label, href, children, isDemo }, index) => {
            return (
              <MenuItem
                key={index}
                {...{
                  label,
                  href,
                  children,
                  setIsDrawerOpen,
                  isDemo, // Pass isDemo flag
                }}
                onToggle={() => handleToggle && handleToggle(index)}
                active={clicked === index}
                onMenuClick={() => handleMenuClick(isDemo)} // Add this line
              />
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default MegaMenu;
