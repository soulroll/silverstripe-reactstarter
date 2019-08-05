import React, { Component } from 'react';

import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p>Welcome to React test red</p>
        <Footer />
      </div>
    );
  }
}

export default App;
