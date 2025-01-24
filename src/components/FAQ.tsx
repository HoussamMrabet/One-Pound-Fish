import React from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: 'What is One Pound Fish Token?',
      answer: 'One Pound Fish Token is a community-driven cryptocurrency inspired by the viral "One Pound Fish" song, combining entertainment with real utility in the DeFi space. Our token brings together meme culture and serious blockchain technology to create a unique investment opportunity.'
    },
    {
      question: 'How can I buy $FISH tokens?',
      answer: 'You can purchase $FISH tokens through our partner DEX platforms in three simple steps: 1) Set up a compatible wallet like MetaMask, 2) Connect your wallet to our partner DEX, 3) Swap ETH or BNB for $FISH tokens. Our detailed guide in the How It Works section provides step-by-step instructions.'
    },
    {
      question: 'Is the token audited?',
      answer: 'Yes, our smart contract has been thoroughly audited by leading blockchain security firms to ensure maximum safety for our investors. The full audit reports are available on our GitHub repository, demonstrating our commitment to transparency and security.'
    },
    {
      question: 'What are the tokenomics?',
      answer: 'Our tokenomics are designed for long-term sustainability: 2% reflection rewards to holders, 2% added to liquidity pool, and 1% for marketing. The total supply is 1 billion tokens, with 40% allocated to public sale, 30% to liquidity, 20% to development, and 10% to marketing.'
    },
    {
      question: 'What makes One Pound Fish Token unique?',
      answer: 'One Pound Fish Token combines viral marketing potential with real utility. We offer staking rewards, NFT integration, and community governance. Our unique reflection mechanism rewards long-term holders, while our marketing strategy leverages the iconic "One Pound Fish" brand recognition.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block p-2 bg-[#1E90FF]/10 rounded-full mb-4">
            <HelpCircle className="w-8 h-8 text-[#1E90FF]" />
          </div>
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about One Pound Fish Token. Can't find your answer?
            <a href="#contact" className="text-[#1E90FF] hover:text-[#1570CD] ml-1">
              Contact our team
            </a>
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden hover:border-[#1E90FF]/30 transition-colors duration-300"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center transition-transform duration-300 ${
                  openIndex === index ? 'bg-[#1E90FF]/10' : ''
                }`}>
                  {openIndex === index ? (
                    <Minus className={`w-5 h-5 text-[#1E90FF] transition-transform duration-300 ${
                      openIndex === index ? 'rotate-90' : ''
                    }`} />
                  ) : (
                    <Plus className="w-5 h-5 text-[#1E90FF]" />
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 bg-gray-50">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}