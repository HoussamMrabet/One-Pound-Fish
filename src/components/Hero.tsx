import { Coins, Fish } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen relative bg-gradient-to-b from-[#1E90FF] to-[#1570CD] text-white pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#FFD700]/10 rounded-full blur-3xl"></div>
      </div>

      {/* Floating cryptocurrency symbols */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 animate-float-slow">
          <Coins className="w-24 h-24" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float-medium">
          <Fish className="w-16 h-16" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-float-fast">
          <Coins className="w-20 h-20" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8">
            {/* Logo and icons */}
            <div className="flex items-center gap-4">
              <div className="bg-[#FFD700] p-3 rounded-full">
                <Fish className="w-8 h-8 text-[#1E90FF]" />
              </div>
              <div className="bg-[#FFD700] p-3 rounded-full">
                <Coins className="w-8 h-8 text-[#1E90FF]" />
              </div>
            </div>

            {/* Main content */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                One Pound Fish!
              </h1>
              <p className="text-xl lg:text-2xl text-white/90">
                Dive into the world of cryptocurrency with a token as catchy as the song that started it all.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#FFD700] text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Join the School of Investors!
                </button>
                <a href='#about' className="border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                  Learn More
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold">$10M+</div>
                <div className="text-sm text-white/80">Market Cap</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm text-white/80">Holders</div>
              </div>
              <div className="text-center sm:col-span-1 col-span-2">
                <div className="text-2xl font-bold">100K+</div>
                <div className="text-sm text-white/80">Community</div>
              </div>
            </div>
          </div>

          {/* Hero image section */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10">
              <img
                src="/1.webp"
                alt="Golden crypto coin with fish symbol"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-20 right-0 lg:-bottom-10 lg:-right-10 w-40 h-40">
                <img
                  src="/2.jpeg"
                  alt="Fishmonger with token"
                  className="rounded-full border-4 border-white shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}