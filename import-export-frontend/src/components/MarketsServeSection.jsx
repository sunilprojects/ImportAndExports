import React from 'react';
import {  Globe } from 'lucide-react';

const MarketsServeSection = () => {
  const markets = [
    {
      region: 'UAE',
      countries: ['Dubai', 'Abu Dhabi', 'Sharjah'],
      flag: '🇦🇪'
    },
    {
      region: 'United Kingdom',
      countries: ['London', 'Manchester', 'Birmingham'],
      flag: '🇬🇧'
    },
    {
      region: 'Europe',
      countries: ['Germany', 'France', 'Netherlands'],
      flag: '🇪🇺'
    },
    {
      region: 'Middle East',
      countries: ['Saudi Arabia', 'Qatar', 'Oman'],
      flag: '🌍'
    }
  ];


  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Globe className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-900">
              Markets We <span className="text-blue-600">Serve</span>
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by buyers across major global markets with proven export track record
          </p>
        </div>

        {/* Markets Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {markets.map((market, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-blue-100 hover:border-blue-300"
            >
              {/* Flag/Region Header */}
              <div className="text-center mb-4">
                <div className="text-5xl mb-2">{market.flag}</div>
                <h3 className="text-xl font-bold text-gray-900">
                  {market.region}
                </h3>
              </div>

              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MarketsServeSection;