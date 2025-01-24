export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <img src="/2.jpeg" alt="logo" className='w-12 h-8' />
            <span className="text-xl font-bold">One Pound Fish Token</span>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center gap-6">
              <li><a href="#about" className="hover:text-[#FFD700]">About</a></li>
              <li><a href="#tokenomics" className="hover:text-[#FFD700]">Tokenomics</a></li>
              <li><a href="#roadmap" className="hover:text-[#FFD700]">Roadmap</a></li>
              <li><a href="#how-it-works" className="hover:text-[#FFD700]">How It Works</a></li>
              <li><a href="#faq" className="hover:text-[#FFD700]">FAQ</a></li>
              <li><a href="#contact" className="hover:text-[#FFD700]">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} One Pound Fish Token. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}