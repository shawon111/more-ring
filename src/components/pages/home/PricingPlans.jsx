import { CircleCheck } from "lucide-react";

const PricingPlans = () => {
    
    return (
        <section className="py-24 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-[#2D3748] sm:text-4xl">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="mt-4 text-lg text-[#2D3748]">
                        No setup fees. Cancel anytime.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Solo Plan */}
                    <div className="rounded-md text-card-foreground shadow-sm hover:shadow-md transition-shadow duration-200 relative flex flex-col bg-white border border-gray-200">
                        <div className="flex flex-col space-y-1.5 p-6 pb-8 pt-10">
                            <h3 className="tracking-tight text-2xl font-bold">Solo</h3>
                            <div className="mt-4">
                                <div className="font-bold text-gray-900 text-5xl">
                                    30<span className="text-2xl font-normal text-gray-600 ml-2">calls</span>
                                </div>
                                <div className="mt-2">
                                    <span className="text-2xl font-semibold text-gray-700">$97</span>
                                    <span className="text-gray-600">/mo</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 pt-0 pb-8 flex-grow">
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600">30 inbound calls/month included</span>
                                </li>
                                <li className="flex items-start">
                                    <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600">English + Spanish support</span>
                                </li>
                                <li className="flex items-start">
                                    <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600">Custom greetings</span>
                                </li>
                                <li className="flex items-start">
                                    <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600">Standard integrations</span>
                                </li>
                                <li className="flex items-start">
                                    <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600">Email support</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center p-6 pt-0">
                            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-full px-6 py-3 rounded-lg font-semibold transition-colors bg-white text-black border-2 border-black hover:bg-gray-50">
                                Book a Demo
                            </button>
                        </div>
                    </div>

                    {/* Starter Plan (Most Popular) */}
                    <div className="rounded-md text-card-foreground hover:shadow-md transition-shadow duration-200 relative flex flex-col ring-2 ring-blue-500 shadow-xl bg-blue-50 border border-gray-200">
                        <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-blue-600 px-3 py-2 text-center text-sm font-medium text-white">
                            Most Popular
                        </div>
                        <div className="flex flex-col space-y-1.5 p-6 pb-8 pt-10">
                            <h3 className="tracking-tight text-2xl font-bold">Starter</h3>
                            <div className="mt-4">
                                <div className="font-bold text-gray-900 text-5xl">
                                    100<span className="text-2xl font-normal text-gray-600 ml-2">calls</span>
                                </div>
                                <div className="mt-2">
                                    <span className="text-2xl font-semibold text-gray-700">$197</span>
                                    <span className="text-gray-600">/mo</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 pt-0 pb-8 flex-grow">
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600">100 inbound calls/month included</span>
                                </li>
                                <li className="flex items-start">
                                    <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600">22+ languages supported</span>
                                </li>
                                <li className="flex items-start">
                                    <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600">AI spam call filtering</span>
                                </li>
                                <li className="flex items-start">
                                    <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600">Custom greetings</span>
                                </li>
                                <li className="flex items-start">
                                    <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600">Standard integrations</span>
                                </li>
                                <li className="flex items-start">
                                    <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600">Advanced analytics</span>
                                </li>
                                <li className="flex items-start">
                                    <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600">Call recordings</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center p-6 pt-0">
                            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-full px-6 py-3 rounded-lg font-semibold transition-colors bg-black text-white hover:bg-gray-800">
                                Book a Demo
                            </button>
                        </div>
                    </div>

                    {/* Pro Plan */}
                    <div className="rounded-md text-card-foreground shadow-sm hover:shadow-md transition-shadow duration-200 relative flex flex-col bg-white border border-gray-200">
                        <div className="flex flex-col space-y-1.5 p-6 pb-8 pt-10">
                            <h3 className="tracking-tight text-2xl font-bold">Pro</h3>
                            <div className="mt-4">
                                <div className="font-bold text-gray-900 text-5xl">
                                    300<span className="text-2xl font-normal text-gray-600 ml-2">calls</span>
                                </div>
                                <div className="mt-2">
                                    <span className="text-2xl font-semibold text-gray-700">$897</span>
                                    <span className="text-gray-600">/mo</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 pt-0 pb-8 flex-grow">
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600">Everything in Starter, plus:</span>
                                </li>
                                <li className="flex items-start">
                                    <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600">300 inbound calls/month included</span>
                                </li>
                                <li className="flex items-start">
                                    <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600">Dedicated Slack channel support</span>
                                </li>
                                <li className="flex items-start">
                                    <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600">Dedicated Customer Success Manager</span>
                                </li>
                                <li className="flex items-start">
                                    <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600">Monthly performance reviews</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center p-6 pt-0">
                            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-full px-6 py-3 rounded-lg font-semibold transition-colors bg-white text-black border-2 border-black hover:bg-gray-50">
                                Book a Demo
                            </button>
                        </div>
                    </div>

                    {/* Portfolio Plan */}
                    <div className="rounded-md text-card-foreground shadow-sm hover:shadow-md transition-shadow duration-200 relative flex flex-col bg-white border border-gray-200">
                        <div className="flex flex-col space-y-1.5 p-6 pb-8 pt-10">
                            <h3 className="tracking-tight text-2xl font-bold">Portfolio</h3>
                            <div className="mt-4">
                                <div className="font-bold text-gray-900 text-5xl">Custom</div>
                                <div className="mt-2">
                                    <span className="text-2xl font-semibold text-gray-700">Custom</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 pt-0 pb-8 flex-grow">
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600">Everything in Pro, plus:</span>
                                </li>
                                <li className="flex items-start">
                                    <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600">5-100 locations</span>
                                </li>
                                <li className="flex items-start">
                                    <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600">Custom call volume</span>
                                </li>
                                <li className="flex items-start">
                                    <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600">Custom integrations</span>
                                </li>
                                <li className="flex items-start">
                                    <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600">White-label options</span>
                                </li>
                                <li className="flex items-start">
                                    <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600">SLA guarantees</span>
                                </li>
                                <li className="flex items-start">
                                    <CircleCheck className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-600">Advanced reporting</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center p-6 pt-0">
                            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-full px-6 py-3 rounded-lg font-semibold transition-colors bg-white text-black border-2 border-black hover:bg-gray-50">
                                Contact Sales
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center space-y-3">
                    <p className="text-sm text-gray-600">
                        All plans include automatic CRM updates and 24/7 availability
                    </p>
                    <p className="text-sm text-gray-600">
                        Additional calls beyond included package: <span className="font-semibold">$5 per call</span>
                    </p>
                    <div className="mt-6 pt-6 border-t border-gray-200">
                        <p className="text-base text-gray-700">
                            <span className="font-medium">The Bottom Line:</span> Airfront pays for itself with just 1-2 recovered emergency calls per month.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};



export default PricingPlans;