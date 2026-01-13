import { Link } from 'react-router-dom';

export default function WorkshopsTrainingPage() {
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
            <span className="text-white">Workshops &amp; Skills Training</span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-6">
                <i className="ri-presentation-line text-white text-4xl"></i>
              </div>
              <h1 className="font-serif text-6xl font-bold mb-6">Workshops &amp; Skills Training</h1>
              <p className="text-2xl text-white/90 leading-relaxed">Comprehensive training programs designed to enhance team capabilities and drive organizational excellence through hands-on learning experiences.</p>
            </div>
            <div className="relative">
              <div className="w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://readdy.ai/api/search-image?query=diverse%20group%20of%20black%20professionals%20in%20modern%20training%20workshop%20interactive%20learning%20session%20with%20instructor%20presenting%20on%20whiteboard%20collaborative%20team%20building%20environment%20professional%20corporate%20training%20setting&width=800&height=600&seq=workshop001&orientation=landscape" 
                  alt="Workshop Training" 
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
            <div>
              <h2 className="font-serif text-5xl font-bold text-blue-900 mb-6">Transform Your Team's Potential</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Our workshops and skills training programs are meticulously designed to bridge the gap between current capabilities and future aspirations. We deliver transformative learning experiences that empower your team to excel in today's dynamic business environment.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                With over 18 years of experience, TICS has developed a proven methodology that combines theoretical knowledge with practical application, ensuring that learning translates directly into improved performance and measurable results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 hover:shadow-xl flex items-center space-x-2 whitespace-nowrap cursor-pointer">
                  <span>Request Custom Training</span>
                  <i className="ri-arrow-right-line"></i>
                </Link>
                <a href="tel:4168575901" className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-900 hover:text-white transition-all duration-300 flex items-center space-x-2 whitespace-nowrap cursor-pointer">
                  <i className="ri-phone-line"></i>
                  <span>Call 416-857-5901</span>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src="https://readdy.ai/api/search-image?query=black%20business%20trainer%20leading%20professional%20development%20workshop%20engaged%20participants%20taking%20notes%20modern%20corporate%20training%20room%20collaborative%20learning%20atmosphere&width=700&height=600&seq=workshop002&orientation=portrait" 
                  alt="Training Session" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Areas */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl font-bold text-blue-900 mb-4">Our Training Specializations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive programs tailored to your organization's unique needs and industry requirements</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6">
                <i className="ri-user-star-line text-white text-3xl"></i>
              </div>
              <h3 className="font-serif text-2xl font-bold text-blue-900 mb-4">Leadership Development</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Cultivate strong leaders who inspire teams, drive change, and achieve strategic objectives through our comprehensive leadership training programs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2 text-sm text-gray-700">
                  <i className="ri-check-line text-red-600 mt-0.5"></i>
                  <span>Executive Leadership Skills</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-700">
                  <i className="ri-check-line text-red-600 mt-0.5"></i>
                  <span>Team Management Excellence</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-700">
                  <i className="ri-check-line text-red-600 mt-0.5"></i>
                  <span>Strategic Decision Making</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-700">
                  <i className="ri-check-line text-red-600 mt-0.5"></i>
                  <span>Change Management</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6">
                <i className="ri-tools-line text-white text-3xl"></i>
              </div>
              <h3 className="font-serif text-2xl font-bold text-blue-900 mb-4">Technical Skills</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Equip your team with cutting-edge technical competencies and industry-specific expertise to stay ahead in a rapidly evolving marketplace.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2 text-sm text-gray-700">
                  <i className="ri-check-line text-red-600 mt-0.5"></i>
                  <span>Digital Transformation</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-700">
                  <i className="ri-check-line text-red-600 mt-0.5"></i>
                  <span>Data Analytics &amp; Insights</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-700">
                  <i className="ri-check-line text-red-600 mt-0.5"></i>
                  <span>Project Management</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-700">
                  <i className="ri-check-line text-red-600 mt-0.5"></i>
                  <span>Industry-Specific Tools</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6">
                <i className="ri-team-line text-white text-3xl"></i>
              </div>
              <h3 className="font-serif text-2xl font-bold text-blue-900 mb-4">Soft Skills Enhancement</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Develop essential interpersonal and communication skills that foster collaboration, innovation, and a positive workplace culture.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2 text-sm text-gray-700">
                  <i className="ri-check-line text-red-600 mt-0.5"></i>
                  <span>Effective Communication</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-700">
                  <i className="ri-check-line text-red-600 mt-0.5"></i>
                  <span>Emotional Intelligence</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-700">
                  <i className="ri-check-line text-red-600 mt-0.5"></i>
                  <span>Conflict Resolution</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-700">
                  <i className="ri-check-line text-red-600 mt-0.5"></i>
                  <span>Team Collaboration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl font-bold mb-4">Key Benefits</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">Measurable outcomes that drive organizational success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-line-chart-line text-white text-4xl"></i>
              </div>
              <h3 className="font-bold text-xl mb-3">Enhanced Performance</h3>
              <p className="text-white/80">Immediate improvement in team productivity and efficiency</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-white text-4xl"></i>
              </div>
              <h3 className="font-bold text-xl mb-3">Skill Gap Closure</h3>
              <p className="text-white/80">Address competency gaps with targeted training solutions</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-heart-pulse-line text-white text-4xl"></i>
              </div>
              <h3 className="font-bold text-xl mb-3">Employee Engagement</h3>
              <p className="text-white/80">Boost morale and retention through professional development</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-trophy-line text-white text-4xl"></i>
              </div>
              <h3 className="font-bold text-xl mb-3">Competitive Advantage</h3>
              <p className="text-white/80">Stay ahead with a highly skilled and adaptable workforce</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-5xl font-bold text-blue-900 mb-6">Ready to Elevate Your Team?</h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">Let's design a custom training program that addresses your specific needs and drives measurable results.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-red-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 hover:shadow-xl flex items-center space-x-2 whitespace-nowrap cursor-pointer">
              <span>Schedule Consultation</span>
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
