import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch, 
  // useParams
} from 'react-router-dom';
import Header from './components/Header';
import Gallery from './components/views/Gallery';
import Footer from './components/Footer';
import Home from './components/views/Home';
import About from './components/views/About';
import Admin from './components/admin/Admin';
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
            <Gallery />
          </Route>
          <Route path = '/about'>
              <Home />
            <About />
          </Route>
          <Route path = '/admin'>
              <Admin />
          </Route>
          <Route path = '/gallery/:id'>
              <Gallery/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
