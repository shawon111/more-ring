import { CheckCircle } from "lucide-react";

const HowItWorksSection = ({ content }) => {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {content.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{content.subheading}</p>
        </div>

        {/* Features */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {content.features.map((feature, idx) => (
            <div key={idx} className="relative flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-1 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Integrations */}
        <div className="mt-16">
          <h3 className="text-center text-lg font-semibold text-gray-900 mb-8">
            {content.integrationsHeading}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {content.integrations.map((tool, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-lg px-6 py-3 text-gray-700 font-medium border border-gray-200"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
