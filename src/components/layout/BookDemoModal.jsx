"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { X } from "lucide-react"

const benefits = [
  {
    title: "Lightning Fast Response",
    description: "Answer every call instantly, 24/7. Never miss a lead again.",
    iconBg: "bg-blue-500",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Maximize Revenue",
    description: "Qualify every lead and book more appointments automatically.",
    iconBg: "bg-green-500",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Professional & Reliable",
    description: "AI-powered receptionist that sounds natural and handles complex conversations.",
    iconBg: "bg-purple-500",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function BookDemoModal({open,setOpen}) {

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
          Book a Demo
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-7xl w-full h-[90vh] max-h-[700px] p-0 overflow-hidden rounded-2xl shadow-2xl">
        <div className="flex h-full relative">
          {/* Left side - Benefits */}
          <div className="hidden lg:flex w-2/5 bg-gray-900 p-8 flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white"></div>
              <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-white"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-white text-2xl font-bold mb-8">Why Choose Airfront?</h3>
              <div className="space-y-6">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className={`w-10 h-10 ${b.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      {b.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{b.title}</h4>
                      <p className="text-gray-400 text-sm">{b.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="flex-1 bg-white relative overflow-y-auto">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 transition-colors z-20"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="h-full flex items-center justify-center p-8">
              <div className="w-full max-w-lg">
                <div className="text-center mb-8">
                  {/* Logo + Title */}
                  <div className="flex justify-center mb-4">
                    <span className="text-2xl font-bold text-black">Airfront</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-2">Book a Demo</h2>
                  <p className="text-gray-600">See how Airfront can transform your business in just 15 minutes</p>
                </div>

                <div className="space-y-6">
                  <div className="transition-all duration-300">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Email *</label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      className="flex h-10 w-full rounded-md border border-gray-300 px-4 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <button className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
