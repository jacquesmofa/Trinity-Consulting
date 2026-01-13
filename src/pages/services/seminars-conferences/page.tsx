import { Link } from 'react-router-dom';

export default function SeminarsConferencesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-900/95 backdrop-blur-md shadow-lg">
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
              <Link to="/services" className="text-red-600 uppercase text-sm tracking-wider whitespace-nowrap cursor-pointer">Services</Link>
              <Link to="/about" className="text-white uppercase text-sm tracking-wider hover:text-red-600 transition-colors duration-300 whitespace-nowrap cursor-pointer">About</Link>
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
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex items-center space-x-2 mb-6">
            <Link to="/services" className="text-white/80 hover:text-red-600 transition-colors cursor-pointer">Services</Link>
            <i className="ri-arrow-right-s-line text-white/60"></i>
            <span className="text-white">Seminars &amp; Conferences</span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-6">
                <i className="ri-slideshow-line text-white text-4xl"></i>
              </div>
              <h1 className="font-serif text-6xl font-bold mb-6">Seminars &amp; Conferences</h1>
              <p className="text-2xl text-white/90 leading-relaxed">Engaging events that bring together thought leaders and industry experts for knowledge sharing and professional networking.</p>
            </div>
            <div className="relative">
              <div className="w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://readdy.ai/api/search-image?query=professional%20business%20conference%20with%20black%20keynote%20speaker%20presenting%20to%20large%20audience%20modern%20conference%20hall%20engaged%20attendees%20taking%20notes%20networking%20event%20corporate%20seminar%20setting&width=800&height=600&seq=seminar001&orientation=landscape" 
                  alt="Conference Event" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="w-full h-96 rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src="https://readdy.ai/api/search-image?query=diverse%20group%20of%20black%20professionals%20networking%20at%20business%20conference%20modern%20venue%20interactive%20panel%20discussion%20thought%20leaders%20sharing%20insights%20collaborative%20learning%20environment&width=700&height=600&seq=seminar002&orientation=portrait" 
                  alt="Networking Event" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <div>
              <h2 className="font-serif text-5xl font-bold text-blue-900 mb-6">Curated Knowledge Exchange</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                TICS specializes in organizing and facilitating high-impact seminars and conferences that create meaningful connections between industry leaders, innovators, and professionals seeking to expand their knowledge and networks.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our events are meticulously planned to deliver maximum value through expert presentations, interactive workshops, panel discussions, and networking opportunities that foster collaboration and drive industry advancement.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 hover:shadow-xl flex items-center space-x-2 whitespace-nowrap cursor-pointer">
                  <span>Plan Your Event</span>
                  <i className="ri-arrow-right-line"></i>
                </Link>
                <a href="tel:4168575901" className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition-all duration-300 flex items-center space-x-2 whitespace-nowrap cursor-pointer">
                  <i className="ri-phone-line"></i>
                  <span>Call 416-857-5901</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl font-bold text-blue-900 mb-4">Event Formats We Deliver</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">From intimate seminars to large-scale conferences, we create experiences that inspire and educate</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6">
                <i className="ri-group-line text-white text-3xl"></i>
              </div>
              <h3 className="font-serif text-2xl font-bold text-blue-900 mb-4">Executive Seminars</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Exclusive gatherings for C-suite executives and senior leaders to discuss strategic challenges, emerging trends, and innovative solutions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2 text-sm text-gray-700">
                  <i className="ri-check-line text-red-600 mt-0.5"></i>
                  <span>Strategic Leadership Forums</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-700">
                  <i className="ri-check-line text-red-600 mt-0.5"></i>
                  <span>Industry Roundtables</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-700">
                  <i className="ri-check-line text-red-600 mt-0.5"></i>
                  <span>Thought Leadership Sessions</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-700">
                  <i className="ri-check-line text-red-600 mt-0.5"></i>
                  <span>Peer-to-Peer Learning</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6">
                <i className="ri-building-line text-white text-3xl"></i>
              </div>
              <h3 className="font-serif text-2xl font-bold text-blue-900 mb-4">Industry Conferences</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Large-scale events bringing together hundreds of professionals for comprehensive learning, networking, and business development opportunities.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2 text-sm text-gray-700">
                  <i className="ri-check-line text-red-600 mt-0.5"></i>
                  <span>Multi-Track Sessions</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-700">
                  <i className="ri-check-line text-red-600 mt-0.5"></i>
                  <span>Keynote Presentations</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-700">
                  <i className="ri-check-line text-red-600 mt-0.5"></i>
                  <span>Exhibition Spaces</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-700">
                  <i className="ri-check-line text-red-600 mt-0.5"></i>
                  <span>Networking Lounges</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6">
                <i className="ri-computer-line text-white text-3xl"></i>
              </div>
              <h3 className="font-serif text-2xl font-bold text-blue-900 mb-4">Virtual &amp; Hybrid Events</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Cutting-edge digital and hybrid formats that extend reach and accessibility while maintaining engagement and interactivity.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2 text-sm text-gray-700">
                  <i className="ri-check-line text-red-600 mt-0.5"></i>
                  <span>Live Streaming Capabilities</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-700">
                  <i className="ri-check-line text-red-600 mt-0.5"></i>
                  <span>Interactive Q&amp;A Sessions</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-700">
                  <i className="ri-check-line text-red-600 mt-0.5"></i>
                  <span>Virtual Networking Rooms</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-700">
                  <i className="ri-check-line text-red-600 mt-0.5"></i>
                  <span>On-Demand Content Access</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl font-bold text-blue-900 mb-4">Comprehensive Event Management</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">End-to-end support for seamless, impactful events</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-calendar-check-line text-white text-4xl"></i>
              </div>
              <h3 className="font-bold text-xl mb-3 text-blue-900">Event Planning</h3>
              <p className="text-gray-600">Strategic planning, venue selection, and logistics coordination</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-user-voice-line text-white text-4xl"></i>
              </div>
              <h3 className="font-bold text-xl mb-3 text-blue-900">Speaker Curation</h3>
              <p className="text-gray-600">Sourcing and coordinating industry-leading speakers and panelists</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-megaphone-line text-white text-4xl"></i>
              </div>
              <h3 className="font-bold text-xl mb-3 text-blue-900">Marketing &amp; Promotion</h3>
              <p className="text-gray-600">Comprehensive campaigns to maximize attendance and engagement</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-service-line text-white text-4xl"></i>
              </div>
              <h3 className="font-bold text-xl mb-3 text-blue-900">On-Site Management</h3>
              <p className="text-gray-600">Professional execution ensuring smooth operations throughout</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-5xl font-bold mb-6">Why Choose TICS Events?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-star-line text-white text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">18+ Years of Excellence</h3>
                    <p className="text-white/80">Proven track record of delivering memorable, impactful events since 2006</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-global-line text-white text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Extensive Network</h3>
                    <p className="text-white/80">Access to top-tier speakers, venues, and industry connections</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-lightbulb-line text-white text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Innovative Formats</h3>
                    <p className="text-white/80">Creative approaches that maximize engagement and learning outcomes</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-focus-3-line text-white text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Attention to Detail</h3>
                    <p className="text-white/80">Meticulous planning ensuring every aspect exceeds expectations</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://readdy.ai/api/search-image?query=successful%20business%20conference%20attendees%20networking%20black%20professionals%20exchanging%20business%20cards%20modern%20corporate%20event%20happy%20engaged%20participants%20professional%20atmosphere&width=700&height=800&seq=seminar003&orientation=portrait" 
                  alt="Event Success" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-5xl font-bold text-blue-900 mb-6">Let's Create Your Next Event</h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">Whether you're planning an intimate seminar or a large-scale conference, we'll help you deliver an unforgettable experience.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-red-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 hover:shadow-xl flex items-center space-x-2 whitespace-nowrap cursor-pointer">
              <span>Discuss Your Event</span>
              <i className="ri-arrow-right-line"></i>
            </Link>
            <Link to="/services" className="border-2 border-blue-900 text-blue-900 px-10 py-4 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition-all duration-300 flex items-center space-x-2 whitespace-nowrap cursor-pointer">
              <i className="ri-arrow-left-line"></i>
              <span>View All Services</span>
            </Link>
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
                <li className="text-white/80">Training &amp; Coaching</li>
                <li className="text-white/80">Social Equity</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contact Info</h4>
              <div className="space-y-3 text-sm">
                <p className="text-white/80">35 Van Kirk Dr, Unit 14B<br />Brampton, ON L7A 1A</p>
                <p><a href="tel:4168575901" className="text-white/80 hover:text-red-600 transition-colors cursor-pointer">416-857-5901</a></p>
                <p><a href="mailto:ticonsultingservicestogo@gmail.com" className="text-white/80 hover:text-red-600 transition-colors cursor-pointer break-all">ticonsultingservicestogo@gmail.com</a></p>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-red-600 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between text-sm text-white/70">
              <p>© 2006-2025 Trinity International Consulting Services</p>
              <p>All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}