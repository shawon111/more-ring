import React from 'react';

const Integrations = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                        Integrations & Ecosystem
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Works seamlessly with your existing tech stack across 26+ platforms
                    </p>
                </div>

                <div className="mt-16 relative overflow-hidden">
                    {/* Left gradient */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
                    {/* Right gradient */}
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

                    {/* Scrolling carousel left */}
                    <div className="flex gap-4 mb-4 animate-scroll-left hover:animation-play-state-paused">
                        {[
                            "servicetitan.com",
                            "housecallpro.com",
                            "getjobber.com",
                            "fieldedge.com",
                            "workiz.com",
                            "salesforce.com",
                            "hubspot.com",
                            "pipedrive.com",
                            "monday.com",
                            "copper.com",
                            "close.com",
                            "keap.com",
                            "outreach.io",
                        ].map((domain) => (
                            <div key={domain} className="flex-shrink-0 w-48">
                                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300 border border-slate-100 h-full">
                                    <div className="flex flex-col items-center">
                                        <div className="h-16 w-full flex items-center justify-center relative mb-3">
                                            <img
                                                src={`https://logo.clearbit.com/${domain}`}
                                                alt={`${domain} logo`}
                                                className="h-12 w-auto object-contain rounded-lg transition-all duration-300 hover:scale-110"
                                            />
                                        </div>
                                        <p className="text-sm font-medium text-slate-700 text-center">
                                            {domain.split(".")[0].replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Scrolling carousel right */}
                    <div className="flex gap-4 animate-scroll-right hover:animation-play-state-paused">
                        {[
                            "salesloft.com",
                            "zendesk.com",
                            "intercom.com",
                            "freshdesk.com",
                            "helpscout.com",
                            "quickbooks.intuit.com",
                            "stripe.com",
                            "squareup.com",
                            "zapier.com",
                            "make.com",
                            "slack.com",
                            "microsoft.com",
                        ].map((domain) => (
                            <div key={domain} className="flex-shrink-0 w-48">
                                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg hover:shadow-blue-100/50 transition-all duration-300 border border-slate-100 h-full">
                                    <div className="flex flex-col items-center">
                                        <div className="h-16 w-full flex items-center justify-center relative mb-3">
                                            <img
                                                src={`https://logo.clearbit.com/${domain}`}
                                                alt={`${domain} logo`}
                                                className="h-12 w-auto object-contain rounded-lg transition-all duration-300 hover:scale-110"
                                            />
                                        </div>
                                        <p className="text-sm font-medium text-slate-700 text-center">
                                            {domain.split(".")[0].replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-12 bg-gradient-to-r from-blue-50 to-blue-100/50 rounded-xl p-8 border border-blue-200/50">
                    <div className="text-center">
                        <p className="text-lg text-black font-medium">
                            Need something else? Our team will build the connector for you at no extra charge during onboarding.
                        </p>
                    </div>
                </div>

            </div>
        </section>

    );
};

export default Integrations;