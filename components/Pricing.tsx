import React from 'react';

interface UseCaseProps {
    title: string;
    icon: React.ReactNode;
    features: string[];
}

const UseCaseCard: React.FC<UseCaseProps> = ({ title, icon, features }) => (
    <div className="border border-gray-200 bg-white rounded-2xl p-8 flex flex-col h-full shadow-sm">
        <div className="flex items-center mb-4">
          <div className="bg-blue-100 text-blue-800 p-3 rounded-lg mr-4">{icon}</div>
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
        <ul className="space-y-2 mb-8 flex-grow">
            {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-600">{feature}</span>
                </li>
            ))}
        </ul>
    </div>
);

const UseCases: React.FC = () => {
    return (
        <section id="use-cases" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-800">Casos de Uso</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Aplicações práticas da plataforma para diferentes objetivos e perfis.</p>
                </div>
                <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
                    <UseCaseCard
                        title="Para Estudantes"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-9.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-9.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>}
                        features={['Prática complementar aos estudos', 'Preparação para exames (TOEFL, IELTS)', 'Desenvolvimento de conversação e fluidez']}
                    />
                    <UseCaseCard
                        title="Para Profissionais"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
                        features={['Inglês para negócios (Business English)', 'Treino para apresentações e reuniões', 'Melhora da comunicação escrita (e-mails)']}
                    />
                    <UseCaseCard
                        title="Para Viajantes"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.707 4.5l.053-.053a.5.5 0 01.707 0l2.121 2.121a.5.5 0 010 .707l-2.121 2.121a.5.5 0 01-.707 0l-.053-.053zM11 21.053V19a2 2 0 012-2h2a2 2 0 012 2v2.053" /></svg>}
                        features={['Simulação de situações cotidianas', 'Prática de pronúncia para ser compreendido', 'Aquisição de vocabulário situacional']}
                    />
                </div>
            </div>
        </section>
    );
};

export default UseCases;