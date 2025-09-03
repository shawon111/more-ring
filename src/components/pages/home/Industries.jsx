import { ArrowRight, Briefcase, House, Stethoscope, Wrench } from "lucide-react";

const Industries = () => {
    return (
        <section id="industries" className="py-24 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Built for Service Businesses That Can&apos;t Afford to Miss Calls
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Industry-specific AI that understands your business and speaks your language
                    </p>
                </div>

                {/* Industry Cards */}
                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Home Services */}
                    <a
                        href="/industries/home-services/"
                        className="group relative rounded-2xl border-2 border-gray-200 p-6 transition-all hover:bg-blue-100 hover:border-blue-300 bg-blue-50"
                    >
                        <div className="space-y-4">
                            <div className="inline-flex rounded-lg p-3 bg-blue-100 text-blue-600">
                                <House size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Home Services</h3>
                                <p className="text-sm text-gray-600">HVAC, Plumbing & Electrical</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm font-semibold text-gray-900">
                                    $650,000 lost annually from missed calls
                                </p>
                                <p className="text-sm text-gray-600">20-30% of service calls go unanswered</p>
                            </div>
                            <div className="flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform">
                                <span className="text-blue-600">Learn More</span>
                                <ArrowRight className="ml-1 h-4 w-4 text-blue-600" size={16} />
                            </div>
                        </div>
                    </a>

                    {/* Healthcare Services */}
                    <a
                        href="/industries/dental/"
                        className="group relative rounded-2xl border-2 border-gray-200 p-6 transition-all hover:bg-green-100 hover:border-green-300 bg-green-50"
                    >
                        <div className="space-y-4">
                            <div className="inline-flex rounded-lg p-3 bg-green-100 text-green-600">
                                <Stethoscope size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Healthcare Services</h3>
                                <p className="text-sm text-gray-600">Dental & Veterinary Practices</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm font-semibold text-gray-900">
                                    $10,000 lifetime value per dental patient
                                </p>
                                <p className="text-sm text-gray-600">
                                    32% of calls unanswered, 68% after hours
                                </p>
                            </div>
                            <div className="flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform">
                                <span className="text-green-600">Learn More</span>
                                <ArrowRight className="ml-1 h-4 w-4 text-green-600" size={16} />
                            </div>
                        </div>
                    </a>

                    {/* Professional Services */}
                    <a
                        href="/industries/legal/"
                        className="group relative rounded-2xl border-2 border-gray-200 p-6 transition-all hover:bg-purple-100 hover:border-purple-300 bg-purple-50"
                    >
                        <div className="space-y-4">
                            <div className="inline-flex rounded-lg p-3 bg-purple-100 text-purple-600">
                                <Briefcase size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Professional Services</h3>
                                <p className="text-sm text-gray-600">Law Firms & Insurance Agencies</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm font-semibold text-gray-900">
                                    78% of clients hire whoever responds first
                                </p>
                                <p className="text-sm text-gray-600">Only 35% of law firms answer after hours</p>
                            </div>
                            <div className="flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform">
                                <span className="text-purple-600">Learn More</span>
                                <ArrowRight className="ml-1 h-4 w-4 text-purple-600" size={16} />
                            </div>
                        </div>
                    </a>

                    {/* Automotive Services */}
                    <a
                        href="/industries/automotive/"
                        className="group relative rounded-2xl border-2 border-gray-200 p-6 transition-all hover:bg-orange-100 hover:border-orange-300 bg-orange-50"
                    >
                        <div className="space-y-4">
                            <div className="inline-flex rounded-lg p-3 bg-orange-100 text-orange-600">
                                <Wrench size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Automotive Services</h3>
                                <p className="text-sm text-gray-600">Independent Repair Shops</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm font-semibold text-gray-900">
                                    $650,000 lost from 20 missed calls daily
                                </p>
                                <p className="text-sm text-gray-600">
                                    Customers call the next shop in seconds
                                </p>
                            </div>
                            <div className="flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform">
                                <span className="text-orange-600">Learn More</span>
                                <ArrowRight className="ml-1 h-4 w-4 text-orange-600" size={16} />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Industries;