
const Footer = () => {
    const brand = { name: "Airfront", href: "/" };
    const tagline = "AI Receptionist for businesses. Never miss another important call.";
    const cta = {
        label: "Book a Demo"
    };
    const links = [
        { label: "How it Works", href: "#how-it-works" },
        { label: "Pricing", href: "#pricing" },
        { label: "FAQ", href: "#faq" },
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
    ];
    const copyright = "© 2025 Awning Technologies Inc. “Airfront” All rights reserved."
    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                <div className="flex flex-col md:flex-row md:justify-between gap-8">
                    {/* Left Section */}
                    <div className="max-w-md">
                        <a href={brand.href}>
                            <div className="flex items-center space-x-3">
                                {/* Logo */}
                                <div className="relative w-8 h-8 group">
                                    {/* Replace with your own logo */}
                                    <svg
                                        width="32"
                                        height="32"
                                        viewBox="0 0 189 201"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="flex-shrink-0 group-hover:animate-wiggle"
                                    >
                                        <path
                                            d="M177.384 32.8522L101.784 1.44289C99.4815 0.49032 97.0128 0 94.5197 0C92.0265 0 89.5579 0.49032 87.255 1.44289L11.655 32.8522C4.60687 35.7576 0 42.6284 0 50.2451C0 128.179 45.0844 182.046 87.2156 199.557C91.8619 201.481 97.0988 201.481 101.745 199.557C135.489 185.541 189 137.131 189 50.2451C189 42.6284 184.393 35.7576 177.384 32.8522Z"
                                            fill="#3366E3"
                                        />
                                        <path
                                            d="M135.49 118.184L116.24 109.934C115.418 109.583 114.504 109.509 113.636 109.723C112.768 109.937 111.993 110.427 111.427 111.12L102.902 121.536C89.5229 115.227 78.7555 104.46 72.4473 91.0805L82.8631 82.5553C83.5569 81.991 84.048 81.216 84.262 80.3476C84.476 79.4793 84.4012 78.5648 84.049 77.7427L75.7989 58.4924C75.4124 57.6062 74.7287 56.8827 73.8659 56.4465C73.003 56.0104 72.015 55.889 71.0722 56.1033L53.1969 60.2284C52.288 60.4383 51.477 60.95 50.8964 61.6802C50.3158 62.4103 49.9998 63.3157 50 64.2486C50 108.335 85.7334 144 129.751 144C130.685 144.001 131.59 143.685 132.321 143.104C133.051 142.523 133.563 141.712 133.773 140.803L137.898 122.928C138.111 121.98 137.987 120.988 137.548 120.123C137.108 119.257 136.381 118.571 135.49 118.184Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <span className="text-2xl text-black font-semibold">
                                    {brand.name}
                                </span>
                            </div>
                        </a>

                        {/* Tagline */}
                        <p className="mt-4 text-gray-600">{tagline}</p>

                        {/* CTA Button */}
                        {cta && (
                            <button
                                className="mt-6 text-blue-600 hover:text-blue-700 font-medium"
                            >
                                {cta.label} →
                            </button>
                        )}
                    </div>

                    {/* Links */}
                    <div className="flex items-center">
                        <ul className="flex gap-6 md:flex-wrap md:gap-8">
                            {links.map((link, idx) => (
                                <li
                                    key={idx}
                                    className="flex items-center text-sm text-gray-600 hover:text-gray-900 font-medium"
                                >
                                    <a href={link.href}>{link.label}</a>
                                    {idx < links.length - 1 && (
                                        <span className="ml-8 text-gray-300 hidden md:inline">·</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Note */}
                <div className="mt-8 border-t border-gray-200 pt-8">
                    <p className="text-center text-sm text-gray-500">{copyright}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;