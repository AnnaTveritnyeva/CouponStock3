import React from 'react';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';
import Navbar from './components/layout/Navbar';

function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
