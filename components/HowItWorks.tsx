import React from 'react';

interface TechProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const TechCard: React.FC<TechProps> = ({ title, description, icon }) => (
    <div className="text-center bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex items-center justify-center mx-auto mb-4 w-16 h-16 rounded-full bg-blue-100 text-blue-800">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const Technologies: React.FC = () => {
    return (
        <section id="tech" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-800">Tecnologias Utilizadas</h2>
                    <p className="mt-4 text-lg text-gray-600">Os pilares tecnológicos que tornam o aprendizado eficaz e personalizado.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <TechCard
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10m16-10v10M4 11h16M4 17h16" /></svg>}
                        title="Processamento de Linguagem Natural (NLP)"
                        description="Permite a análise profunda de texto e fala, possibilitando correções gramaticais e de pronúncia contextuais e precisas."
                    />
                    <TechCard
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-9.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-9.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>}
                        title="Machine Learning Adaptativo"
                        description="Nossos modelos aprendem com cada interação, ajustando continuamente o plano de estudos para maximizar a eficiência do seu aprendizado."
                    />
                    <TechCard
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.636 18.364a9 9 0 010-12.728m2.829 9.9a5 5 0 010-7.072" /></svg>}
                        title="Síntese de Voz"
                        description="Gera áudios com pronúncia natural e clara, expondo o aluno a múltiplos sotaques e melhorando a capacidade de compreensão auditiva."
                    />
                </div>
            </div>
        </section>
    );
};

export default Technologies;