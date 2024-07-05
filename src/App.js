import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ZoomButton from './components/ZoomButton';
import ZoomMeeting from './components/ZoomMeeting';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ZoomButton} />
        <Route path="/zoom-meeting" component={ZoomMeeting} />
      </Switch>
    </Router>
  );
}

export default App;
