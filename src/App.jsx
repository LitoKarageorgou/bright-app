import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import WelcomeScreen from './components/WelcomeScreen';
import LoginScreen from './components/LoginScreen';
import GradeSelectionScreen from './components/GradeSelectionScreen';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LoaderRedirect />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/grade" element={<GradeSelectionScreen />} />
      </Routes>
    </Router>
  );
}

// Component to show loader and redirect after delay
function LoaderRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 4000); // 4 seconds delay
    return () => clearTimeout(timer);
  }, [navigate]);

  return <WelcomeScreen />;
}

export default App;
