import { Link } from 'react-router-dom';

export default function BusinessAnalysisPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-900">TICS</h1>
              <p className="text-xs text-gray-600">Trinity International</p>
            </div>
          </Link>
          <a href="tel:4168575901" className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors">
            Call Now
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-line-chart-line text-4xl"></i>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Business Analysis</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Data-driven insights to optimize operations and identify growth opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Transform Data Into Strategic Advantage</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our Business Analysis services help organizations make informed decisions through comprehensive data analysis, process optimization, and strategic insights. We bridge the gap between business needs and technical solutions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With our expertise, you'll gain clarity on operational efficiency, market positioning, and growth opportunities that drive measurable results.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20Black%20business%20analyst%20working%20with%20data%20charts%20and%20graphs%20on%20multiple%20screens%2C%20modern%20office%20environment%2C%20focused%20expression%2C%20business%20intelligence%20dashboard%20visible%2C%20corporate%20setting%2C%20natural%20lighting%2C%20high%20detail%20photography%2C%20professional%20atmosphere&width=600&height=800&seq=ba1&orientation=portrait"
                alt="Business Analysis"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Our Analysis Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'ri-database-2-line',
                title: 'Data Analytics',
                description: 'Transform raw data into actionable insights with advanced analytics and visualization techniques.'
              },
              {
                icon: 'ri-flow-chart',
                title: 'Process Optimization',
                description: 'Identify bottlenecks and streamline operations for maximum efficiency and cost reduction.'
              },
              {
                icon: 'ri-pie-chart-line',
                title: 'Market Research',
                description: 'Comprehensive market analysis to understand trends, competitors, and opportunities.'
              },
              {
                icon: 'ri-file-list-3-line',
                title: 'Requirements Analysis',
                description: 'Define clear business requirements and translate them into actionable project specifications.'
              },
              {
                icon: 'ri-bar-chart-box-line',
                title: 'Performance Metrics',
                description: 'Develop KPIs and dashboards to track progress and measure success effectively.'
              },
              {
                icon: 'ri-lightbulb-line',
                title: 'Strategic Insights',
                description: 'Provide recommendations based on data-driven analysis to guide strategic decisions.'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <i className={`${service.icon} text-3xl text-blue-900`}></i>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Key Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              'Make informed decisions based on accurate data analysis',
              'Identify cost-saving opportunities and efficiency improvements',
              'Understand market dynamics and competitive positioning',
              'Align business processes with strategic objectives',
              'Reduce risks through comprehensive impact analysis',
              'Improve stakeholder communication with clear insights'
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-check-line text-white text-lg"></i>
                </div>
                <p className="text-gray-700 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Analysis Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understand your business context, challenges, and objectives' },
              { step: '02', title: 'Data Collection', description: 'Gather relevant data from multiple sources and stakeholders' },
              { step: '03', title: 'Analysis', description: 'Apply analytical frameworks to extract meaningful insights' },
              { step: '04', title: 'Recommendations', description: 'Deliver actionable strategies with implementation roadmap' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-red-600 mb-4">{phase.step}</div>
                <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                <p className="text-blue-100">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Ready to Unlock Your Business Potential?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's analyze your business and discover opportunities for growth and optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-block">
              Request Analysis
            </Link>
            <a href="tel:4168575901" className="bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors inline-block">
              Call 416-857-5901
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link to="/" className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-blue-900 font-bold text-xl">T</span>
                </div>
                <span className="text-xl font-bold">TICS</span>
              </Link>
              <p className="text-blue-200 text-sm">Empowering Organizations. Breaking Barriers. Achieving Results.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-blue-200">
                <li><Link to="/" className="hover:text-red-600 transition-colors">Home</Link></li>
                <li><Link to="/services" className="hover:text-red-600 transition-colors">Services</Link></li>
                <li><Link to="/about" className="hover:text-red-600 transition-colors">About</Link></li>
                <li><Link to="/why-us" className="hover:text-red-600 transition-colors">Why Us?</Link></li>
                <li><Link to="/contact" className="hover:text-red-600 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-blue-200 text-sm">
                <li>35 Van Kirk Dr, Unit 14B</li>
                <li>Brampton, ON L7A 1A</li>
                <li><a href="tel:4168575901" className="hover:text-red-600 transition-colors">416-857-5901</a></li>
                <li><a href="mailto:ticonsultingservicestogo@gmail.com" className="hover:text-red-600 transition-colors">ticonsultingservicestogo@gmail.com</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <i className="ri-linkedin-fill text-xl"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <i className="ri-twitter-fill text-xl"></i>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                  <i className="ri-facebook-fill text-xl"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 pt-8 text-center text-blue-200 text-sm">
            <p>&copy; 2025 Trinity International Consulting Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
