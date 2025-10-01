import React from 'react';

const MissionIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.5l.053-.053a.5.5 0 01.707 0l2.121 2.121a.5.5 0 010 .707l-2.121 2.121a.5.5 0 01-.707 0l-.053-.053zM11 21.053V19a2 2 0 012-2h2a2 2 0 012 2v2.053" />
    </svg>
);

const HowIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
);


const MissionVision: React.FC = () => {
    const howItWorksItems = [
        "IA generativa para conteúdo personalizado.",
        "Análise de padrões de aprendizado individuais.",
        "Adaptação contínua ao progresso do usuário.",
    ];

    return (
        <section id="mission" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
                        <div className="flex items-center mb-4">
                            <MissionIcon />
                            <h2 className="ml-3 text-3xl font-bold text-gray-800">Nossa Missão</h2>
                        </div>
                        <p className="text-lg text-gray-600">
                            Democratizar o acesso ao aprendizado de inglês de alta qualidade através da tecnologia, tornando a fluência alcançável para todos, em qualquer lugar.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200">
                        <div className="flex items-center mb-4">
                            <HowIcon />
                            <h2 className="ml-3 text-3xl font-bold text-gray-800">Como Fazemos</h2>
                        </div>
                         <ul className="space-y-3">
                            {howItWorksItems.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <svg className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <p className="ml-3 text-lg text-gray-700">{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;