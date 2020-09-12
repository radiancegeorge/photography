import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from './components/Header';
import Gallery from './components/views/Gallery';
import Footer from './components/Footer';
import Home from './components/views/Home';
function App() {
  return (
    <div style={{
      position: 'relative', 
      minHeight: '100vh'
    }}>
      <Router>
        <Header />
        <Switch>
          <Route exact path = '/'>
            <Home />
          </Route>
          <Route path = '/gallery'>
              <Gallery />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
