import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Homes from './components/Homes';

const App = () => {
  return (
    <section className='container'>
      <Header />
      <Homes />
      <Footer />
    </section>
  );
};

export default App;
