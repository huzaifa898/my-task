import React from 'react';
import { BrowserRouter ,  Routes,Route  } from 'react-router-dom';
import ZoomButton from './components/ZoomButton';
import ZoomMeeting from './components/ZoomMeeting';

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route  path="/" element={<ZoomButton/>} />
        <Route path="/zoom-meeting" element={<ZoomMeeting/>} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
