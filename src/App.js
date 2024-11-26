import './App.css';
import Navigation from './components/Navigation';
import HomePage from './Pages/HomePage';
import VideoPage from './Pages/VideoPage';
import VideoProvider from './context/VideoContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <VideoProvider>
      <Router>
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/video/:uid" element={<VideoPage />} />
          </Routes>
        </div>
      </Router>
    </VideoProvider>
  );
}

export default App;
