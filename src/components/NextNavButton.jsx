import { motion } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';
import { useLocation, useNavigate } from 'react-router-dom';

const NextNavButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Define your navigation order (must match your Route paths exactly)
  const navOrder = [
    '/',
    '/about',
    '/projects',
    '/experience',
    '/skills',
    '/contact'
  ];

  const handleNext = () => {
    const currentPath = location.pathname;
    const currentIndex = navOrder.indexOf(currentPath);
    
    // If current path not found, default to first item
    if (currentIndex === -1) {
      navigate(navOrder[0]);
      return;
    }
    
    const nextIndex = (currentIndex + 1) % navOrder.length;
    navigate(navOrder[nextIndex]);
  };

  return (
    <motion.div
      className="next-nav-button"
      onClick={handleNext}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9, x: 5 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        right: '20px',
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
      <FiChevronRight size={24} color="#fff" />
    </motion.div>
  );
};

export default NextNavButton;