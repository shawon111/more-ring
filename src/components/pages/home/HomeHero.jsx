import LogoCarousel from "./LogoCarousel";

const HomeHero = () => {
    
    return (
        <section id="hero" className="relative overflow-hidden bg-white">
            <div className="absolute inset-0 bg-blue-50 opacity-50"></div>

            <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    {/* YC Badge */}
                    <div className="mb-8 flex justify-center">
                        <a
                            href="https://www.ycombinator.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 hover:bg-blue-100 hover:border-blue-300 transition-colors"
                        >
                            <span className="text-sm text-gray-600">Backed by</span>
                            <div className="inline-flex items-center gap-1.5">
                                <div className="bg-orange-500 text-white font-bold px-2 py-0.5 rounded text-sm">
                                    Y
                                </div>
                                <span className="text-sm font-semibold text-gray-900">
                                    Combinator
                                </span>
                            </div>
                        </a>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl lg:text-7xl">
                        Ring. Answer.
                        <br /> Revenue.
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
                        Stop losing $100,000+ annually to missed calls. Your AI Receptionist
                        picks up in 2 rings, 24/7.
                    </p>

                    {/* Primary CTA */}
                    <div className="mt-8">
                        <p className="mb-4 text-sm font-medium text-gray-600">
                            See the magic in 30 seconds • No signup required
                        </p>
                        <button className="group relative mx-auto flex items-center gap-3 sm:gap-4 px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 text-white animate-pulse-subtle max-w-full">
                            <div className="absolute -inset-1 bg-blue-600 rounded-full opacity-25 animate-ping"></div>
                            <div className="relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white/20 group-hover:bg-white/30 transition-colors flex-shrink-0">
                                {/* Phone icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="lucide lucide-phone h-5 w-5 sm:h-7 sm:w-7 text-white animate-wiggle"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </div>
                            <div className="relative text-left">
                                <span className="block text-base sm:text-xl font-bold leading-tight">
                                    Talk to your new AI Receptionist
                                </span>
                                <span className="block text-xs sm:text-sm text-blue-100 mt-0.5">
                                    Experience a real AI Receptionist call
                                </span>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="lucide lucide-arrow-right h-5 w-5 sm:h-6 sm:w-6 text-white group-hover:translate-x-1 transition-transform flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Secondary CTAs */}
                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm h-9 bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium px-4 py-2 rounded-lg transition-colors">
                            Book a Demo
                        </button>
                        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm h-9 text-gray-700 hover:bg-gray-100 font-medium px-4 py-2 rounded-lg transition-colors">
                            How it Works
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="lucide lucide-arrow-right ml-2 h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Scrolling Logos */}
                    <div className="mt-16 pt-8 border-t border-gray-200">
                        <div className="relative overflow-hidden">
                            <LogoCarousel />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;