import {
  Home,
  Stethoscope,
  Scale,
  Shield,
  Car,
} from "lucide-react"; // from lucide-react package
import Link from "next/link";

const industries = [
  {
    href: "/industries/home-services/",
    icon: Home,
    title: "Home Services",
    description: "HVAC, Plumbing, Electrical",
  },
  {
    href: "/industries/dental/",
    icon: Stethoscope,
    title: "Dental Practices",
    description: "General & Specialty Dental",
  },
  {
    href: "/industries/legal/",
    icon: Scale,
    title: "Law Firms",
    description: "Small to Mid-size Firms",
  },
  {
    href: "/industries/veterinary/",
    icon: Stethoscope,
    title: "Veterinary Clinics",
    description: "Animal Hospitals & Clinics",
  },
  {
    href: "/industries/insurance/",
    icon: Shield,
    title: "Insurance Agencies",
    description: "Independent Agencies",
  },
  {
    href: "/industries/automotive/",
    icon: Car,
    title: "Auto Repair",
    description: "Repair Shops & Dealerships",
  },
];

export default function IndustriesDropdown() {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[600px] rounded-lg bg-white shadow-lg border border-gray-200 p-4 z-50">
      <div className="grid grid-cols-2 gap-2">
        {industries.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className="flex items-start gap-3 px-3 py-3 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <item.icon className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <div className="font-medium text-gray-900">{item.title}</div>
              <div className="text-sm text-gray-500">{item.description}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
