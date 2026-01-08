import React from 'react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: '🥦',
      title: 'Plant Based',
      description: 'Plant-based protein-rich products are highly valued for their nutritional content and their ability to support a balanced diet.'
    },
    {
      icon: '🫘',
      title: 'Rich in Protein',
      description: 'Protein-rich products supporting a balanced diet, especially for those avoiding animal products.'
    },
    {
      icon: '⚡',
      title: 'Energy Booster',
      description: 'Natural energy-boosting ingredients to keep you active and healthy throughout the day.'
    },
    {
      icon: '🐾',
      title: 'Cruelty Free',
      description: 'Ethically sourced and cruelty-free products that align with sustainable and compassionate values.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Unlock the Natural Benefits of Our Products
          </h2>
          <p className="text-xl text-gray-600">
            Switch to a healthier lifestyle with nature's best offerings
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;