import { Quote } from "lucide-react";

const IndustryQuotesSection = ({ content }) => {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="relative bg-white rounded-2xl shadow-xl p-8 sm:p-12">
            <Quote className="absolute top-6 left-6 h-8 w-8 text-blue-200" />
            <div className="relative z-10">
              {/* Heading */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {content.heading}
              </h3>

              {/* Key Metric */}
              <div className="mb-8 bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
                <div className="text-4xl font-bold text-blue-600">
                  {content.metric.value}
                </div>
                <div className="mt-2 text-gray-700">{content.metric.description}</div>
              </div>

              {/* Quote */}
              <blockquote>
                <p className="text-xl text-gray-700 leading-relaxed">
                  {content.quote.text}
                </p>
                <footer className="mt-6">
                  <div className="font-semibold text-gray-900">{content.quote.author}</div>
                  <div className="text-gray-600">{content.quote.source}</div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryQuotesSection;
