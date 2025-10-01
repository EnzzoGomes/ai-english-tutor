import React from 'react';

interface ModuleCardProps {
    title: string;
    items: {
        label: string;
        description: string;
    }[];
    icon: React.ReactNode;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ title, items, icon }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200/80 h-full">
        <div className="flex items-center mb-4">
            <div className="bg-blue-100 text-blue-800 p-3 rounded-lg mr-4">{icon}</div>
            <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        </div>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index}>
              <strong className="text-blue-800">{item.label}:</strong>
              <span className="text-gray-600 ml-1">{item.description}</span>
            </li>
          ))}
        </ul>
    </div>
);

const HowPlatformWorks: React.FC = () => {
    const modules = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>,
            title: "Módulo 1: Análise de Perfil",
            items: [
              { label: "Entrada", description: "Teste inicial de nivelamento." },
              { label: "Processo", description: "IA analisa vocabulário, gramática e pronúncia." },
              { label: "Saída", description: "Perfil completo e detalhado de aprendizado." },
            ]
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
            title: "Módulo 2: Conteúdo Personalizado",
            items: [
              { label: "IA Generativa", description: "Cria exercícios baseados no seu perfil." },
              { label: "Adaptação Dinâmica", description: "Ajusta a dificuldade em tempo real." },
              { label: "Tópicos Relevantes", description: "Conteúdo alinhado aos seus interesses." },
            ]
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
            title: "Módulo 3: Prática Interativa",
            items: [
              { label: "Conversação", description: "Simula diálogos realistas." },
              { label: "Feedback Imediato", description: "Correções de pronúncia e gramática." },
              { label: "Análise de Progresso", description: "Métricas detalhadas de evolução." },
            ]
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
            title: "Módulo 4: Relatórios e Insights",
            items: [
              { label: "Dashboard Educativo", description: "Visualização clara do progresso." },
              { label: "Recomendações", description: "Sugestões de estudo baseadas em dados." },
              { label: "Metas Inteligentes", description: "Definição de objetivos adaptativos." },
            ]
        }
    ];

    return (
        <section id="how-it-works" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-800">Como a Plataforma Funciona</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Uma jornada de aprendizado em quatro etapas, impulsionada por inteligência artificial.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {modules.map((module, index) => (
                        <ModuleCard key={index} {...module} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowPlatformWorks;