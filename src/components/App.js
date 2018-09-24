import React, { Component } from 'react';
import Home from './pages/Home';
import Footer from './organisms/Footer';
import Navbar from './organisms/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {/* TODO Route Switch 로 라우팅 */}
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
