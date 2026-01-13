import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: 'Workshops & Skills Training',
      description: 'Comprehensive training programs designed to enhance team capabilities and drive organizational excellence through hands-on learning experiences.',
      icon: 'ri-presentation-line',
      details: 'Our workshops cover leadership development, technical skills, soft skills enhancement, and industry-specific training tailored to your organizational needs.',
      benefits: ['Enhanced team performance', 'Improved productivity', 'Skill gap closure', 'Employee engagement'],
      link: '/services/workshops-training'
    },
    {
      id: 2,
      title: 'Seminars & Conferences',
      description: 'Engaging events that bring together thought leaders and industry experts for knowledge sharing and networking opportunities.',
      icon: 'ri-group-line',
      details: 'We organize and facilitate impactful seminars and conferences that inspire innovation, foster collaboration, and drive industry advancement.',
      benefits: ['Knowledge exchange', 'Networking opportunities', 'Industry insights', 'Professional development'],
      link: '/services/seminars-conferences'
    },
    {
      id: 3,
      title: 'Grant Writing & Evaluation',
      description: 'Expert assistance in securing funding through compelling grant proposals and thorough program evaluations.',
      icon: 'ri-file-text-line',
      details: 'Our experienced team crafts persuasive grant applications and conducts comprehensive evaluations to maximize your funding success.',
      benefits: ['Increased funding success', 'Professional proposals', 'Impact measurement', 'Compliance assurance'],
      link: '/services/grant-writing'
    },
    {
      id: 4,
      title: 'Capacity Building',
      description: 'Strengthening organizational infrastructure to achieve sustainable growth and maximize impact in your community.',
      icon: 'ri-building-line',
      details: 'We help organizations develop robust systems, processes, and capabilities to enhance effectiveness and achieve long-term sustainability.',
      benefits: ['Organizational strength', 'Sustainable growth', 'Improved efficiency', 'Enhanced impact'],
      link: '/services/capacity-building'
    },
    {
      id: 5,
      title: 'Coaching & Life Skills',
      description: 'Personalized coaching to unlock potential and develop essential life and leadership skills for personal and professional success.',
      icon: 'ri-user-star-line',
      details: 'Our coaching programs focus on individual growth, leadership development, and building critical life skills for lasting success.',
      benefits: ['Personal growth', 'Leadership development', 'Confidence building', 'Goal achievement'],
      link: '/services/coaching-life-skills'
    },
    {
      id: 6,
      title: 'Strategic Planning',
      description: 'Comprehensive roadmaps that align vision with actionable strategies for long-term organizational success.',
      icon: 'ri-compass-line',
      details: 'We facilitate strategic planning processes that create clear direction, measurable goals, and actionable plans for your organization.',
      benefits: ['Clear direction', 'Aligned objectives', 'Measurable outcomes', 'Competitive advantage'],
      link: '/services/strategic-planning'
    },
    {
      id: 7,
      title: 'Job Search Support',
      description: 'Career guidance and resources to help individuals secure meaningful employment opportunities and advance their careers.',
      icon: 'ri-briefcase-line',
      details: 'Our comprehensive job search support includes resume writing, interview preparation, networking strategies, and career counseling.',
      benefits: ['Career advancement', 'Interview success', 'Professional branding', 'Job placement'],
      link: '/services/job-search'
    },
    {
      id: 8,
      title: 'Business Analysis',
      description: 'Data-driven insights to optimize operations, identify growth opportunities, and make informed strategic decisions.',
      icon: 'ri-line-chart-line',
      details: 'We conduct thorough business analysis to uncover opportunities, streamline processes, and drive organizational performance.',
      benefits: ['Operational efficiency', 'Data-driven decisions', 'Growth identification', 'Risk mitigation'],
      link: '/services/business-analysis'
    },
    {
      id: 9,
      title: 'Sales & Marketing',
      description: 'Strategic approaches to expand market reach, build brand awareness, and drive sustainable revenue growth.',
      icon: 'ri-megaphone-line',
      details: 'Our sales and marketing strategies combine creativity with analytics to deliver measurable results and market leadership.',
      benefits: ['Revenue growth', 'Market expansion', 'Brand awareness', 'Customer acquisition'],
      link: '/services/sales-marketing'
    },
    {
      id: 10,
      title: 'Promoting Racial & Social Equity',
      description: 'Promoting inclusive practices and addressing systemic barriers to create equitable organizations and communities.',
      icon: 'ri-heart-line',
      details: 'We help organizations develop and implement equity strategies that foster inclusion, diversity, and social justice.',
      benefits: ['Inclusive culture', 'Equity advancement', 'Social impact', 'Community engagement'],
      link: '/services/racial-social-equity'
    },
    {
      id: 11,
      title: 'Business Registration',
      description: 'Streamlined support for establishing and registering your business entity with all necessary legal requirements.',
      icon: 'ri-file-list-line',
      details: 'We guide you through the business registration process, ensuring compliance and proper setup for your new venture.',
      benefits: ['Legal compliance', 'Proper structure', 'Time savings', 'Expert guidance'],
      link: '/services/business-registration'
    },
    {
      id: 12,
      title: 'Translation Services',
      description: 'Professional translation to break language barriers and expand your global reach with accurate, culturally-sensitive communication.',
      icon: 'ri-translate',
      details: 'Our translation services ensure your message resonates across languages and cultures with precision and cultural awareness.',
      benefits: ['Global reach', 'Cultural accuracy', 'Clear communication', 'Market expansion'],
      link: '/services/translation'
    }
  ];

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
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="font-serif text-6xl font-bold mb-6">Our 12 Strategic Pillars</h1>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">Comprehensive solutions designed to empower your organization and drive sustainable growth through innovative strategies and collaborative excellence.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-3xl p-8 border-l-4 border-red-600 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-6">
                  <i className={`${service.icon} text-white text-3xl`}></i>
                </div>
                <h3 className="font-serif text-2xl font-bold text-blue-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-bold text-blue-900 mb-3">What We Offer:</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{service.details}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-blue-900 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm text-gray-700">
                        <i className="ri-check-line text-red-600 mt-0.5"></i>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to={service.link} className="inline-flex items-center space-x-2 text-red-600 font-semibold hover:space-x-3 transition-all whitespace-nowrap cursor-pointer">
                  <span>Learn More</span>
                  <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-5xl font-bold mb-6">Ready to Transform Your Organization?</h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">Let's work together to create high levels of value that set new standards of excellence. Contact us today for a free consultation.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-red-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 hover:shadow-xl flex items-center space-x-2 whitespace-nowrap cursor-pointer">
              <span>Request Consultation</span>
              <i className="ri-arrow-right-line"></i>
            </Link>
            <a href="tel:4168575901" className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center space-x-2 whitespace-nowrap cursor-pointer">
              <i className="ri-phone-line"></i>
              <span>Call 416-857-5901</span>
            </a>
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
              <form className="flex" data-readdy-form id="newsletter-form-services">
                <input type="email" name="email" placeholder="Your email" className="flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none" />
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
