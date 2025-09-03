import React from 'react';

const CostCalculator = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-5xl">
                    {/* Heading */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                            The Cost of a Missed Call
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                            Every unanswered call is a lost opportunity. See how much revenue
                            walks away when your phone goes to voicemail.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                                    {/* Phone Icon */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-red-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-black">80%</div>
                                    <div className="text-sm text-gray-600">Won&apos;t leave voicemail</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                    {/* Trending Down Icon */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-blue-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                                        <polyline points="16 17 22 17 22 11" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-black">62%</div>
                                    <div className="text-sm text-gray-600">Calls go unanswered</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                    {/* Clock Icon */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-green-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-black">$1,200+</div>
                                    <div className="text-sm text-gray-600">Lost per weekend call</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Calculator */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-bold text-black">Calculate Your Lost Revenue</h3>
                            <p className="text-sm text-gray-600 mt-1">
                                Customize the numbers for your business
                            </p>
                        </div>

                        <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                            {/* Industry */}
                            <div>
                                <label
                                    htmlFor="industry"
                                    className="text-sm text-gray-700 font-medium"
                                >
                                    Select your industry
                                </label>
                                <select
                                    id="industry"
                                    className="mt-1 block w-full rounded-md bg-gray-50 border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none focus:bg-white"
                                    defaultValue="hvac"
                                >
                                    <option value="hvac">HVAC/Plumbing/Electrical</option>
                                    <option value="dental">Dental Practice</option>
                                    <option value="veterinary">Veterinary Clinic</option>
                                    <option value="legal">Law Firm (2-10 attorneys)</option>
                                    <option value="insurance">Insurance Agency</option>
                                    <option value="automotive">Auto Repair Shop</option>
                                </select>
                            </div>

                            {/* Missed calls */}
                            <div>
                                <label
                                    htmlFor="missed-calls"
                                    className="text-sm text-gray-700 font-medium"
                                >
                                    Missed calls per month
                                </label>
                                <input
                                    type="number"
                                    id="missed-calls"
                                    defaultValue={12}
                                    className="mt-1 flex h-10 w-full rounded-md border px-3 py-2 text-sm bg-gray-50 border-gray-300 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>

                            {/* Avg job value */}
                            <div>
                                <label
                                    htmlFor="avg-job-value"
                                    className="text-sm text-gray-700 font-medium"
                                >
                                    Average job value ($)
                                </label>
                                <input
                                    type="number"
                                    id="avg-job-value"
                                    defaultValue={350}
                                    className="mt-1 flex h-10 w-full rounded-md border px-3 py-2 text-sm bg-gray-50 border-gray-300 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                                />
                            </div>

                            {/* Emergency multiplier */}
                            <div>
                                <label
                                    htmlFor="emergency-multiplier"
                                    className="text-sm text-gray-700 font-medium"
                                >
                                    Emergency rate multiplier
                                </label>
                                <select
                                    id="emergency-multiplier"
                                    className="mt-1 block w-full rounded-md bg-gray-50 border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none focus:bg-white"
                                >
                                    <option value="1.5">1.5x</option>
                                    <option value="2">2x</option>
                                    <option value="2.5">2.5x</option>
                                    <option value="3">3x</option>
                                </select>
                            </div>

                            {/* Results */}
                            <div className="sm:col-span-2 border-t-2 border-blue-100 pt-3 mt-2">
                                <div className="bg-blue-50 rounded-lg p-4 sm:flex sm:items-center sm:justify-between">
                                    <div className="sm:flex sm:gap-8">
                                        <div className="mb-2 sm:mb-0">
                                            <div className="text-xs text-gray-600">Emergency calls</div>
                                            <div className="font-semibold">$1,890</div>
                                        </div>
                                        <div className="mb-3 sm:mb-0">
                                            <div className="text-xs text-gray-600">Monthly lost</div>
                                            <div className="text-lg font-bold text-blue-700">$6,090</div>
                                        </div>
                                    </div>
                                    <div className="text-center sm:text-right">
                                        <div className="text-xs text-gray-600">Annual impact</div>
                                        <div className="text-2xl font-bold text-blue-800">$73,080</div>
                                    </div>
                                </div>
                                <p className="mt-2 text-xs text-gray-500 text-center">
                                    * Based on industry research
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CostCalculator;