

const HiddenCostSection = ({ content }) => {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {content.heading}
          </h2>
          <p className="mt-4 text-lg text-gray-600">{content.subheading}</p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {content.cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                  <Icon className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-gray-600">{card.description}</p>
                <div className="mt-4 text-2xl font-bold text-red-600">
                  {card.stat}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HiddenCostSection;
