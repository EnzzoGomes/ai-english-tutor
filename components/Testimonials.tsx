import React from 'react';

interface BenefitProps {
    icon: string;
    title: string;
    description: string;
}

const BenefitCard: React.FC<BenefitProps> = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200/60 text-center">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="font-bold text-xl text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

const EducationalBenefits: React.FC = () => {
    const benefits = [
        {
            icon: "✨",
            title: "Personalização Extrema",
            description: "Cada jornada de aprendizado é única e se adapta continuamente ao seu ritmo e necessidades específicas."
        },
        {
            icon: "📚",
            title: "Aprendizado Contextual",
            description: "O conteúdo é baseado em situações do mundo real, tornando o aprendizado mais relevante e memorável."
        },
        {
            icon: "🔄",
            title: "Feedback Constante",
            description: "O ciclo de prática e correção é imediato, acelerando a internalização de novos conceitos e a fluência."
        },
        {
            icon: "📊",
            title: "Progresso Mensurável",
            description: "Dados concretos sobre sua evolução permitem entender claramente suas forças e áreas a melhorar."
        },
        {
            icon: "🌍",
            title: "Acesso Democrático",
            description: "Estude a qualquer hora e em qualquer lugar, quebrando barreiras geográficas e de tempo."
        }
    ];

    return (
        <section id="benefits" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-800">Benefícios Educacionais</h2>
                    <p className="mt-4 text-lg text-gray-600">Como nossa abordagem tecnológica se traduz em um aprendizado mais eficaz.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
                    {benefits.slice(0, 3).map((benefit, index) => (
                        <BenefitCard key={index} {...benefit} />
                    ))}
                    <div className="md:col-span-2 lg:col-span-1"></div>
                     {benefits.slice(3, 5).map((benefit, index) => (
                        <BenefitCard key={index} {...benefit} />
                    ))}
                    <div className="md:col-span-2 lg:col-span-1"></div>
                </div>
            </div>
        </section>
    );
};

export default EducationalBenefits;