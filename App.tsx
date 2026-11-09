import React from 'react';
import Header from './components/Header';
import ProblemSolution from './components/ProblemSolution';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 text-gray-800 antialiased">
      <Header />
      <main>
        <ProblemSolution />
        <Benefits />
        <HowItWorks />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
