import React from 'react';

const FinalCTA = ({ title, subtitle, button, disclaimer }) => {
  return (
    <section id="final-cta" className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-8 sm:py-12 lg:px-8">
        <div className="text-center">
          {/* Title */}
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            {title}
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-lg text-gray-600">{subtitle}</p>

          {/* CTA Button */}
          <div className="mt-8">
            <button
              className="inline-flex items-center justify-center whitespace-nowrap text-sm h-11 rounded-md bg-black text-white hover:bg-gray-800 font-semibold px-8 py-3 transition-colors"
            >
              {button?.label}
            </button>
          </div>

          {/* Disclaimer */}
          {disclaimer && (
            <p className="mt-8 text-sm text-gray-600">{disclaimer}</p>
          )}
        </div>
      </div>
    </section>
  );
};


const CtaSection = () => {
    const finalCTAData = {
    title: "Ready to capture every high-value call?",
    subtitle: "Transform your business with AI-powered customer service today.",
    button: {
      label: "Book a Demo",
      onClick: () => alert("CTA Clicked!"), // Replace with navigation or tracking
    },
    disclaimer: "No spam, ever. Unsubscribe anytime.",
  };
    return (
        <FinalCTA {...finalCTAData} />
    );
};

export default CtaSection;