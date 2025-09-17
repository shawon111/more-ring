"use client"
import { useState, useEffect } from "react";

const ROICalculator = () => {
  const [missedCalls, setMissedCalls] = useState(10);
  const [avgValue, setAvgValue] = useState(600);
  const [emergencyCalls, setEmergencyCalls] = useState(0);
  const [monthlyLost, setMonthlyLost] = useState(0);
  const [annualImpact, setAnnualImpact] = useState(0);

  useEffect(() => {
    // Example calculations
    const emergency = missedCalls * avgValue * 0.375; // 37.5% assumed emergency calls
    const monthly = missedCalls * avgValue;
    const annual = monthly * 12;

    setEmergencyCalls(emergency);
    setMonthlyLost(monthly);
    setAnnualImpact(annual);
  }, [missedCalls, avgValue]);

  return (
    <section id="roi-calculator" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 lg:p-10">
            {/* Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-black">
                Calculate Your Lost Revenue
              </h3>
              <p className="text-base text-gray-600 mt-2">
                See how much revenue you're losing from missed calls
              </p>
            </div>

            {/* Inputs */}
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="missed-calls"
                  className="text-sm leading-none text-gray-700 font-medium"
                >
                  Missed calls per month
                </label>
                <input
                  type="number"
                  id="missed-calls"
                  value={missedCalls}
                  onChange={(e) => setMissedCalls(Number(e.target.value))}
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm mt-1 bg-gray-50 border-gray-300 focus:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>

              <div>
                <label
                  htmlFor="avg-value"
                  className="text-sm leading-none text-gray-700 font-medium"
                >
                  Average job value ($)
                </label>
                <input
                  type="number"
                  id="avg-value"
                  value={avgValue}
                  onChange={(e) => setAvgValue(Number(e.target.value))}
                  className="flex h-10 w-full rounded-md border px-3 py-2 text-sm mt-1 bg-gray-50 border-gray-300 focus:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
              </div>

              {/* Results */}
              <div className="sm:col-span-2 border-t-2 border-blue-100 pt-6 mt-4">
                <div className="bg-blue-50 rounded-lg p-6 sm:flex sm:items-center sm:justify-between">
                  <div className="sm:flex sm:gap-8">
                    <div className="mb-2 sm:mb-0">
                      <div className="text-sm text-gray-600">Emergency calls</div>
                      <div className="text-lg font-semibold text-blue-600">
                        ${emergencyCalls.toLocaleString()}
                      </div>
                    </div>
                    <div className="mb-3 sm:mb-0">
                      <div className="text-sm text-gray-600">Monthly lost</div>
                      <div className="text-xl font-bold text-blue-700">
                        ${monthlyLost.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className="text-center sm:text-right">
                    <div className="text-sm text-gray-600">Annual impact</div>
                    <div className="text-3xl font-bold text-blue-800">
                      ${annualImpact.toLocaleString()}
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-gray-500 text-center">
                  * This is revenue going directly to your competitors
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
