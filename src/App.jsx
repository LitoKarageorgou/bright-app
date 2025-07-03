import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import WelcomeScreen from './components/WelcomeScreen';
import LoginScreen from './components/LoginScreen';
import GradeSelectionScreen from './components/GradeSelectionScreen';
import CourseSelectionScreen from './components/CourseSelectionScreen';
import HistoryChaptersScreen from './components/HistoryChaptersScreen';
import HerculesVideoScreen from './components/HerculesVideoScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoaderRedirect />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/grades" element={<GradeSelectionScreen />} />
        <Route path="/courses" element={<CourseSelectionScreen />} />
        <Route path="/courses/history" element={<HistoryChaptersScreen />} />
        <Route path="/courses/history/hercules/video" element={<HerculesVideoScreen />} />
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
    }, 5000); // 5 seconds delay
    return () => clearTimeout(timer);
  }, [navigate]);

  return <WelcomeScreen />;
}

export default App;