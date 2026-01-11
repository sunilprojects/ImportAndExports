import React, { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const NewsSection = () => {
  const scrollRef = useRef(null);

  const news = [
    {
      title: "Moringa Powder: A Nutrient-Dense Superfood",
      source: "Wellness & Nutrition Review",
      description:
        "Moringa powder is known for its high antioxidant content, plant protein, and immune-boosting properties.",
      link: "#",
    },
    {
      title: "Onion Powder in Modern Food Processing",
      source: "Food Industry Digest",
      description:
        "Onion powder offers long shelf life, consistent flavor, and natural compounds beneficial for digestion.",
      link: "#",
    },
    {
      title: "Carrot Powder: Rich in Beta-Carotene",
      source: "Health Foods Journal",
      description:
        "Carrot powder supports eye health and skin nutrition and is widely used in health foods and beverages.",
      link: "#",
    },
    {
      title: "Beetroot Powder for Energy & Endurance",
      source: "Plant Wellness Weekly",
      description:
        "Beetroot powder is valued for improving stamina, circulation, and natural detox support.",
      link: "#",
    },
    {
      title: "Tomato Powder: Natural Color & Nutrition",
      source: "Agro Processing Today",
      description:
        "Tomato powder is rich in lycopene and used extensively in soups, sauces, and ready-to-eat foods.",
      link: "#",
    },
  ];

  /* Auto scroll */
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      container.scrollBy({ left: 360, behavior: "smooth" });

      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 10
      ) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  /* Manual scroll */
  const scroll = (direction) => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  return (
    <section id="insights" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Product Knowledge & Insights
          </h2>
          <p className="text-gray-600 mt-2">
            Informational highlights on natural vegetable powders
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center">

          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 z-10 p-2 bg-white border rounded-full
                       shadow hover:bg-gray-100 transition"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>

          {/* Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden scroll-smooth"
          >
            {[...news, ...news].map((item, index) => (
              <div
                key={index}
                className="w-[340px] shrink-0 bg-white rounded-xl border
                           p-6 shadow-sm hover:shadow-md transition"
              >
                <p className="text-xs font-semibold text-green-600 mb-2">
                  {item.source}
                </p>

                <h3 className="text-base font-semibold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 line-clamp-3">
                  {item.description}
                </p>

                <span className="inline-block mt-4 text-sm font-medium text-blue-600">
                  Learn more →
                </span>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 z-10 p-2 bg-white border rounded-full
                       shadow hover:bg-gray-100 transition"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>

        </div>
      </div>
    </section>
  );
};

export default NewsSection;
