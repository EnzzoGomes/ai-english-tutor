import React, { useState } from 'react';

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 py-5">
            <button
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span className="pr-2">{question}</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 transform transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}
            >
                <p className="text-gray-600 pr-6">
                    {answer}
                </p>
            </div>
        </div>
    );
};

const FAQ: React.FC = () => {
    const technicalFaqs = [
        {
            question: "Como a IA é treinada para o ensino de idiomas?",
            answer: "Nossa IA é treinada com vastos conjuntos de dados linguísticos, incluindo textos, diálogos e amostras de fala. Ela utiliza modelos de transformer pré-treinados e ajustados (fine-tuned) especificamente para tarefas educacionais, como correção gramatical e avaliação de pronúncia."
        },
        {
            question: "Quais modelos de linguagem são utilizados?",
            answer: "Utilizamos uma combinação de modelos de linguagem de última geração (LLMs), otimizados para tarefas de diálogo e análise textual. A arquitetura é projetada para ser rápida e precisa, garantindo feedback em tempo real."
        },
        {
            question: "Como os dados dos usuários são protegidos?",
            answer: "A privacidade é nossa prioridade. Todos os dados são anonimizados e criptografados. As interações são usadas para melhorar o modelo de aprendizado do próprio usuário, sem compartilhar informações pessoais identificáveis."
        }
    ];

    const educationalFaqs = [
         {
            question: "A plataforma substitui professores humanos?",
            answer: "Não. Vemos a IA como uma ferramenta poderosa para complementar o ensino. Ela atua como um tutor incansável para prática e feedback, mas o papel do professor humano na orientação, motivação e ensino de nuances culturais é insubstituível."
        },
        {
            question: "Como o progresso é medido de forma confiável?",
            answer: "O progresso é medido através de um conjunto de métricas, incluindo precisão gramatical, complexidade do vocabulário, velocidade da fala e redução de erros de pronúncia ao longo do tempo. Esses dados são compilados em um dashboard de fácil compreensão."
        },
        {
            question: "Há validação pedagógica do método?",
            answer: "Sim, nosso método é desenvolvido em colaboração com especialistas em linguística e pedagogos. A estrutura de aprendizado se baseia em princípios comprovados de aquisição de segunda língua, como a prática espaçada e o aprendizado contextual."
        }
    ];

    return (
        <section id="faq" className="py-20 bg-gray-100">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-800">Perguntas Frequentes</h2>
                    <p className="mt-4 text-lg text-gray-600">Esclarecendo os aspectos técnicos e educacionais da nossa plataforma.</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200/80">
                    <h3 className="text-2xl font-bold text-blue-800 mb-2">Questões Técnicas</h3>
                    {technicalFaqs.map((faq, index) => (
                        <FAQItem key={`tech-${index}`} {...faq} />
                    ))}
                    <h3 className="text-2xl font-bold text-blue-800 mt-8 mb-2">Questões Educacionais</h3>
                    {educationalFaqs.map((faq, index) => (
                        <FAQItem key={`edu-${index}`} {...faq} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;