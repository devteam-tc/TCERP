import { menuData } from '../../menuData';
import MenuItem from './MenuItem';
import CalendlyWidget from './CalendlyWidget'; // Import the CalendlyWidget component

const MegaMenu = ({ handleToggle, clicked, setIsDrawerOpen }) => {
  const { openCalendlyWidget } = CalendlyWidget(); // Ensure CalendlyWidget returns this function

  const handleMenuClick = (isDemo) => {
    if (isDemo && openCalendlyWidget) {
      openCalendlyWidget(); // Open Calendly when the demo item is clicked
    }
  };

  return (
    <div className="nav__container">
      <nav>
        <ul>
          {menuData.map(({ label, href, children, isDemo }, index) => (
            <MenuItem
              key={index}
              {...{
                label,
                href,
                children,
                setIsDrawerOpen,
                isDemo,
              }}
              onToggle={() => handleToggle && handleToggle(index)}
              active={clicked === index}
              onMenuClick={() => handleMenuClick(isDemo)} // Ensure this is passed down correctly
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MegaMenu;
