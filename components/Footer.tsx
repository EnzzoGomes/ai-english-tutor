import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="py-20 bg-white border-t border-gray-200">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Próximos Passos</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Estamos em constante evolução para aprimorar a experiência de aprendizado. Nossos planos futuros incluem:
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <h4 className="font-bold text-blue-800">Expansão de Idiomas</h4>
                            <p className="text-gray-700 text-sm">Adicionar novas línguas à plataforma, seguindo a mesma metodologia de IA.</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg">
                             <h4 className="font-bold text-blue-800">Integração Acadêmica</h4>
                             <p className="text-gray-700 text-sm">Parcerias com instituições de ensino para integrar nossa tecnologia em salas de aula.</p>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg">
                             <h4 className="font-bold text-blue-800">Recursos para Educadores</h4>
                             <p className="text-gray-700 text-sm">Desenvolver dashboards e ferramentas para que professores possam acompanhar seus alunos.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 py-6">
                <div className="container mx-auto px-6 text-center text-gray-600 text-sm">
                    <p>&copy; {new Date().getFullYear()} AI Studio English Tutor. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;