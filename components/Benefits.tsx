import React from 'react';

const features = [
  ['Plano de estudo', 'Informe nome, nível, tempo disponível e objetivo para solicitar um plano em português.'],
  ['Prática de conversação', 'Escolha um cenário e envie sua resposta em inglês para receber feedback textual.'],
  ['Dúvidas de inglês', 'Envie uma pergunta e receba uma explicação do tutor em português.'],
  ['Progresso da sessão', 'A interface mantém contadores de planos, dúvidas e práticas na sessão do navegador.'],
];

const Benefits: React.FC = () => (
  <section id="features" className="py-16 bg-gray-50">
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="text-center mb-10"><h2 className="text-3xl font-bold text-gray-900">O que o tutor oferece</h2><p className="mt-3 text-gray-600">Três atividades de estudo servidas pela aplicação Flask.</p></div>
      <div className="grid md:grid-cols-2 gap-5">
        {features.map(([title, description]) => <article key={title} className="bg-white p-6 rounded-xl border border-gray-200"><h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3><p className="text-gray-600">{description}</p></article>)}
      </div>
    </div>
  </section>
);

export default Benefits;
