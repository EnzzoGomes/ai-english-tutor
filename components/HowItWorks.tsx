import React from 'react';

const HowItWorks: React.FC = () => (
  <section id="architecture" className="py-16 bg-white">
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="text-center mb-10"><h2 className="text-3xl font-bold text-gray-900">Como é construído</h2><p className="mt-3 text-gray-600">A landing page apresenta o produto; o tutor é uma aplicação independente.</p></div>
      <div className="grid md:grid-cols-3 gap-5">
        <article className="p-6 rounded-xl bg-gray-50 border border-gray-200"><h3 className="font-bold text-lg mb-2">Interface</h3><p className="text-gray-600">React 19, TypeScript e Vite na landing page. O tutor usa HTML servido pelo Flask.</p></article>
        <article className="p-6 rounded-xl bg-gray-50 border border-gray-200"><h3 className="font-bold text-lg mb-2">Servidor</h3><p className="text-gray-600">Flask atende a interface e as rotas de plano, conversação, dúvidas, progresso e saúde.</p></article>
        <article className="p-6 rounded-xl bg-gray-50 border border-gray-200"><h3 className="font-bold text-lg mb-2">Modelo de linguagem</h3><p className="text-gray-600">O backend envia prompts à API compatível com OpenAI da Groq usando o modelo llama-3.1-8b-instant.</p></article>
      </div>
    </div>
  </section>
);

export default HowItWorks;
