import React, { Component } from 'react';

import Header from './component/header/header.jsx';
import Navigation from './component/navigation/navigation.jsx';
import Footer from './component/footer/footer.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
