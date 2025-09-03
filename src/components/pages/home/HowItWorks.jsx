
const HowItWorks = () => {
    const steps = [
        {
            icon: "📞",
            step: "Step 1",
            title: "24/7 Bilingual AI Receptionist",
            description: "Voice + SMS support in English and Spanish",
        },
        {
            icon: "🛡️",
            step: "Step 2",
            title: "Intelligent Call Screening",
            description:
                "AI filters out robocalls and spam while ensuring every real customer connects instantly",
        },
        {
            icon: "🎯",
            step: "Step 3",
            title: "Smart Lead Qualification",
            description:
                "Captures key details like contact info, service needs, urgency, and appointment preferences",
        },
        {
            icon: "📅",
            step: "Step 4",
            title: "Real-Time Scheduling",
            description:
                "Books appointments directly into your existing CRM or scheduling system",
        },
        {
            icon: "🚀",
            step: "Step 5",
            title: "Zero-Config Onboarding",
            description:
                "Just let Airfront listen to a few recorded calls; we tune the agent for you",
        },
        {
            icon: "⚡",
            step: "Step 6",
            title: "Instant Sync & Alerts",
            description: "CRM updates + team notifications in real-time",
        },
    ];
    return (
        <section id="how-it-works" className="py-24 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                        How Airfront Works
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        From missed call to booked appointment in seconds
                    </p>
                </div>

                {/* Steps */}
                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {steps.map((item, index) => (
                        <div key={index} className="relative">
                            <div className="flex items-start space-x-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-2xl">
                                    {item.icon}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-sm font-semibold text-black">
                                            {item.step}
                                        </span>
                                    </div>
                                    <h3 className="mt-2 text-lg font-semibold text-black">
                                        {item.title}
                                    </h3>
                                    <p className="mt-1 text-gray-600">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;