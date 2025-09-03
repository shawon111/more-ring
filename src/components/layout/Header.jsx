
const Header = () => {
    return (
        <header className="mx-auto max-w-7xl px-6 lg:px-8">
            <nav className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <a className="flex items-center" href="/">
                            <div className="flex items-center space-x-3">
                                <div className="relative w-8 h-8 group">
                                    <svg width="32" height="32" viewBox="0 0 189 201" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 group-hover:animate-wiggle">
                                        <path d="M177.384 32.8522L101.784 1.44289C99.4815 0.49032 97.0128 0 94.5197 0C92.0265 0 89.5579 0.49032 87.255 1.44289L11.655 32.8522C4.60687 35.7576 0 42.6284 0 50.2451C0 128.179 45.0844 182.046 87.2156 199.557C91.8619 201.481 97.0988 201.481 101.745 199.557C135.489 185.541 189 137.131 189 50.2451C189 42.6284 184.393 35.7576 177.384 32.8522Z" fill="#3366E3"></path>
                                        <path d="M135.49 118.184L116.24 109.934C115.418 109.583 114.504 109.509 113.636 109.723C112.768 109.937 111.993 110.427 111.427 111.12L102.902 121.536C89.5229 115.227 78.7555 104.46 72.4473 91.0805L82.8631 82.5553C83.5569 81.991 84.048 81.216 84.262 80.3476C84.476 79.4793 84.4012 78.5648 84.049 77.7427L75.7989 58.4924C75.4124 57.6062 74.7287 56.8827 73.8659 56.4465C73.003 56.0104 72.015 55.889 71.0722 56.1033L53.1969 60.2284C52.288 60.4383 51.477 60.95 50.8964 61.6802C50.3158 62.4103 49.9998 63.3157 50 64.2486C50 108.335 85.7334 144 129.751 144C130.685 144.001 131.59 143.685 132.321 143.104C133.051 142.523 133.563 141.712 133.773 140.803L137.898 122.928C138.111 121.98 137.987 120.988 137.548 120.123C137.108 119.257 136.381 118.571 135.49 118.184Z" fill="white"></path>
                                    </svg>
                                </div>
                                <span className="text-2xl text-black font-bold">Airfront</span>
                            </div>
                        </a>
                    </div>

                    <div className="hidden md:flex md:items-center md:space-x-8">
                        <div className="relative industries-dropdown">
                            <button className="flex items-center gap-1 text-black hover:text-blue-600 font-medium transition-colors">
                                Industries
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down h-4 w-4 transition-transform">
                                    <path d="m6 9 6 6 6-6"></path>
                                </svg>
                            </button>
                        </div>

                        <a href="#how-it-works" className="text-black hover:text-blue-600 font-medium transition-colors">How it Works</a>
                        <a href="#pricing" className="text-black hover:text-blue-600 font-medium transition-colors">Pricing</a>
                        <a href="#faq" className="text-black hover:text-blue-600 font-medium transition-colors">FAQ</a>
                    </div>

                    <div className="hidden md:flex md:items-center md:space-x-4">
                        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 bg-black text-white hover:bg-gray-800 font-semibold px-6 py-3 rounded-lg transition-colors" data-track-event="cta_click" data-cta-id="nav-get-started-desktop" data-cta-text="Book a Demo">
                            Book a Demo
                        </button>
                    </div>

                    <div className="flex md:hidden">
                        <button type="button" className="text-black hover:text-gray-700">
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;