import { Twitter, Send, Instagram } from 'lucide-react';

export default function Community() {
  return (
    <section className="py-20 bg-[#1E90FF] text-white" id="community">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Join Our Community</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: <Twitter className="w-12 h-12" />,
              platform: 'Twitter',
              link: '#',
              description: 'Follow for updates'
            },
            {
              icon: <Send className="w-12 h-12" />,
              platform: 'Telegram',
              link: '#',
              description: 'Join the discussion'
            },
            {
              icon: <Instagram className="w-12 h-12" />,
              platform: 'Instagram',
              link: '#',
              description: 'Get instant updates'
            }
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              className="flex flex-col items-center p-8 bg-white/10 rounded-xl hover:bg-white/20 transition"
            >
              {social.icon}
              <h3 className="text-xl font-bold mt-4">{social.platform}</h3>
              <p className="mt-2">{social.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}