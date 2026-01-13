import { Link } from 'react-router-dom';

export default function StrategicPlanningPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-900">TICS</h1>
              <p className="text-xs text-gray-600">Global Strategic Hub</p>
            </div>
          </Link>
          <a href="tel:4168575901" className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors">
            Call Now
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-900 to-blue-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <i className="ri-compass-3-line text-5xl text-white"></i>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Strategic Planning
          </h1>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Comprehensive roadmaps that align vision with actionable strategies for long-term success
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Chart Your Path to Success</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Strategic planning is the foundation of organizational success. Our comprehensive approach helps you define your vision, set clear objectives, and create actionable roadmaps that drive sustainable growth and competitive advantage.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We work collaboratively with your leadership team to develop strategies that are both ambitious and achievable, ensuring alignment across your organization and clarity in execution.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With our Agile approach and innovative mindset, we help you navigate complexity, anticipate challenges, and seize opportunities in today's dynamic business environment.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20Black%20business%20executives%20in%20strategic%20planning%20session%2C%20diverse%20leadership%20team%20around%20conference%20table%20with%20charts%20and%20documents%2C%20collaborative%20business%20meeting%2C%20modern%20boardroom%2C%20professional%20photography%2C%20natural%20lighting%2C%20high%20quality&width=600&height=800&seq=strategic-planning-hero&orientation=portrait"
                alt="Strategic Planning"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Our Strategic Planning Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'ri-eye-line',
                title: 'Vision & Mission Development',
                description: 'Craft compelling vision and mission statements that inspire your team and guide your organization\'s direction.'
              },
              {
                icon: 'ri-search-eye-line',
                title: 'Environmental Scanning',
                description: 'Comprehensive analysis of market trends, competitive landscape, and emerging opportunities and threats.'
              },
              {
                icon: 'ri-target-line',
                title: 'Goal Setting & KPIs',
                description: 'Define SMART goals and key performance indicators that measure progress and drive accountability.'
              },
              {
                icon: 'ri-route-line',
                title: 'Strategy Development',
                description: 'Create comprehensive strategies that leverage your strengths and address market opportunities.'
              },
              {
                icon: 'ri-file-list-3-line',
                title: 'Action Planning',
                description: 'Develop detailed implementation plans with clear timelines, responsibilities, and resource allocation.'
              },
              {
                icon: 'ri-refresh-line',
                title: 'Strategy Review & Adaptation',
                description: 'Regular review and refinement of strategies to ensure continued relevance and effectiveness.'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center mb-6">
                  <i className={`${service.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Our Strategic Planning Process</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understanding your organization, challenges, and aspirations'
              },
              {
                step: '02',
                title: 'Analysis',
                description: 'Comprehensive assessment of internal and external factors'
              },
              {
                step: '03',
                title: 'Strategy',
                description: 'Developing strategic options and selecting the best path forward'
              },
              {
                step: '04',
                title: 'Planning',
                description: 'Creating detailed action plans and implementation roadmaps'
              },
              {
                step: '05',
                title: 'Execution',
                description: 'Supporting implementation and monitoring progress'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Why Strategic Planning Matters</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              'Clear direction and unified vision across your organization',
              'Better resource allocation and investment decisions',
              'Improved ability to anticipate and respond to change',
              'Enhanced competitive positioning and market advantage',
              'Stronger organizational alignment and employee engagement',
              'Measurable progress toward meaningful goals',
              'Increased stakeholder confidence and support',
              'Sustainable growth and long-term success'
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-check-line text-white text-xl"></i>
                </div>
                <p className="text-gray-700 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Plan Your Strategic Future?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's work together to create a strategic roadmap for your organization's success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-block">
              Start Planning Today
            </Link>
            <a href="tel:4168575901" className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
              Call 416-857-5901
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link to="/" className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">T</span>
                </div>
                <span className="text-xl font-bold">TICS</span>
              </Link>
              <p className="text-gray-400 text-sm">Empowering Organizations. Breaking Barriers. Achieving Results.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-red-500 transition-colors">Home</Link></li>
                <li><Link to="/services" className="hover:text-red-500 transition-colors">Services</Link></li>
                <li><Link to="/about" className="hover:text-red-500 transition-colors">About</Link></li>
                <li><Link to="/why-us" className="hover:text-red-500 transition-colors">Why Us?</Link></li>
                <li><Link to="/contact" className="hover:text-red-500 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>35 Van Kirk Dr, Unit 14B</li>
                <li>Brampton, ON L7A 1A</li>
                <li><a href="tel:4168575901" className="hover:text-red-500 transition-colors">416-857-5901</a></li>
                <li><a href="mailto:ticonsultingservicestogo@gmail.com" className="hover:text-red-500 transition-colors">ticonsultingservicestogo@gmail.com</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
                  <i className="ri-linkedin-fill text-xl"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
                  <i className="ri-twitter-fill text-xl"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors">
                  <i className="ri-facebook-fill text-xl"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Trinity International Consulting Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
