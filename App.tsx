import React from 'react';
import Header from './components/Header';
import ProblemSolution from './components/ProblemSolution';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 text-gray-800 antialiased">
      <Header />
      <main>
        {/* As seções abaixo foram redefinidas para um propósito educacional */}
        <ProblemSolution /> {/* Seção: Missão e Visão */}
        <Benefits />        {/* Seção: Como a Plataforma Funciona */}
        <HowItWorks />      {/* Seção: Tecnologias Utilizadas */}
        <Testimonials />    {/* Seção: Benefícios Educacionais */}
        <Pricing />         {/* Seção: Casos de Uso */}
        <FAQ />             {/* Seção: Perguntas Frequentes (Técnicas e Educacionais) */}
      </main>
      <Footer />
    </div>
  );
};

export default App;