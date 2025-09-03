import React from 'react';

const LogoCarousel = () => {
    return (
        <div className="flex animate-scroll">
            {[
                { label: "HVAC", icon: "home" },
                { label: "Plumbing", icon: "wrench" },
                { label: "Electrical", icon: "building" },
                { label: "Dental", icon: "stethoscope" },
                { label: "Legal", icon: "scale" },
                { label: "Veterinary", icon: "stethoscope" },
                { label: "Insurance", icon: "shield" },
                { label: "Auto Repair", icon: "car" },
            ]
                .concat([
                    // duplicate list for seamless loop
                    { label: "HVAC", icon: "home" },
                    { label: "Plumbing", icon: "wrench" },
                    { label: "Electrical", icon: "building" },
                    { label: "Dental", icon: "stethoscope" },
                    { label: "Legal", icon: "scale" },
                    { label: "Veterinary", icon: "stethoscope" },
                    { label: "Insurance", icon: "shield" },
                    { label: "Auto Repair", icon: "car" },
                ])
                .map((item, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-2 px-6 py-3 whitespace-nowrap"
                    >
                        <span className="h-4 w-4 text-gray-400">
                            {/* Swap out for lucide-react icons if you want */}
                            {item.icon}
                        </span>
                        <span className="text-sm text-gray-500">{item.label}</span>
                    </div>
                ))}
        </div>
    );
};

export default LogoCarousel;