import { Link } from 'react-router-dom';

export default function SalesMarketingPage() {
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
              <i className="ri-megaphone-line text-4xl"></i>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sales &amp; Marketing</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Strategic approaches to expand market reach and drive revenue growth
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Accelerate Your Business Growth</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our Sales &amp; Marketing services combine strategic thinking with tactical execution to help you reach your target audience, convert leads, and build lasting customer relationships.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From brand positioning to digital campaigns, we create integrated strategies that deliver measurable results and sustainable growth.
              </p>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20Black%20marketing%20team%20collaborating%20on%20campaign%20strategy%2C%20modern%20office%20with%20marketing%20materials%20and%20digital%20screens%2C%20creative%20brainstorming%20session%2C%20diverse%20team%20members%20engaged%20in%20discussion%2C%20bright%20professional%20environment%2C%20high%20detail%20photography&width=600&height=800&seq=sm1&orientation=portrait"
                alt="Sales and Marketing"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Our Marketing Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'ri-rocket-line',
                title: 'Brand Strategy',
                description: 'Develop compelling brand identities that resonate with your target audience and differentiate you from competitors.'
              },
              {
                icon: 'ri-global-line',
                title: 'Digital Marketing',
                description: 'Leverage SEO, social media, content marketing, and paid advertising to maximize online visibility.'
              },
              {
                icon: 'ri-mail-send-line',
                title: 'Email Campaigns',
                description: 'Create targeted email marketing campaigns that nurture leads and drive conversions.'
              },
              {
                icon: 'ri-user-star-line',
                title: 'Sales Training',
                description: 'Equip your sales team with proven techniques and strategies to close more deals effectively.'
              },
              {
                icon: 'ri-line-chart-line',
                title: 'Lead Generation',
                description: 'Implement systems to attract, capture, and qualify high-quality leads for your business.'
              },
              {
                icon: 'ri-customer-service-2-line',
                title: 'Customer Retention',
                description: 'Build loyalty programs and engagement strategies that turn customers into brand advocates.'
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
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">Why Choose Our Marketing Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              'Increase brand awareness and market visibility',
              'Generate qualified leads and improve conversion rates',
              'Build strong customer relationships and loyalty',
              'Optimize marketing ROI with data-driven strategies',
              'Stay ahead of competitors with innovative approaches',
              'Scale your business with sustainable growth tactics'
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
          <h2 className="text-3xl font-bold mb-12 text-center">Our Marketing Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Research', description: 'Analyze market, competitors, and target audience insights' },
              { step: '02', title: 'Strategy', description: 'Develop comprehensive marketing and sales strategies' },
              { step: '03', title: 'Execute', description: 'Implement campaigns across multiple channels' },
              { step: '04', title: 'Optimize', description: 'Monitor performance and refine for better results' }
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
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Ready to Boost Your Sales?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Let's create a marketing strategy that drives real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-block">
              Get Started
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
