import { PieChart, Wallet, Users, Fish, Coins, TrendingUp, Lock } from 'lucide-react';

export default function Tokenomics() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden" id="tokenomics">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 animate-float-slow opacity-5">
          <Fish className="w-40 h-40 text-[#1E90FF]" />
        </div>
        <div className="absolute bottom-20 left-10 animate-float-medium opacity-5">
          <Coins className="w-32 h-32 text-[#FFD700]" />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">Tokenomics</h2>
          <p className="text-xl text-gray-600">
            Our token distribution and economics are designed to create a sustainable
            and thriving ecosystem for all fish in our crypto ocean.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Token Distribution */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-[#1E90FF] p-3 rounded-xl">
                <PieChart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Token Distribution</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Public Sale', value: '40%', color: 'bg-[#1E90FF]' },
                { label: 'Liquidity Pool', value: '30%', color: 'bg-[#FFD700]' },
                { label: 'Development', value: '20%', color: 'bg-emerald-500' },
                { label: 'Marketing', value: '10%', color: 'bg-purple-500' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                  <div>
                    <div className="font-bold">{item.value}</div>
                    <div className="text-sm text-gray-600">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative mt-8 aspect-square max-w-[300px] mx-auto">
              {/* Simulated pie chart using border radius */}
              <div className="absolute inset-0 rounded-full bg-[#1E90FF]"></div>
              <div className="absolute inset-0 rounded-full bg-[#FFD700] clip-path-30"></div>
              <div className="absolute inset-0 rounded-full bg-emerald-500 clip-path-20"></div>
              <div className="absolute inset-0 rounded-full bg-purple-500 clip-path-10"></div>
              {/* Center circle */}
              <div className="absolute inset-[15%] rounded-full bg-white shadow-inner flex items-center justify-center">
                <Fish className="w-12 h-12 text-[#1E90FF]" />
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="space-y-6">
            {/* Total Supply Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-[#1E90FF] p-3 rounded-xl">
                  <Coins className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Total Supply</h3>
                  <p className="text-gray-600">Maximum tokens in circulation</p>
                </div>
              </div>
              <div className="text-4xl font-bold text-[#1E90FF]">1,000,000,000</div>
              <div className="text-lg text-gray-600">One Billion $FISH</div>
            </div>

            {/* Market Stats */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-5 h-5 text-[#1E90FF]" />
                  <h4 className="font-bold">Market Cap</h4>
                </div>
                <div className="text-2xl font-bold">$10M+</div>
                <div className="text-sm text-gray-600">And growing</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-5 h-5 text-[#1E90FF]" />
                  <h4 className="font-bold">Locked Liquidity</h4>
                </div>
                <div className="text-2xl font-bold">$5M+</div>
                <div className="text-sm text-gray-600">2 years lock</div>
              </div>
            </div>

            {/* Transaction Tax */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-[#1E90FF] p-3 rounded-xl">
                  <Wallet className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Transaction Tax</h3>
                  <p className="text-gray-600">Every transaction contributes to the ecosystem</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { label: 'Reflection to Holders', value: '2%', icon: Users },
                  { label: 'Liquidity Pool', value: '2%', icon: Coins },
                  { label: 'Marketing', value: '1%', icon: TrendingUp }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                    <div className="bg-[#1E90FF]/10 p-3 rounded-lg">
                      <item.icon className="w-6 h-6 text-[#1E90FF]" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#1E90FF]">{item.value}</div>
                      <div className="text-sm text-gray-600">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}