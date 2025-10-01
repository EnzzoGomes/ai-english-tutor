import React from 'react';

const Logo: React.FC = () => (
    <div className="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-800" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3.5a1 1 0 00.02 1.84l7 3.5a1 1 0 00.748 0l7-3.5a1 1 0 00.02-1.84l-7-3.5zM3 9.363l7 3.5v5.337l-7-3.5V9.363zM17 9.363v5.337l-7 3.5V12.863l7-3.5z" />
        </svg>
        <span className="text-xl font-bold text-gray-800">AI Studio English Tutor</span>
    </div>
);

const Header: React.FC = () => {
    return (
        <header id="home" className="bg-white border-b border-gray-200">
            <div className="container mx-auto px-6 py-4">
                <nav className="flex justify-between items-center">
                    <Logo />
                    <a href="#faq" className="hidden md:inline-block bg-blue-50 text-blue-800 font-semibold py-2 px-6 rounded-lg hover:bg-blue-100 transition duration-300">
                        FAQ
                    </a>
                </nav>
            </div>

            <div className="container mx-auto px-6 pt-16 pb-24 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 leading-tight mb-4">
                        Como a Inteligência Artificial Transforma o Aprendizado de Inglês
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                        Uma visão aprofundada sobre a tecnologia do AI Studio English Tutor, uma plataforma educativa que usa IA para criar experiências de aprendizado personalizadas.
                    </p>
                    <div className="relative max-w-3xl mx-auto">
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur-lg opacity-25"></div>
                        <img
                            src="https://picsum.photos/seed/aieducation/1200/600"
                            alt="Ilustração de Inteligência Artificial e Educação"
                            className="relative rounded-2xl shadow-xl border-4 border-white"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;