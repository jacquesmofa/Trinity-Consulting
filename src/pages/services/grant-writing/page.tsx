import { Link } from 'react-router-dom';

export default function GrantWritingPage() {
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
            <span className="text-white">Grant Writing &amp; Evaluation</span>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-6">
                <i className="ri-file-text-line text-white text-4xl"></i>
              </div>
              <h1 className="font-serif text-6xl font-bold mb-6">Grant Writing &amp; Evaluation</h1>
              <p className="text-2xl text-white/90 leading-relaxed">Expert assistance in securing funding through compelling grant proposals and thorough program evaluations.</p>
            </div>
            <div className="relative">
              <div className="w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://readdy.ai/api/search-image?query=black%20professional%20grant%20writer%20working%20on%20laptop%20reviewing%20funding%20documents%20modern%20office%20setting%20focused%20concentration%20professional%20business%20environment%20organized%20workspace%20with%20papers%20and%20coffee&width=800&height=600&seq=grant001&orientation=landscape" 
                  alt="Grant Writing" 
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
              <h2 className="font-serif text-5xl font-bold text-blue-900 mb-6">Unlock Funding Opportunities</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Securing grants requires more than just good ideas—it demands compelling narratives, meticulous research, and strategic alignment with funder priorities. TICS brings 18+ years of proven success in grant writing and evaluation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our team has helped organizations secure millions in funding from government agencies, foundations, and corporate sponsors. We craft persuasive proposals that clearly articulate your mission, demonstrate impact, and meet all technical requirements.
              </p>
              <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
                <p className="text-lg font-semibold text-blue-900 mb-2">Success Rate</p>
                <p className="text-3xl font-bold text-red-600">78%</p>
                <p className="text-sm text-gray-600 mt-2">Of our grant proposals receive funding approval</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 hover:shadow-xl flex items-center space-x-2 whitespace-nowrap cursor-pointer">
                  <span>Start Your Proposal</span>
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
                  src="https://readdy.ai/api/search-image?query=successful%20black%20business%20team%20celebrating%20grant%20approval%20holding%20documents%20smiling%20professionals%20in%20modern%20office%20achievement%20moment%20collaborative%20success%20corporate%20environment&width=700&height=600&seq=grant002&orientation=portrait" 
                  alt="Grant Success" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl font-bold text-blue-900 mb-4">Comprehensive Grant Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">From research to submission and beyond</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6">
                <i className="ri-search-line text-white text-3xl"></i>
              </div>
              <h3 className="font-serif text-2xl font-bold text-blue-900 mb-4">Grant Research &amp; Identification</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We identify the most suitable funding opportunities aligned with your organization's mission, capacity, and strategic goals.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2 text-sm text-gray-700">
                  <i className="ri-check-line text-red-600 mt-0.5"></i>
                  <span>Federal &amp; Provincial Grant Databases</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-700">
                  <i className="ri-check-line text-red-600 mt-0.5"></i>
                  <span>Foundation &amp; Corporate Funding</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-700">
                  <i className="ri-check-line text-red-600 mt-0.5"></i>
                  <span>Eligibility Assessment</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-700">
                  <i className="ri-check-line text-red-600 mt-0.5"></i>
                  <span>Funding Calendar Management</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6">
                <i className="ri-edit-line text-white text-3xl"></i>
              </div>
              <h3 className="font-serif text-2xl font-bold text-blue-900 mb-4">Proposal Development</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Expertly crafted proposals that tell your story compellingly while meeting all technical and formatting requirements.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2 text-sm text-gray-700">
                  <i className="ri-check-line text-red-600 mt-0.5"></i>
                  <span>Narrative Development</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-700">
                  <i className="ri-check-line text-red-600 mt-0.5"></i>
                  <span>Budget Preparation</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-700">
                  <i className="ri-check-line text-red-600 mt-0.5"></i>
                  <span>Logic Model Creation</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-700">
                  <i className="ri-check-line text-red-600 mt-0.5"></i>
                  <span>Supporting Documentation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6">
                <i className="ri-bar-chart-line text-white text-3xl"></i>
              </div>
              <h3 className="font-serif text-2xl font-bold text-blue-900 mb-4">Program Evaluation</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Rigorous evaluation frameworks that demonstrate impact, inform improvements, and satisfy funder reporting requirements.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2 text-sm text-gray-700">
                  <i className="ri-check-line text-red-600 mt-0.5"></i>
                  <span>Outcome Measurement Design</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-700">
                  <i className="ri-check-line text-red-600 mt-0.5"></i>
                  <span>Data Collection &amp; Analysis</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-700">
                  <i className="ri-check-line text-red-600 mt-0.5"></i>
                  <span>Impact Reporting</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-700">
                  <i className="ri-check-line text-red-600 mt-0.5"></i>
                  <span>Continuous Improvement Plans</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6">
                <i className="ri-file-list-line text-white text-3xl"></i>
              </div>
              <h3 className="font-serif text-2xl font-bold text-blue-900 mb-4">Grant Management Support</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Ongoing assistance to ensure compliance, timely reporting, and successful grant closeout.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2 text-sm text-gray-700">
                  <i className="ri-check-line text-red-600 mt-0.5"></i>
                  <span>Compliance Monitoring</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-700">
                  <i className="ri-check-line text-red-600 mt-0.5"></i>
                  <span>Progress Report Writing</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-700">
                  <i className="ri-check-line text-red-600 mt-0.5"></i>
                  <span>Financial Tracking</span>
                </li>
                <li className="flex items-start space-x-2 text-sm text-gray-700">
                  <i className="ri-check-line text-red-600 mt-0.5"></i>
                  <span>Amendment Requests</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl font-bold text-blue-900 mb-4">Our Proven Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">A systematic approach to grant success</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-blue-900">Discovery</h3>
              <p className="text-sm text-gray-600">Understanding your mission, needs, and capacity</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-blue-900">Research</h3>
              <p className="text-sm text-gray-600">Identifying optimal funding opportunities</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-blue-900">Development</h3>
              <p className="text-sm text-gray-600">Crafting compelling proposals</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">4</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-blue-900">Submission</h3>
              <p className="text-sm text-gray-600">Ensuring timely, complete applications</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">5</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-blue-900">Support</h3>
              <p className="text-sm text-gray-600">Ongoing management and reporting</p>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Types */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl font-bold mb-4">Funding Sources We Navigate</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">Expertise across diverse funding landscapes</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <i className="ri-government-line text-red-600 text-5xl mb-4"></i>
              <h3 className="font-bold text-2xl mb-3">Government Grants</h3>
              <p className="text-white/80 mb-4">Federal, provincial, and municipal funding programs</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <i className="ri-arrow-right-s-line text-red-600 mt-0.5"></i>
                  <span>Canada Grants</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-arrow-right-s-line text-red-600 mt-0.5"></i>
                  <span>Ontario Trillium Foundation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-arrow-right-s-line text-red-600 mt-0.5"></i>
                  <span>Municipal Programs</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <i className="ri-building-2-line text-red-600 text-5xl mb-4"></i>
              <h3 className="font-bold text-2xl mb-3">Foundation Funding</h3>
              <p className="text-white/80 mb-4">Private and community foundation grants</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <i className="ri-arrow-right-s-line text-red-600 mt-0.5"></i>
                  <span>Family Foundations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-arrow-right-s-line text-red-600 mt-0.5"></i>
                  <span>Community Foundations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-arrow-right-s-line text-red-600 mt-0.5"></i>
                  <span>Operating Foundations</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <i className="ri-briefcase-line text-red-600 text-5xl mb-4"></i>
              <h3 className="font-bold text-2xl mb-3">Corporate Sponsorship</h3>
              <p className="text-white/80 mb-4">Business partnerships and CSR initiatives</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <i className="ri-arrow-right-s-line text-red-600 mt-0.5"></i>
                  <span>Corporate Giving Programs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-arrow-right-s-line text-red-600 mt-0.5"></i>
                  <span>Matching Gift Programs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="ri-arrow-right-s-line text-red-600 mt-0.5"></i>
                  <span>In-Kind Donations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-5xl font-bold text-blue-900 mb-6">Ready to Secure Funding?</h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">Let's discuss your funding needs and develop a winning grant strategy together.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-red-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 hover:shadow-xl flex items-center space-x-2 whitespace-nowrap cursor-pointer">
              <span>Request Grant Consultation</span>
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