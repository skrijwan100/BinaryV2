import React, { useState } from "react";
import PricingCard from "../components/PricingCard.jsx";
import pricingData from "../data/pricingData.json";

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanClick = (plan) => {
    if (plan.disabled) return;

    setSelectedPlan(plan.id); 

    console.log("Selected Plan:", plan);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold">Upgrade your plan</h1>
        <p className="text-gray-400 mt-2">
          Choose the best plan for your RAG system
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {pricingData.plans.map((plan) => (
          <PricingCard
            key={plan.id}
            {...plan}
            isSelected={selectedPlan === plan.id}
            onClick={() => handlePlanClick(plan)}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
