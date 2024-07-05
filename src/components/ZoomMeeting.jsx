// ZoomMeeting.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaMicrophone, FaVideo, FaShareSquare, FaLock, FaUsers, FaComments, FaShare, FaRecordVinyl, FaStopCircle } from 'react-icons/fa';
import Photo1 from './images/Photo (1).png'
const ZoomMeeting = () => {
  return (
    <div className="bg-blue-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 shadow-md w-3/4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Zoom Meeting</h2>
          <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View
          </Link>
        </div>
        <div className="flex justify-center">
          <div className="bg-gray-200 p-4 flex flex-col items-center">
            <img src="https://thumbs.dreamstime.com/b/girl-office-notebook-laptop-7661171.jpg" alt="Victoria Reyes" className="w-24 h-24 mb-2" />
            <h3 className="text-center font-medium text-gray-800">Victoria Reyes</h3>
          </div>
          <div className="bg-gray-200 p-4 flex flex-col items-center">
            <img src="https://i.pinimg.com/originals/fb/a7/e8/fba7e806c4fff4534b603ce505578b6b.png" alt="Henry Park" className="w-24 h-24 mb-2" />
            <h3 className="text-center font-medium text-gray-800">Henry Park</h3>
          </div>
          <div className="bg-gray-200 p-4 flex flex-col items-center">
            <img src="https://tse1.mm.bing.net/th?id=OIP.R9hGnwYkbMhsWpLCLOd09wHaHa&pid=Api&P=0&h=220" alt="Marketing Huddle" className="w-24 h-24 mb-2" />
            <h3 className="text-center font-medium text-gray-800">Marketing Huddle</h3>
          </div>
        </div>
        
        <div className="mt-4">
          <img src={Photo1} alt="Presenter" className="shadow-md w-full h-96 object-center" />
        </div>
        <div className="mt-8 flex justify-center space-x-12 text-gray-500 text-2xl">
          <FaMicrophone />
          <FaVideo />
          <FaShareSquare />
          <FaLock />
          <FaUsers />
          <FaComments />
          <FaShare />
          <FaRecordVinyl />
          <FaStopCircle />
        </div>
      </div>
    </div>
  );
};

export default ZoomMeeting;
