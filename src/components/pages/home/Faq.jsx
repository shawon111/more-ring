import React from "react";
import {
  Clock,
  Phone,
  Database,
  Globe,
  Shield,
  CreditCard,
  MessageCircle,
} from "lucide-react";

// FAQ data array
const faqs = [
  {
    question: "How long does setup take?",
    answer:
      "About 15 minutes. Just share a few call recordings, and our AI learns your business's unique needs to provide personalized responses from day one.",
    icon: Clock,
    color: "bg-blue-100 text-blue-600 border-blue-200",
  },
  {
    question: "What if a call is too complex?",
    answer:
      "Airfront can warm-transfer to your team seamlessly. You define the escalation triggers, and Airfront handles the handoff smoothly, ensuring no customer is left frustrated.",
    icon: Phone,
    color: "bg-green-100 text-green-600 border-green-200",
  },
  {
    question: "Do I need new phone numbers?",
    answer:
      "No. Simply forward or port your existing lines to Airfront. Keep your current numbers—no need to update marketing materials or retrain customers.",
    icon: Phone,
    color: "bg-purple-100 text-purple-600 border-purple-200",
  },
  {
    question: "How does the CRM integration work?",
    answer:
      "Airfront automatically logs all calls, captures key details, and syncs with popular CRMs like HubSpot, Salesforce, and ServiceTitan. Export data anytime via CSV for complete flexibility.",
    icon: Database,
    color: "bg-indigo-100 text-indigo-600 border-indigo-200",
  },
  {
    question: "Is Spanish support included?",
    answer:
      "Yes! Spanish support is included in all plans. Serve your entire customer base effectively with seamless bilingual conversations.",
    icon: Globe,
    color: "bg-orange-100 text-orange-600 border-orange-200",
  },
  {
    question: "How does Airfront handle spam calls?",
    answer:
      "Our AI instantly identifies and filters spam, robocalls, and telemarketers—blocking 95% automatically. Real customers always get through, and you can review filtered calls anytime.",
    icon: Shield,
    color: "bg-red-100 text-red-600 border-red-200",
  },
  {
    question: "Do spam calls count toward my monthly limit?",
    answer:
      "No. Calls flagged as spam are free and don't count against your monthly allowance. With proper setup, you're protected automatically.",
    icon: CreditCard,
    color: "bg-green-100 text-green-600 border-green-200",
  },
  {
    question: "Can I change plans anytime?",
    answer:
      "Absolutely. Upgrade or downgrade anytime with changes taking effect at your next billing cycle. We'll prorate any differences fairly. No contracts, no cancellation fees.",
    icon: MessageCircle,
    color: "bg-blue-100 text-blue-600 border-blue-200",
  },
];

const FAQCard = ({ faq }) => {
  const Icon = faq.icon;
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:border-gray-200">
      <div className="flex items-start gap-4">
        <div
          className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center border transition-transform group-hover:scale-110 ${faq.color}`}
        >
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {faq.question}
          </h3>
          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know about Airfront
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq, idx) => (
              <FAQCard key={idx} faq={faq} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Have more questions?
            <a
              href="mailto:support@lysto.ai"
              className="ml-1 font-medium text-blue-600 hover:text-blue-700"
            >
              Contact our team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Faq;
