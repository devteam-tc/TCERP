import { NavLink } from 'react-router-dom';
import Container from './Container';
import DropdownContent from './DropdownContent';
import { FiPlus , FiMinus  } from 'react-icons/fi'; // Import FiPlus icon

const MenuItem = ({
  label,
  href,
  children,
  onToggle,
  active,
  setIsDrawerOpen,
  onMenuClick,
}) => {
  const handleClick = () => {
    const activeElement = document.activeElement;
    activeElement.blur();
  };

  const handleItemClick = () => {
    onMenuClick && onMenuClick();
    handleClick();
    setIsDrawerOpen && setIsDrawerOpen(false);
  };

  return (
    <li>
      <div className="nav_item_content">
        <NavLink
          to={href}
          className={({ isActive }) => (isActive ? 'active' : '')}
          onClick={(e) => {
            handleItemClick(e); // Call the first function
            window.scrollTo(0, 0); // Call the scroll functionality
          }}
        >
          <div>{label}</div>
        </NavLink>
        {children && (
          <button
            className="md:hidden"
            onClick={onToggle}
            aria-label="Toggle dropdown"
            aria-haspopup="menu"
            aria-expanded={active ? 'true' : 'false'}
          >
            {/* Use FiPlus for mobile and ChevronDown for desktop */}
            {active ? (
              <FiMinus size={20} className="mobile-only" />
            ) : (
              <FiPlus  size={20} className="desktop-only" />
            )}
          </button>
        )}
      </div>
      {children && (
        <div
          role="menu"
          className={`dropdown ${active ? 'h-auto' : 'h-0 overflow-hidden md:h-auto'}`}
        >
          <Container>
            <DropdownContent
              submenuscontent={children}
              setIsDrawerOpen={setIsDrawerOpen}
              handleClick={handleClick}
              parentLabel={label}
            />
          </Container>
        </div>
      )}
    </li>
  );
};

export default MenuItem;
