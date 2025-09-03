

const WhyBeats = () => {
    return (
        <section className="py-24 bg-gray-50 hidden md:block">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Why Airfront Beats...
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        See how we compare to other solutions
                    </p>
                </div>

                <div className="mt-16">
                    <div className="overflow-hidden shadow-lg rounded-xl border border-gray-200">
                        <table className="min-w-full">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200">
                                        Feature
                                    </th>
                                    <th className="px-6 py-4 text-center text-sm font-semibold text-blue-700 border-b border-blue-200 bg-blue-100">
                                        <div className="flex flex-col items-center">
                                            <span>Airfront</span>
                                            <span className="text-xs font-normal text-blue-600 mt-1">Recommended</span>
                                        </div>
                                    </th>
                                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 border-b border-gray-200">
                                        Typical AI IVR
                                    </th>
                                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700 border-b border-gray-200">
                                        Third-Party Answering Service
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="bg-white divide-y divide-gray-100">
                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Conversational AI</td>
                                    <td className="px-6 py-4 text-sm text-center font-medium text-gray-900 bg-blue-50/50">
                                        Natural, two-way dialogue
                                    </td>
                                    <td className="px-6 py-4 text-sm text-center text-gray-600">Menu trees</td>
                                    <td className="px-6 py-4 text-sm text-center text-gray-600">Human but inconsistent</td>
                                </tr>

                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Books directly in FSM</td>
                                    <td className="px-6 py-4 text-sm text-center font-medium text-gray-900 bg-blue-50/50">
                                        <div className="flex justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="h-5 w-5 text-green-600"
                                            >
                                                <path d="M20 6 9 17l-5-5"></path>
                                            </svg>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-center text-gray-600">Generates tickets</td>
                                    <td className="px-6 py-4 text-sm text-center text-gray-600">Takes a message</td>
                                </tr>

                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Built-in CRM + sentiment</td>
                                    <td className="px-6 py-4 text-sm text-center font-medium text-gray-900 bg-blue-50/50">
                                        Free, automatic
                                    </td>
                                    <td className="px-6 py-4 text-sm text-center text-gray-600">
                                        <div className="flex justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="h-5 w-5 text-gray-400"
                                            >
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-center text-gray-600">
                                        <div className="flex justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="h-5 w-5 text-gray-400"
                                            >
                                                <path d="M18 6 6 18"></path>
                                                <path d="m6 6 12 12"></path>
                                            </svg>
                                        </div>
                                    </td>
                                </tr>

                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Bilingual (EN/ES)</td>
                                    <td className="px-6 py-4 text-sm text-center font-medium text-gray-900 bg-blue-50/50">Included</td>
                                    <td className="px-6 py-4 text-sm text-center text-gray-600">Extra cost</td>
                                    <td className="px-6 py-4 text-sm text-center text-gray-600">Often English-only</td>
                                </tr>

                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Spam Call Protection</td>
                                    <td className="px-6 py-4 text-sm text-center font-medium text-gray-900 bg-blue-50/50">AI-powered filtering</td>
                                    <td className="px-6 py-4 text-sm text-center text-gray-600">None</td>
                                    <td className="px-6 py-4 text-sm text-center text-gray-600">Manual screening</td>
                                </tr>

                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Pricing</td>
                                    <td className="px-6 py-4 text-sm text-center font-medium text-gray-900 bg-blue-50/50">Flat monthly</td>
                                    <td className="px-6 py-4 text-sm text-center text-gray-600">Per-minute fees</td>
                                    <td className="px-6 py-4 text-sm text-center text-gray-600">Per-call fees</td>
                                </tr>

                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Setup</td>
                                    <td className="px-6 py-4 text-sm text-center font-medium text-gray-900 bg-blue-50/50">
                                        Zero-config; trained from your call recordings
                                    </td>
                                    <td className="px-6 py-4 text-sm text-center text-gray-600">Complex IVR build</td>
                                    <td className="px-6 py-4 text-sm text-center text-gray-600">Manual</td>
                                </tr>

                                <tr className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Onboarding</td>
                                    <td className="px-6 py-4 text-sm text-center font-medium text-gray-900 bg-blue-50/50">White-glove</td>
                                    <td className="px-6 py-4 text-sm text-center text-gray-600">DIY</td>
                                    <td className="px-6 py-4 text-sm text-center text-gray-600">Limited</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-6 py-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5 text-blue-600"
                        >
                            <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        <p className="text-lg text-gray-700 font-medium">
                            Airfront combines the best of AI technology with white-glove service
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default WhyBeats;