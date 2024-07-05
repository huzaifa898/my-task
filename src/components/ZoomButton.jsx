import React from 'react';
import { useHistory } from 'react-router-dom';

function ZoomButton() {
  const history = useHistory();

  const handleJoinMeeting = () => {
    history.push('/zoom-meeting');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 border border-gray-200">
      <div className="text-4xl font-bold text-blue-500 mb-8">Zoom</div>
      <button
        onClick={handleJoinMeeting}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Join a Meeting
      </button>
      <button className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Sign In
      </button>
    </div>
  );
}

export default ZoomButton;
