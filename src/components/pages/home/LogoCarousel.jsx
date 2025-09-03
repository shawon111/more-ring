import { Building, Car, House, Scale, Shield, Stethoscope, Wrench } from 'lucide-react';
import React from 'react';

const LogoCarousel = () => {
    return (
        <div className="flex animate-scroll">
            {[
                { label: "HVAC", icon: <House size={18} /> },
                { label: "Plumbing", icon: <Wrench size={18} /> },
                { label: "Electrical", icon: <Building size={18} /> },
                { label: "Dental", icon: <Stethoscope size={18}/> },
                { label: "Legal", icon: <Scale size={18} /> },
                { label: "Veterinary", icon: <Stethoscope size={18} /> },
                { label: "Insurance", icon: <Shield size={18} /> },
                { label: "Auto Repair", icon: <Car size={18} /> },
            ]
                .concat([
                    // duplicate list for seamless loop
                    { label: "HVAC", icon: <House size={18} /> },
                    { label: "Plumbing", icon: <Wrench size={18} /> },
                    { label: "Electrical", icon: <Building size={18} /> },
                    { label: "Dental", icon: <Stethoscope size={18}/> },
                    { label: "Legal", icon: <Scale size={18} /> },
                    { label: "Veterinary", icon: <Stethoscope size={18} /> },
                    { label: "Insurance", icon: <Shield size={18} /> },
                    { label: "Auto Repair", icon: <Car size={18} /> },
                ])
                .map((item, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-2 px-6 py-3 whitespace-nowrap"
                    >
                        <span className="text-gray-400">
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