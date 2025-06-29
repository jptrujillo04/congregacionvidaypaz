import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import LandingPage from './features/landing/LandingPage';

function App() {
  return (
    <div className="bg-background">
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
