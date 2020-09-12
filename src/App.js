import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from './components/Header';
import Gallery from './components/views/Gallery';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path = '/gallery'>
              <Gallery />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
