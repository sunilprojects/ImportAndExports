import React from "react";

const MoringaNewsSection = () => {
  const news = [
    {
      title: "Moringa Powder Gains Popularity as a Superfood",
      source: "Health Today",
      description:
        "Moringa powder is being recognized globally for its high nutritional value and antioxidant properties.",
      link: "#",
    },
    {
      title: "Why Moringa Powder is the Future of Plant Nutrition",
      source: "Nutrition Weekly",
      description:
        "Experts highlight moringa as a sustainable and powerful plant-based supplement.",
      link: "#",
    },
    {
      title: "Rising Demand for Organic Moringa Products",
      source: "Agri News",
      description:
        "The global market for moringa powder is expanding due to increased health awareness.",
      link: "#",
    },
    {
      title: "Moringa: The Green Gold for Health & Wellness",
      source: "Wellness Journal",
      description:
        "From immunity boosting to energy enhancement, moringa continues to dominate health trends.",
      link: "#",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Moringa in the News
          </h2>
          <p className="text-lg text-gray-600">
            Media coverage & health articles
          </p>
        </div>

        {/* Scrolling News */}
        <div className="relative">
          <div
            className="flex gap-6 whitespace-nowrap hover:[animation-play-state:paused]"
            style={{
              animation: "scroll 30s linear infinite",
            }}
          >
            {[...news, ...news].map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="min-w-[320px] max-w-[320px] bg-white p-6 rounded-xl
                           shadow-md hover:shadow-lg transition block"
              >
                <p className="text-xs text-green-600 font-semibold mb-2">
                  {item.source}
                </p>
                <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {item.description}
                </p>
                <p className="text-sm text-blue-600 mt-4 font-semibold">
                  Read More →
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Inline Animation */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </section>
  );
};

export default MoringaNewsSection;
