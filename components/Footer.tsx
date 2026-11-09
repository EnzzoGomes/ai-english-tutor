import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white py-10">
    <div className="container mx-auto px-6 text-center">
      <p className="font-semibold">AI English Tutor</p>
      <p className="text-gray-300 mt-2 mb-5">Projeto demonstrativo com React, Flask e Groq.</p>
      <a href="https://huggingface.co/spaces/Enzzozink/tutor-ingles-ia" target="_blank" rel="noreferrer" className="inline-block bg-white text-blue-900 font-semibold py-2 px-5 rounded-lg">Acessar demonstração</a>
      <p className="text-sm text-gray-400 mt-6">© {new Date().getFullYear()} AI English Tutor</p>
    </div>
  </footer>
);

export default Footer;
