import { Wallet, ArrowRight, ShoppingCart } from 'lucide-react';

export default function How() {
  return (
    <section className="py-20 bg-gray-50" id="how-it-works">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {[
            {
              icon: <Wallet className="w-12 h-12 text-[#1E90FF]" />,
              title: 'Create Wallet',
              description: 'Set up a crypto wallet like MetaMask'
            },
            {
              icon: <ShoppingCart className="w-12 h-12 text-[#1E90FF]" />,
              title: 'Buy $FISH',
              description: 'Purchase through our partner DEX'
            },
            {
              icon: <ArrowRight className="w-12 h-12 text-[#1E90FF]" />,
              title: 'Start Trading',
              description: 'Hold, trade, or stake your tokens'
            }
          ].map((step, index) => (
            <div key={index} className="text-center max-w-sm">
              <div className="flex justify-center mb-6">{step.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}