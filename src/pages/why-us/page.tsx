import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function WhyUsPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const differentiators = [
    {
      icon: 'ri-time-line',
      title: '18+ Years of Proven Excellence',
      description: 'Since 2006, we\'ve been delivering exceptional results for over 1000 organizations across the Greater Toronto Area. Our track record speaks for itself with consistent client satisfaction and measurable outcomes.',
      stats: ['1000+ Clients Served', '18+ Years Experience', '95% Client Retention']
    },
    {
      icon: 'ri-lightbulb-flash-line',
      title: 'Innovative Agile Approach',
      description: 'We don\'t follow outdated playbooks. Our innovative, strategic, and Agile methodology adapts to your unique challenges, ensuring solutions that are both cutting-edge and practical for real-world implementation.',
      stats: ['Custom Solutions', 'Agile Methodology', 'Continuous Innovation']
    },
    {
      icon: 'ri-team-line',
      title: 'True Partnership & Collaboration',
      description: 'We work alongside you as genuine partners, not just consultants. Your success is our success, and we invest deeply in understanding your vision, challenges, and goals to deliver transformative results.',
      stats: ['Dedicated Support', 'Collaborative Process', 'Long-term Partnership']
    },
    {
      icon: 'ri-heart-line',
      title: 'Commitment to Equity & Inclusion',
      description: 'Racial and social equity isn\'t just a service we offer—it\'s woven into everything we do. We help organizations create inclusive cultures that drive innovation, engagement, and sustainable success.',
      stats: ['Equity-Centered', 'Inclusive Practices', 'Social Impact Focus']
    },
    {
      icon: 'ri-stack-line',
      title: 'Comprehensive 12-Pillar Framework',
      description: 'From strategic planning to grant writing, from coaching to business analysis—our 12 strategic pillars provide end-to-end solutions. You get everything you need under one roof with seamless integration.',
      stats: ['12 Service Pillars', 'Integrated Solutions', 'Holistic Approach']
    },
    {
      icon: 'ri-line-chart-line',
      title: 'Measurable Results & ROI',
      description: 'We don\'t just deliver services—we deliver results. Our data-driven approach ensures measurable outcomes, clear ROI, and tangible improvements in your organizational performance and impact.',
      stats: ['Data-Driven', 'Measurable Outcomes', 'Proven ROI']
    }
  ];

  const testimonials = [
    {
      quote: 'TICS transformed our entire approach to strategic planning. Their innovative methodology helped us achieve a 300% increase in program effectiveness within just 18 months. The team truly understands what it takes to drive organizational excellence.',
      client: 'Marcus Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      image: 'https://readdy.ai/api/search-image?query=professional%20black%20male%20ceo%20in%20executive%20suit%20confident%20leadership%20portrait%20modern%20corporate%20office%20background&width=120&height=120&seq=whyus001&orientation=squarish'
    },
    {
      quote: 'The grant writing expertise at TICS is unmatched. They secured $2.5 million in funding for our community programs, and their attention to detail and understanding of our mission was absolutely exceptional. We couldn\'t have done it without them.',
      client: 'Aisha Williams',
      company: 'Community Forward',
      role: 'Executive Director',
      image: 'https://readdy.ai/api/search-image?query=professional%20black%20female%20executive%20director%20in%20business%20attire%20warm%20confident%20smile%20leadership%20portrait&width=120&height=120&seq=whyus002&orientation=squarish'
    },
    {
      quote: 'Working with TICS on our racial equity initiatives has been truly transformative. They bring both deep expertise and genuine commitment to creating lasting change. Our organization is now a model for inclusive practices in our industry.',
      client: 'David Thompson',
      company: 'Equity Solutions',
      role: 'Founder',
      image: 'https://readdy.ai/api/search-image?query=professional%20black%20male%20founder%20in%20business%20suit%20confident%20professional%20portrait%20corporate%20setting&width=120&height=120&seq=whyus003&orientation=squarish'
    },
    {
      quote: 'The coaching and capacity building programs have empowered our entire team to reach new heights. TICS truly understands how to unlock human potential and build organizational infrastructure for sustainable growth.',
      client: 'Jasmine Carter',
      company: 'Growth Dynamics',
      role: 'VP of Operations',
      image: 'https://readdy.ai/api/search-image?query=professional%20black%20female%20vp%20in%20elegant%20business%20attire%20friendly%20professional%20demeanor%20executive%20portrait&width=120&height=120&seq=whyus004&orientation=squarish'
    },
    {
      quote: 'Their business analysis revealed opportunities we had overlooked for years. The ROI from working with TICS has been remarkable—we\'ve seen a 250% increase in revenue and expanded into three new markets.',
      client: 'Robert Mitchell',
      company: 'Innovate Corp',
      role: 'Managing Director',
      image: 'https://readdy.ai/api/search-image?query=professional%20black%20male%20managing%20director%20in%20business%20casual%20confident%20smile%20executive%20photo&width=120&height=120&seq=whyus005&orientation=squarish'
    },
    {
      quote: 'TICS helped us navigate the complexities of business registration and strategic planning from day one. Their comprehensive approach set our company up for success, and we\'ve grown 400% in just three years.',
      client: 'Nicole Brown',
      company: 'StartUp Ventures',
      role: 'Founder & CEO',
      image: 'https://readdy.ai/api/search-image?query=professional%20black%20female%20founder%20in%20professional%20attire%20warm%20inspiring%20expression%20business%20headshot&width=120&height=120&seq=whyus006&orientation=squarish'
    }
  ];

  const comparisons = [
    { feature: 'Years of Experience', tics: '18+ Years', others: '5-10 Years' },
    { feature: 'Service Integration', tics: '12 Comprehensive Pillars', others: 'Limited Specializations' },
    { feature: 'Equity Commitment', tics: 'Core Value & Practice', others: 'Optional Add-on' },
    { feature: 'Client Approach', tics: 'True Partnership', others: 'Transactional Service' },
    { feature: 'Methodology', tics: 'Innovative & Agile', others: 'Traditional Frameworks' },
    { feature: 'Results Focus', tics: 'Measurable ROI', others: 'Activity-Based' },
    { feature: 'Local Expertise', tics: 'GTA Specialists', others: 'Generic Approach' },
    { feature: 'Support Model', tics: 'Ongoing Partnership', others: 'Project-Based Only' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-blue-900/95 backdrop-blur-md shadow-lg' : 'bg-blue-900/85 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 cursor-pointer">
              <img src="https://public.readdy.ai/ai/img_res/8a4b251a-be39-4051-b57b-15cbe3fcf2cc.png" alt="TICS Logo" className="h-12 w-auto" />
              <div className="border-b-2 border-red-600 pb-1">
                <span className="text-white font-bold text-xl tracking-wide">TICS</span>
              </div>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-white uppercase text-sm tracking-wider hover:text-red-600 transition-colors duration-300 whitespace-nowrap cursor-pointer">Home</Link>
              <Link to="/services" className="text-white uppercase text-sm tracking-wider hover:text-red-600 transition-colors duration-300 whitespace-nowrap cursor-pointer">Services</Link>
              <Link to="/about" className="text-white uppercase text-sm tracking-wider hover:text-red-600 transition-colors duration-300 whitespace-nowrap cursor-pointer">About</Link>
              <Link to="/why-us" className="text-red-600 uppercase text-sm tracking-wider whitespace-nowrap cursor-pointer">Why Us?</Link>
              <Link to="/contact" className="text-white uppercase text-sm tracking-wider hover:text-red-600 transition-colors duration-300 whitespace-nowrap cursor-pointer">Contact</Link>
            </div>

            <a href="tel:4168575901" className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/50 flex items-center space-x-2 whitespace-nowrap cursor-pointer">
              <i className="ri-phone-line"></i>
              <span className="hidden lg:inline">CALL NOW: 416-857-5901</span>
              <span className="lg:hidden">CALL NOW</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://readdy.ai/api/search-image?query=successful%20diverse%20team%20of%20black%20professionals%20celebrating%20achievement%20in%20modern%20office%20high-five%20teamwork%20collaboration%20victory%20professional%20business%20environment&width=1920&height=800&seq=whyus-hero001&orientation=landscape" 
            alt="Why Choose TICS" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/85 to-blue-900/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="font-serif text-7xl font-bold text-white mb-6 leading-tight">Why Choose TICS?</h1>
          <p className="text-2xl text-white/90 max-w-3xl leading-relaxed mb-8">
            Discover what sets us apart as the premier strategic consulting partner in the Greater Toronto Area. Excellence isn't just what we do—it's who we are.
          </p>
          <div className="flex flex-wrap gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl px-8 py-4">
              <p className="text-white font-bold text-3xl">1000+</p>
              <p className="text-white/90">Clients Served</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl px-8 py-4">
              <p className="text-white font-bold text-3xl">18+</p>
              <p className="text-white/90">Years Experience</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl px-8 py-4">
              <p className="text-white font-bold text-3xl">95%</p>
              <p className="text-white/90">Client Retention</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl font-bold text-blue-900 mb-4">What Makes Us Different</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Six compelling reasons why organizations across the GTA choose TICS as their strategic consulting partner.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <div key={index} className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-l-4 border-red-600">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6">
                  <i className={`${item.icon} text-white text-3xl`}></i>
                </div>
                <h3 className="font-serif text-2xl font-bold text-blue-900 mb-4">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed mb-6">{item.description}</p>
                <div className="flex flex-wrap gap-3">
                  {item.stats.map((stat, idx) => (
                    <span key={idx} className="bg-blue-50 text-blue-900 px-4 py-2 rounded-full text-sm font-semibold">
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl font-bold text-blue-900 mb-4">TICS vs. Traditional Consultants</h2>
            <p className="text-xl text-gray-600">See how our innovative approach delivers superior value and results.</p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid grid-cols-3 bg-blue-900 text-white p-6">
              <div className="font-bold text-lg">Feature</div>
              <div className="font-bold text-lg text-center">TICS</div>
              <div className="font-bold text-lg text-center">Traditional Firms</div>
            </div>
            {comparisons.map((item, index) => (
              <div key={index} className={`grid grid-cols-3 p-6 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <div className="font-semibold text-gray-900">{item.feature}</div>
                <div className="text-center">
                  <span className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
                    <i className="ri-check-line"></i>
                    <span>{item.tics}</span>
                  </span>
                </div>
                <div className="text-center">
                  <span className="inline-flex items-center space-x-2 bg-gray-200 text-gray-600 px-4 py-2 rounded-full">
                    <i className="ri-close-line"></i>
                    <span>{item.others}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl font-bold text-blue-900 mb-4">Real Results from Real Clients</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Don't just take our word for it—hear from the organizations we've empowered to achieve excellence.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative">
                <div className="text-red-600 text-8xl font-serif absolute top-4 left-4 opacity-20">"</div>
                <p className="font-serif italic text-gray-700 text-lg mb-6 relative z-10 leading-relaxed">{testimonial.quote}</p>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 flex-shrink-0">
                    <img src={testimonial.image} alt={testimonial.client} className="w-full h-full rounded-full object-cover border-2 border-red-600" />
                  </div>
                  <div>
                    <p className="font-bold text-blue-900">{testimonial.client}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <p className="text-red-600 text-sm font-semibold">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Impact */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-5xl font-bold mb-6">The TICS Impact</h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                When you partner with TICS, you're not just hiring consultants—you're gaining a dedicated team committed to your success. Our innovative approach, deep expertise, and genuine partnership model deliver transformative results.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-check-line text-white text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Proven Track Record</h3>
                    <p className="text-white/90">18+ years of consistent excellence serving 1000+ organizations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-check-line text-white text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Comprehensive Solutions</h3>
                    <p className="text-white/90">12 integrated service pillars for end-to-end support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-check-line text-white text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Measurable Results</h3>
                    <p className="text-white/90">Data-driven approach with clear ROI and tangible outcomes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="w-full h-64">
                  <img 
                    src="https://readdy.ai/api/search-image?query=black%20business%20consultant%20presenting%20data%20analytics%20on%20screen%20to%20diverse%20team%20modern%20office%20professional%20meeting&width=400&height=500&seq=impact001&orientation=portrait" 
                    alt="TICS Impact" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl mt-12">
                <div className="w-full h-64">
                  <img 
                    src="https://readdy.ai/api/search-image?query=diverse%20team%20of%20professionals%20collaborating%20on%20strategy%20whiteboard%20brainstorming%20session%20modern%20workspace&width=400&height=500&seq=impact002&orientation=portrait" 
                    alt="Collaboration" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl -mt-12">
                <div className="w-full h-64">
                  <img 
                    src="https://readdy.ai/api/search-image?query=black%20female%20executive%20leading%20workshop%20training%20session%20engaged%20participants%20professional%20development&width=400&height=500&seq=impact003&orientation=portrait" 
                    alt="Training" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="w-full h-64">
                  <img 
                    src="https://readdy.ai/api/search-image?query=successful%20black%20entrepreneur%20celebrating%20business%20achievement%20modern%20office%20professional%20success&width=400&height=500&seq=impact004&orientation=portrait" 
                    alt="Success" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-16 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            </div>
            <div className="relative z-10">
              <h2 className="font-serif text-5xl font-bold mb-6">Experience the TICS Difference</h2>
              <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                Join the 1000+ organizations that have chosen excellence. Let's create high levels of value together and set new standards in your industry.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="bg-red-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 hover:shadow-xl flex items-center space-x-2 whitespace-nowrap cursor-pointer">
                  <span>Request Free Consultation</span>
                  <i className="ri-arrow-right-line"></i>
                </Link>
                <a href="tel:4168575901" className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center space-x-2 whitespace-nowrap cursor-pointer">
                  <i className="ri-phone-line"></i>
                  <span>Call 416-857-5901</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <Link to="/" className="inline-block mb-4 cursor-pointer">
                <img src="https://public.readdy.ai/ai/img_res/8a4b251a-be39-4051-b57b-15cbe3fcf2cc.png" alt="TICS Logo" className="h-16" />
              </Link>
              <Link to="/" className="block mb-4 cursor-pointer">
                <span className="text-white font-bold text-xl tracking-wide hover:text-red-600 transition-colors">TICS</span>
              </Link>
              <p className="text-white/80 text-sm leading-relaxed">Empowering Organizations. Breaking Barriers. Achieving Results.</p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-white/80 hover:text-red-600 transition-colors cursor-pointer">Home</Link></li>
                <li><Link to="/services" className="text-white/80 hover:text-red-600 transition-colors cursor-pointer">Services</Link></li>
                <li><Link to="/about" className="text-white/80 hover:text-red-600 transition-colors cursor-pointer">About</Link></li>
                <li><Link to="/why-us" className="text-white/80 hover:text-red-600 transition-colors cursor-pointer">Why Us?</Link></li>
                <li><Link to="/contact" className="text-white/80 hover:text-red-600 transition-colors cursor-pointer">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Service Categories</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-white/80">Strategic Planning</li>
                <li className="text-white/80">Business Development</li>
                <li className="text-white/80">Training & Coaching</li>
                <li className="text-white/80">Social Equity</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Stay Connected</h4>
              <p className="text-white/80 text-sm mb-4">Subscribe to our newsletter for insights and updates</p>
              <form className="flex" data-readdy-form id="newsletter-form-whyus">
                <input type="email" name="email" placeholder="Your email" className="flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none" required />
                <button type="submit" className="bg-red-600 px-6 py-2 rounded-r-lg hover:bg-red-700 transition-colors whitespace-nowrap cursor-pointer">Subscribe</button>
              </form>
            </div>
          </div>

          <div className="border-t-2 border-red-600 pt-8">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <i className="ri-map-pin-line text-red-600"></i>
                <span className="text-white/90">35 Van Kirk Dr, Unit 14B, Brampton, ON L7A 1A</span>
              </div>
              <div className="flex items-center justify-center space-x-6">
                <a href="tel:4168575901" className="text-white/90 hover:text-red-600 transition-colors cursor-pointer">
                  <i className="ri-phone-line mr-2"></i>416-857-5901
                </a>
                <a href="mailto:ticonsultingservicestogo@gmail.com" className="text-white/90 hover:text-red-600 transition-colors cursor-pointer">
                  <i className="ri-mail-line mr-2"></i>ticonsultingservicestogo@gmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between text-sm text-white/70">
              <p>© 2006-2025 Trinity International Consulting Services</p>
              <p>All Rights Reserved</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="#" className="hover:text-red-600 transition-colors cursor-pointer"><i className="ri-linkedin-fill text-xl"></i></a>
                <a href="#" className="hover:text-red-600 transition-colors cursor-pointer"><i className="ri-facebook-fill text-xl"></i></a>
                <a href="#" className="hover:text-red-600 transition-colors cursor-pointer"><i className="ri-twitter-fill text-xl"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
