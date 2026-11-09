import React from 'react';

const DEMO_URL = 'https://huggingface.co/spaces/Enzzozink/tutor-ingles-ia';

const Header: React.FC = () => (
  <header id="home" className="bg-white border-b border-gray-200">
    <nav className="container mx-auto px-6 py-5 flex items-center justify-between">
      <a href="#home" className="text-xl font-bold text-blue-900">AI English Tutor</a>
      <a href={DEMO_URL} target="_blank" rel="noreferrer" className="bg-blue-800 text-white font-semibold py-3 px-5 rounded-lg hover:bg-blue-900">Experimentar o tutor</a>
    </nav>
    <div className="container mx-auto px-6 pt-16 pb-20 text-center">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 mb-4">Projeto de código aberto</p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">Pratique inglês com um tutor baseado em IA</h1>
        <p className="text-lg text-gray-600 mb-8">Faça perguntas, receba feedback sobre respostas em inglês e gere um plano de estudo. A aplicação combina uma interface Flask com a API da Groq.</p>
        <a href={DEMO_URL} target="_blank" rel="noreferrer" className="inline-block bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-900">Abrir demonstração</a>
      </div>
    </div>
  </header>
);

export default Header;
