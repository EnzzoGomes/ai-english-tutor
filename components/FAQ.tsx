import React from 'react';

const items = [
  ['Como executo o tutor localmente?', 'Instale as dependências em tutor/ e inicie com python app.py. O servidor escuta a porta 7860.'],
  ['Preciso de uma chave da Groq?', 'Sim. Configure GROQ_API_KEY no ambiente do processo Flask. A chave não é incluída no repositório.'],
  ['O tutor salva meu histórico?', 'As mensagens recentes ficam na sessão assinada do Flask e são limitadas. O progresso também é mantido nessa sessão; não há banco de dados.'],
  ['A conversa avalia pronúncia?', 'Não. A prática atual recebe texto e oferece feedback textual. Ela não grava nem analisa áudio.'],
];

const FAQ: React.FC = () => (
  <section id="faq" className="py-16 bg-gray-50">
    <div className="container mx-auto px-6 max-w-3xl"><h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Perguntas frequentes</h2>
      <div className="space-y-5">{items.map(([question, answer]) => <article key={question} className="bg-white p-5 rounded-lg border border-gray-200"><h3 className="font-semibold text-gray-900">{question}</h3><p className="mt-2 text-gray-600">{answer}</p></article>)}</div>
    </div>
  </section>
);

export default FAQ;
