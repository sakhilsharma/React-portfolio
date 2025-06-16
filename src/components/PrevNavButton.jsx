import { motion } from 'framer-motion';
import { FiChevronLeft } from 'react-icons/fi';
import { useLocation, useNavigate } from 'react-router-dom';

const PrevNavButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Must match your Route paths exactly (same as NextNavButton)
  const navOrder = [
      '/',
    '/about',
    '/projects',
    '/experience',
    '/skills',
    '/contact'
  ];

  const handlePrevious = () => {
    const currentPath = location.pathname;
    const currentIndex = navOrder.indexOf(currentPath);
    
    // If current path not found, default to last item
    if (currentIndex === -1) {
      navigate(navOrder[navOrder.length - 1]);
      return;
    }
    
    const prevIndex = currentIndex <= 0 ? navOrder.length - 1 : currentIndex - 1;
    navigate(navOrder[prevIndex]);
  };

  return (
    <motion.div
      className="prev-nav-button"
      onClick={handlePrevious}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, x: -5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        left: '20px', // Position on left instead of right
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 100,
        cursor: 'pointer',
        background: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(5px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}
    >
      <FiChevronLeft size={24} color="#fff" />
    </motion.div>
  );
};

export default PrevNavButton;