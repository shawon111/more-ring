import HiddenCostSection from '@/components/pages/industries/HiddenCostSection';
import IndustryHero from '@/components/pages/industries/IndustryHero';
import React from 'react';
import { Phone, Clock, TrendingDown, Users } from "lucide-react";
import HowItWorksSection from '@/components/pages/industries/HowItWorksSection';
import IndustryQuotesSection from '@/components/pages/industries/IndustryQuotesSection';
import ROICalculator from '@/components/pages/industries/ROICalculator';
import PricingPlansIndustry from '@/components/pages/industries/PricingPlansIndustry';

const Industry = () => {
    const heroContent = {
        title: "AI Receptionist for HVAC, Plumbing & Electrical Contractors",
        subtitle: "Never Miss Another $600 Emergency Call",
        stat: {
            value: "$115,200",
            description: "Average annual revenue lost from missed calls",
        },
        quote:
            "Our research found that 27% of calls to home-services businesses are not answered. Small and mid-sized businesses miss about 62% of calls, and 80% of callers sent to voicemail won't leave a message.",
        source:
            "- Invoca & Numa - How Much Missed Sales Calls Cost Home Services Businesses",
        primaryCta: {
            label: "How it Works",
            onClick: () => console.log("How it Works clicked"),
        },
        secondaryCta: {
            label: "Calculate Your ROI",
            onClick: () => console.log("Calculate ROI clicked"),
        },
    };
    const hiddenCostContent = {
        heading: "The Hidden Cost of Missed Calls",
        subheading:
            "Your phone rings at 2 AM. It's a burst pipe emergency worth $1,200. But you're asleep, and they call your competitor instead.",
        cards: [
            {
                icon: Phone,
                title: "Missed Emergency Calls",
                description:
                    "80% of callers sent to voicemail won't leave a message - missing critical opportunities",
                stat: "80% won't leave VM",
            },
            {
                icon: Clock,
                title: "After-Hours Revenue",
                description:
                    "Small and mid-sized businesses miss about 62% of calls, leading to lost customers",
                stat: "62% missed calls",
            },
            {
                icon: TrendingDown,
                title: "Customer Loss",
                description:
                    "27% of calls to home-services businesses are not answered - direct revenue loss",
                stat: "27% not answered",
            },
            {
                icon: Users,
                title: "Staffing Costs",
                description: "Hiring dedicated phone staff costs $35,000+ annually",
                stat: "$35K/year",
            },
        ],
    };
    const howItWorksContent = {
        heading: "How Airfront Helps Home Services",
        subheading:
            "Built specifically for the unique needs of HVAC, plumbing, and electrical contractors",
        features: [
            {
                title: "24/7 Emergency Response",
                description: "Answer every call, even at 2 AM on weekends",
            },
            {
                title: "Intelligent Dispatch",
                description: "Determine urgency and route appropriately",
            },
            {
                title: "Job Qualification",
                description: "Capture address, issue details, and equipment information",
            },
            {
                title: "Direct Booking",
                description: "Schedule appointments directly in your system",
            },
            {
                title: "Bilingual Support",
                description:
                    "Serve Spanish-speaking customers with 30% better conversion",
            },
            {
                title: "Spam Protection",
                description: "Block 95% of robocalls automatically",
            },
        ],
        integrationsHeading: "Seamless Integration with Your Existing Tools",
        integrations: ["ServiceTitan", "Housecall Pro", "Jobber", "FieldEdge"],
    };

    const industryQuotesContent = {
        heading: "What Industry Leaders Say",
        metric: {
            value: "$24,000",
            description: "potential annual revenue lost from 5 missed calls weekly",
        },
        quote: {
            text: "“Our research found that 27% of calls to home-services businesses are not answered. Small and mid-sized businesses miss about 62% of calls, and 80% of callers sent to voicemail won't leave a message.”",
            author: "Invoca & Numa Research",
            source: "How Much Missed Sales Calls Cost Home Services Businesses",
        },
    };

    const pricingContent = {
        heading: "ROI That Makes Sense",
        subheading: "Break-even with just 1 emergency call recovered per month"
    }

    return (
        <div>
            <IndustryHero content={heroContent} />
            <HiddenCostSection content={hiddenCostContent} />
            <HowItWorksSection content={howItWorksContent} />
            <IndustryQuotesSection content={industryQuotesContent} />
            <ROICalculator />
            <PricingPlansIndustry content={pricingContent} />
        </div>
    );
};

export default Industry;