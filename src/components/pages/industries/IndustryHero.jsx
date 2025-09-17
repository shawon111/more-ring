import React from "react";

const IndustryHero = ({ content }) => {
    const {
        title,
        subtitle,
        stat,
        quote,
        source,
        primaryCta,
        secondaryCta,
    } = content;
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-24 pb-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                {/* Heading */}
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                    {title}
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-600">{subtitle}</p>

                {/* Stat Box */}
                <div className="mt-10 bg-white rounded-2xl shadow-xl p-8 border-2 border-blue-200">
                    <div className="text-5xl font-bold text-blue-600">{stat.value}</div>
                    <div className="mt-2 text-lg text-gray-700">{stat.description}</div>
                </div>

                {/* Quote Block */}
                <div className="mt-8 border-l-4 border-blue-500 pl-6 text-left max-w-3xl mx-auto">
                    <p className="text-lg italic text-gray-700">“{quote}”</p>
                    <p className="mt-2 text-sm text-gray-600">{source}</p>
                </div>

                {/* CTA Buttons */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        // onClick={primaryCta.onClick}
                        className="inline-flex items-center justify-center h-11 bg-black text-white hover:bg-gray-800 font-semibold px-8 py-4 rounded-lg transition-colors"
                    >
                        {primaryCta.label}
                    </button>
                    <button
                        // onClick={secondaryCta.onClick}
                        className="inline-flex items-center justify-center h-11 bg-white text-black border-2 border-black hover:bg-gray-50 font-semibold px-8 py-4 rounded-lg transition-colors"
                    >
                        {secondaryCta.label}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default IndustryHero;
