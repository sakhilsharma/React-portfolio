
import { HashRouter as Router, Route ,Routes} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
   useEffect(() => {
      // Simulate loading for demo (replace with your actual load logic)
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000); // 2 seconds loader
  
      return () => clearTimeout(timer);
    }, []);
  return (
    <Router>
            {loading && <div className="loader">
        <div className="loader-text">
          Hi! Welcome <br />
          Happiness All The Time
        </div>
      </div>}
      <div id='particles-js'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
