import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img src="/2.jpeg" alt="One Pound Fish Logo" className="w-12 h-8 object-contain" />
            <span className={`font-bold text-xl ${
              isScrolled ? 'text-[#1E90FF]' : 'text-white'
            }`}>
              One Pound Fish
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {[
              ['About', '#about'],
              ['Tokenomics', '#tokenomics'],
              ['Roadmap', '#roadmap'],
              ['How It Works', '#how-it-works'],
              ['FAQ', '#faq'],
              ['Contact', '#contact']
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className={`font-medium hover:text-[#FFD700] transition-colors ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {label}
              </a>
            ))}
            <button className="bg-[#FFD700] text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Buy Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={isScrolled ? 'text-gray-700' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-700' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className={`mt-4 pb-4 space-y-4 ${
            isScrolled ? 'text-gray-700' : 'text-white'
          }`}>
            {[
              ['About', '#about'],
              ['Tokenomics', '#tokenomics'],
              ['Roadmap', '#roadmap'],
              ['How It Works', '#how-it-works'],
              ['FAQ', '#faq'],
              ['Contact', '#contact']
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="block font-medium hover:text-[#FFD700] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <button className="w-full bg-[#FFD700] text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}