import { Scale, Anchor, Fish, Leaf, Coins, Zap } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-white relative overflow-hidden" id="about">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 animate-float-slow opacity-5">
          <Fish className="w-40 h-40 text-[#1E90FF]" />
        </div>
        <div className="absolute bottom-20 right-0 animate-float-medium opacity-5">
          <Coins className="w-32 h-32 text-[#FFD700]" />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">About One Pound Fish</h2>
          <p className="text-xl text-gray-600">
            Born from a viral sensation, One Pound Fish Token combines the catchiness of the original song
            with revolutionary blockchain technology to create a fun, accessible, and sustainable cryptocurrency
            for everyone.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="bg-[#1E90FF] p-3 rounded-lg">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Low Transaction Fees</h3>
                <p className="text-gray-600">
                  Enjoy minimal transaction costs that won't leave your wallet feeling like an empty fish tank.
                  Our optimized smart contract ensures efficient and affordable transfers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="bg-[#1E90FF] p-3 rounded-lg">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Eco-Friendly</h3>
                <p className="text-gray-600">
                  Our proof-of-stake consensus mechanism uses minimal energy, making it as environmentally
                  friendly as a fish swimming in its natural habitat.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="bg-[#1E90FF] p-3 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
                <p className="text-gray-600">
                  Experience rapid transactions that move as swiftly as a fish through water, thanks to our
                  optimized blockchain infrastructure.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="/3.jpg"
                alt="Cryptocurrency visualization"
                className="rounded-2xl shadow-2xl"
              />
              {/* Overlay decoration */}
              <div className="absolute hidden lg:flex -bottom-6 -right-6 bg-[#1E90FF] p-4 rounded-xl shadow-lg">
                <Fish className="w-12 h-12 text-[#fff]" />
              </div>
            </div>
            {/* Stats card */}
            <div className="absolute hidden lg:flex -bottom-10 -left-10 z-10 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center gap-4">
                <Anchor className="w-10 h-10 text-[#1E90FF]" />
                <div>
                  <div className="text-2xl font-bold text-[#1E90FF]">100%</div>
                  <div className="text-sm text-gray-600">Community Driven</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { label: 'Total Supply', value: '1B Tokens' },
            { label: 'Holders', value: '50,000+' },
            { label: 'Countries', value: '150+' },
            { label: 'Daily Volume', value: '$2M+' }
          ].map((stat, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-[#1E90FF]">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}