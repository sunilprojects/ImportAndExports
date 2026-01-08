import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Subramanya S',
      text: 'Received a consignment of tomato powder and is very pleased with it. The powder arrived in good condition, has a fresh flavor and perfect color, and performs well in recipes, tasting just like fresh tomatoes.',
      rating: 5
    },
    {
      name: 'Sunil Sky',
      text: 'The packing was good and all bags were in good condition. The dried vegetable flakes and fruit powders are all good in terms of flavor and quality. Recipes using these products are colorful and well-received by clients.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">Real feedback from satisfied clients worldwide</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <p className="font-semibold text-gray-900">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;