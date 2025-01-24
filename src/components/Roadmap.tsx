import { Fish, Anchor, Shell, Waves, Crown } from 'lucide-react';

export default function Roadmap() {
  const stages = [
    {
      title: "Phase 1: Launch & Foundation",
      quarter: "Q1 2025",
      icon: Fish,
      status: "active",
      items: [
        "Token Launch on Major DEX Platforms",
        "CoinGecko & CoinMarketCap Listings",
        "Community Building Initiative",
        "Marketing Campaign Kickoff"
      ]
    },
    {
      title: "Phase 2: Growth & Expansion",
      quarter: "Q2 2025",
      icon: Waves,
      status: "upcoming",
      items: [
        "First CEX Partnership & Listing",
        "Staking Platform Development",
        "Community Governance Launch",
        "Strategic Partnerships"
      ]
    },
    {
      title: "Phase 3: Ecosystem Development",
      quarter: "Q3 2025",
      icon: Anchor,
      status: "upcoming",
      items: [
        "NFT Collection Launch",
        "Cross-Chain Bridge Implementation",
        "DeFi Platform Integration",
        "Enhanced Security Features"
      ]
    },
    {
      title: "Phase 4: Market Expansion",
      quarter: "Q4 2025",
      icon: Shell,
      status: "upcoming",
      items: [
        "Major Exchange Listings",
        "Mobile Wallet Release",
        "Payment Gateway Integration",
        "Global Marketing Campaign"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gray-50" id="roadmap">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Roadmap to Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our strategic journey towards becoming a leading force in the cryptocurrency space
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-[#1E90FF]" />

          {/* Timeline Items */}
          <div className="space-y-20">
            {stages.map((stage, index) => (
              <div key={index} className={`relative ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}>
                {/* Connection Line */}
                <div className="absolute top-0 left-4 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2">
                  <div className={`w-8 h-8 rounded-full border-4 ${
                    stage.status === 'active' 
                      ? 'border-[#FFD700] bg-[#1E90FF]' 
                      : 'border-[#1E90FF] bg-white'
                  }`} />
                </div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-[#1E90FF] flex items-center justify-center">
                          <stage.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{stage.title}</h3>
                        <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-[#1E90FF]/10 text-[#1E90FF]">
                          {stage.quarter}
                        </span>
                      </div>
                    </div>

                    {/* Milestones */}
                    <div className="space-y-3">
                      {stage.items.map((item, itemIndex) => (
                        <div 
                          key={itemIndex}
                          className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#1E90FF]" />
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <button className="inline-flex items-center gap-2 bg-[#1E90FF] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1570CD] transition-colors shadow-lg">
            <Crown className="w-5 h-5" />
            <span>Join Our Journey</span>
          </button>
        </div>
      </div>
    </section>
  );
}