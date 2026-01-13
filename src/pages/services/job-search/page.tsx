import { Link } from 'react-router-dom';

export default function JobSearchPage() {
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
              <i className="ri-briefcase-4-line text-5xl text-white"></i>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
            Job Search Support
          </h1>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Career guidance and resources to help individuals secure meaningful employment opportunities
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20Black%20career%20counselor%20helping%20job%20seeker%20with%20resume%20review%2C%20one-on-one%20career%20guidance%20session%2C%20supportive%20mentoring%2C%20modern%20office%20setting%2C%20professional%20photography%2C%20warm%20natural%20lighting%2C%20high%20quality&width=600&height=800&seq=job-search-hero&orientation=portrait"
                alt="Job Search Support"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Your Partner in Career Success</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Finding the right job can be challenging, but you don't have to do it alone. Our comprehensive job search support services provide the guidance, resources, and strategies you need to land your ideal position.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We work with job seekers at all career stages - from recent graduates to experienced professionals seeking new opportunities - providing personalized support tailored to your unique situation and goals.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our proven approach combines practical job search strategies with confidence-building support to help you navigate the job market successfully and secure meaningful employment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Our Job Search Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'ri-file-text-line',
                title: 'Resume & Cover Letter',
                description: 'Professional resume writing and cover letter development that showcase your skills and experience effectively.'
              },
              {
                icon: 'ri-linkedin-box-line',
                title: 'LinkedIn Optimization',
                description: 'Optimize your LinkedIn profile to attract recruiters and expand your professional network.'
              },
              {
                icon: 'ri-search-line',
                title: 'Job Search Strategy',
                description: 'Develop targeted job search strategies that focus your efforts on the right opportunities.'
              },
              {
                icon: 'ri-user-voice-line',
                title: 'Interview Preparation',
                description: 'Practice interviews, develop strong responses, and build confidence for your job interviews.'
              },
              {
                icon: 'ri-team-line',
                title: 'Networking Guidance',
                description: 'Learn effective networking strategies to uncover hidden opportunities and build valuable connections.'
              },
              {
                icon: 'ri-hand-coin-line',
                title: 'Salary Negotiation',
                description: 'Develop negotiation skills and strategies to secure competitive compensation packages.'
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

      {/* Resources Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">What We Provide</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              'Personalized career assessment and goal setting',
              'Professional resume and cover letter templates',
              'Access to job boards and employment resources',
              'Interview practice and feedback sessions',
              'Networking strategies and connection opportunities',
              'Industry insights and labor market information',
              'Application tracking and follow-up guidance',
              'Ongoing support throughout your job search journey'
            ].map((resource, index) => (
              <div key={index} className="flex items-start space-x-4 bg-gray-50 p-6 rounded-xl">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <i className="ri-check-line text-white text-xl"></i>
                </div>
                <p className="text-gray-700 text-lg">{resource}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Your Job Search Journey</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Assessment',
                description: 'Evaluate your skills, experience, and career goals to identify the right opportunities.'
              },
              {
                step: '02',
                title: 'Preparation',
                description: 'Develop compelling application materials and prepare for interviews.'
              },
              {
                step: '03',
                title: 'Search & Apply',
                description: 'Execute your job search strategy and submit targeted applications.'
              },
              {
                step: '04',
                title: 'Success',
                description: 'Navigate interviews, negotiate offers, and transition into your new role.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Find Your Next Opportunity?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's work together to accelerate your job search and land your ideal position.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-block">
              Get Started Today
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
