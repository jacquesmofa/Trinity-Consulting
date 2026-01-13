import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function AboutPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const milestones = [
    { year: '2006', title: 'Foundation', description: 'TICS was established with a vision to empower organizations across the Greater Toronto Area through innovative strategic consulting and capacity building services.' },
    { year: '2010', title: 'Expansion', description: 'Expanded our service offerings to include comprehensive grant writing, business analysis, and racial equity consulting, serving over 200 organizations.' },
    { year: '2015', title: 'Recognition', description: 'Recognized as a leading consulting firm in the GTA for our commitment to social equity and organizational excellence, serving 500+ clients.' },
    { year: '2020', title: 'Innovation', description: 'Launched advanced digital transformation services and virtual training programs, adapting to the evolving needs of modern organizations.' },
    { year: '2025', title: 'Excellence', description: 'Celebrating nearly two decades of breaking barriers and achieving results, with over 1000 successful client partnerships and counting.' }
  ];

  const team = [
    { name: 'Dr. Michael Thompson', role: 'Founder & Chief Strategist', image: 'https://readdy.ai/api/search-image?query=distinguished%20black%20male%20executive%20consultant%20in%20professional%20suit%20confident%20leadership%20portrait%20modern%20office%20background%20corporate%20headshot&width=400&height=500&seq=team001&orientation=portrait', bio: 'With over 25 years of experience in strategic consulting, Dr. Thompson founded TICS to bridge the gap between vision and execution for organizations across diverse sectors.' },
    { name: 'Sarah Johnson', role: 'Director of Capacity Building', image: 'https://readdy.ai/api/search-image?query=professional%20black%20female%20director%20in%20business%20attire%20warm%20confident%20smile%20executive%20portrait%20clean%20modern%20background&width=400&height=500&seq=team002&orientation=portrait', bio: 'Sarah brings 15 years of expertise in organizational development, helping nonprofits and businesses build sustainable infrastructure for long-term success.' },
    { name: 'Marcus Williams', role: 'Lead Grant Writer & Evaluator', image: 'https://readdy.ai/api/search-image?query=professional%20black%20male%20consultant%20in%20business%20casual%20attire%20friendly%20professional%20demeanor%20modern%20office%20portrait&width=400&height=500&seq=team003&orientation=portrait', bio: 'Marcus has secured over $50 million in funding for clients through compelling grant proposals and comprehensive program evaluations.' },
    { name: 'Dr. Aisha Davis', role: 'Equity & Inclusion Specialist', image: 'https://readdy.ai/api/search-image?query=professional%20black%20female%20specialist%20in%20elegant%20business%20attire%20confident%20warm%20expression%20executive%20headshot%20neutral%20background&width=400&height=500&seq=team004&orientation=portrait', bio: 'Dr. Davis leads our racial and social equity initiatives, helping organizations create inclusive cultures and address systemic barriers.' },
    { name: 'James Carter', role: 'Business Development Strategist', image: 'https://readdy.ai/api/search-image?query=professional%20black%20male%20strategist%20in%20modern%20business%20suit%20confident%20professional%20portrait%20corporate%20setting&width=400&height=500&seq=team005&orientation=portrait', bio: 'James specializes in sales, marketing, and business analysis, driving revenue growth and market expansion for our diverse client base.' },
    { name: 'Lisa Anderson', role: 'Training & Coaching Director', image: 'https://readdy.ai/api/search-image?query=professional%20black%20female%20coach%20in%20professional%20attire%20inspiring%20confident%20smile%20executive%20portrait%20clean%20background&width=400&height=500&seq=team006&orientation=portrait', bio: 'Lisa designs and delivers transformative training programs and coaching services that unlock potential and drive organizational excellence.' }
  ];

  const values = [
    { icon: 'ri-lightbulb-line', title: 'Innovation', description: 'We challenge conventional thinking and embrace cutting-edge strategies to deliver solutions that set new standards of excellence in every industry we serve.' },
    { icon: 'ri-team-line', title: 'Collaboration', description: 'We work alongside our clients as true partners, combining our expertise with their vision to achieve breakthrough results through genuine teamwork and shared commitment.' },
    { icon: 'ri-heart-line', title: 'Equity', description: 'We are deeply committed to promoting racial and social equity, ensuring that all organizations have the tools and support needed to create inclusive, just environments.' },
    { icon: 'ri-shield-check-line', title: 'Integrity', description: 'We operate with unwavering honesty, transparency, and ethical standards in every client relationship, building trust through consistent, reliable service delivery.' },
    { icon: 'ri-trophy-line', title: 'Excellence', description: 'We pursue the highest standards in everything we do, continuously improving our services and methodologies to deliver exceptional value and measurable results.' },
    { icon: 'ri-global-line', title: 'Impact', description: 'We measure our success by the positive, lasting change we create in organizations and communities, addressing pressing issues with strategic, sustainable solutions.' }
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
              <Link to="/about" className="text-red-600 uppercase text-sm tracking-wider whitespace-nowrap cursor-pointer">About</Link>
              <Link to="/why-us" className="text-white uppercase text-sm tracking-wider hover:text-red-600 transition-colors duration-300 whitespace-nowrap cursor-pointer">Why Us?</Link>
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
            src="https://readdy.ai/api/search-image?query=modern%20corporate%20office%20building%20exterior%20with%20glass%20facade%20professional%20business%20architecture%20brampton%20ontario%20urban%20landscape%20blue%20sky%20professional%20photography&width=1920&height=800&seq=about-hero001&orientation=landscape" 
            alt="TICS Office" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/85 to-blue-900/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="font-serif text-7xl font-bold text-white mb-6 leading-tight">Our Story of<br />Excellence Since 2006</h1>
          <p className="text-2xl text-white/90 max-w-3xl leading-relaxed">Nearly two decades of empowering organizations, breaking barriers, and achieving remarkable results through innovative strategic consulting and unwavering commitment to excellence.</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-8">
                <div className="w-full h-96">
                  <img 
                    src="https://readdy.ai/api/search-image?query=diverse%20team%20of%20black%20professionals%20in%20modern%20boardroom%20strategic%20planning%20session%20collaborative%20meeting%20with%20documents%20and%20laptops%20professional%20business%20environment&width=800&height=600&seq=mission001&orientation=landscape" 
                    alt="TICS Mission" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="w-full h-96">
                  <img 
                    src="https://readdy.ai/api/search-image?query=black%20business%20consultant%20presenting%20strategy%20to%20diverse%20team%20modern%20office%20setting%20professional%20consultation%20meeting%20inspiring%20leadership&width=800&height=600&seq=vision001&orientation=landscape" 
                    alt="TICS Vision" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div className="bg-white rounded-3xl p-10 shadow-xl border-l-4 border-red-600">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-compass-line text-white text-3xl"></i>
                </div>
                <h2 className="font-serif text-4xl font-bold text-blue-900 mb-6">Our Mission</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  To help clients create high levels of value that set new standards of excellence. We empower businesses and organizations with an innovative, strategic, and Agile approach to break barriers and achieve results with boldness.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Through our 12 strategic pillars, we provide comprehensive solutions that address the world's most pressing issues while building sustainable organizational capacity for long-term success.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-10 shadow-xl border-l-4 border-red-600">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6">
                  <i className="ri-eye-line text-white text-3xl"></i>
                </div>
                <h2 className="font-serif text-4xl font-bold text-blue-900 mb-6">Our Vision</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  To be the leading strategic consulting partner in the Greater Toronto Area and beyond, recognized for our innovative approach, commitment to equity, and transformative impact on organizations and communities.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We envision a future where every organization has the tools, strategies, and support needed to achieve excellence while promoting racial and social equity in all aspects of their operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl font-bold text-blue-900 mb-4">Our Journey of Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Nearly two decades of growth, innovation, and unwavering commitment to empowering organizations across the Greater Toronto Area and beyond.</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-600"></div>
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <div className="bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="text-5xl font-bold text-red-600 mb-4">{milestone.year}</div>
                      <h3 className="font-serif text-2xl font-bold text-blue-900 mb-4">{milestone.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center relative z-10 flex-shrink-0">
                    <i className="ri-star-fill text-white text-2xl"></i>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">The principles that guide every decision we make and every service we deliver to our valued clients and partners.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6">
                  <i className={`${value.icon} text-white text-3xl`}></i>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-white/90 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl font-bold text-blue-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Dedicated professionals with decades of combined experience in strategic consulting, capacity building, and organizational excellence.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-full h-80">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-blue-900 mb-2">{member.name}</h3>
                  <p className="text-red-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
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
              <h2 className="font-serif text-5xl font-bold mb-6">Ready to Transform Your Organization?</h2>
              <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                Join over 1000 organizations that have achieved excellence through our strategic consulting services. Let's create high levels of value together.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="bg-red-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 hover:shadow-xl flex items-center space-x-2 whitespace-nowrap cursor-pointer">
                  <span>Start Your Journey</span>
                  <i className="ri-arrow-right-line"></i>
                </Link>
                <Link to="/services" className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center space-x-2 whitespace-nowrap cursor-pointer">
                  <span>Explore Our Services</span>
                  <i className="ri-arrow-right-line"></i>
                </Link>
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
              <form className="flex" data-readdy-form id="newsletter-form-about">
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
