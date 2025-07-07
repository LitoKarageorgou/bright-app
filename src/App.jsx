import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Welcome from './components/screens/Welcome';
import Login from './components/screens/Login';
import GradeSelection from './components/screens/GradeSelection';
import CourseSelection from './components/screens/CourseSelection';
import Chapters from './components/screens/Chapters';
import Video from './components/screens/Video';
import Story from './components/screens/Story';
import Quiz from './components/screens/Quiz';
import Celebration from './components/screens/Celebration';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoaderRedirect />} />
        <Route path="/login" element={<Login />} />
        <Route path="/grades" element={<GradeSelection />} />
        <Route path="/courses" element={<CourseSelection />} />
        <Route path="/courses/history" element={<Chapters />} />
        <Route path="/courses/history/hercules/video" element={<Video />} />
        <Route path="/courses/history/hercules/story" element={<Story />} />
        <Route path="/courses/history/hercules/quiz" element={<Quiz />} />
        <Route path="/courses/history/hercules/celebration" element={<Celebration />} />
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

  return <Welcome />;
}

export default App;