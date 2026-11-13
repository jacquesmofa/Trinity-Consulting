import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SiteGallery from '../../components/feature/SiteGallery';

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [formStatus, setFormStatus] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => new Set(prev).add(entry.target.id));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>, formId: string, submitUrl: string) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Validate textarea length
    const description = formData.get('description') as string;
    if (description && description.length > 500) {
      setFormStatus({ [formId]: 'error' });
      return;
    }

    // Get selected radio button value
    const budget = formData.get('budget') as string;
    
    // Get selected dropdown value
    const service = form.querySelector('select[name="service"]') as HTMLSelectElement;
    const serviceValue = service?.options[service.selectedIndex]?.text || '';

    // Prepare form data for submission
    const submitData = new URLSearchParams();
    formData.forEach((value, key) => {
      if (key === 'service') {
        submitData.append(key, serviceValue);
      } else if (key === 'budget') {
        submitData.append(key, budget);
      } else {
        submitData.append(key, value.toString());
      }
    });

    try {
      const response = await fetch(submitUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: submitData.toString(),
      });

      if (response.ok) {
        setFormStatus({ [formId]: 'success' });
        form.reset();
        setTimeout(() => setFormStatus({}), 5000);
      } else {
        setFormStatus({ [formId]: 'error' });
      }
    } catch (error) {
      setFormStatus({ [formId]: 'error' });
    }
  };

  const services = [
    { id: 1, title: 'Workshops & Skills Training', description: 'Comprehensive training programs designed to enhance team capabilities and drive organizational excellence.', icon: 'ri-presentation-line', link: '/services/workshops-training' },
    { id: 2, title: 'Seminars & Conferences', description: 'Engaging events that bring together thought leaders and industry experts for knowledge sharing.', icon: 'ri-group-line', link: '/services/seminars-conferences' },
    { id: 3, title: 'Grant Writing & Evaluation', description: 'Expert assistance in securing funding through compelling grant proposals and thorough evaluations.', icon: 'ri-file-text-line', link: '/services/grant-writing' },
    { id: 4, title: 'Capacity Building', description: 'Strengthening organizational infrastructure to achieve sustainable growth and impact.', icon: 'ri-building-line', link: '/services/capacity-building' },
    { id: 5, title: 'Coaching & Life Skills', description: 'Personalized coaching to unlock potential and develop essential life and leadership skills.', icon: 'ri-user-star-line', link: '/services/coaching-life-skills' },
    { id: 6, title: 'Strategic Planning', description: 'Comprehensive roadmaps that align vision with actionable strategies for long-term success.', icon: 'ri-compass-line', link: '/services/strategic-planning' },
    { id: 7, title: 'Job Search Support', description: 'Career guidance and resources to help individuals secure meaningful employment opportunities.', icon: 'ri-briefcase-line', link: '/services/job-search' },
    { id: 8, title: 'Business Analysis', description: 'Data-driven insights to optimize operations and identify growth opportunities.', icon: 'ri-line-chart-line', link: '/services/business-analysis' },
    { id: 9, title: 'Sales & Marketing', description: 'Strategic approaches to expand market reach and drive revenue growth.', icon: 'ri-megaphone-line', link: '/services/sales-marketing' },
    { id: 10, title: 'Racial & Social Equity', description: 'Promoting inclusive practices and addressing systemic barriers to create equitable organizations.', icon: 'ri-heart-line', link: '/services/racial-social-equity' },
    { id: 11, title: 'Business Registration', description: 'Streamlined support for establishing and registering your business entity.', icon: 'ri-file-list-line', link: '/services/business-registration' },
    { id: 12, title: 'Translation Services', description: 'Professional translation to break language barriers and expand your global reach.', icon: 'ri-translate', link: '/services/translation' },
  ];


  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-blue-900/95 backdrop-blur-md shadow-lg' : 'bg-blue-900/85 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 cursor-pointer">
              <img src="https://public.readdy.ai/ai/img_res/8a4b251a-be39-4051-b57b-15cbe3fcf2cc.png" alt="TICS Logo" className="h-12 w-auto" loading="eager" />
              <div className="border-b-2 border-red-600 pb-1">
                <span className="text-white font-bold text-xl tracking-wide">TICS</span>
              </div>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-white uppercase text-sm tracking-wider hover:text-red-600 transition-colors duration-300 whitespace-nowrap cursor-pointer">Home</Link>
              <Link to="/services" className="text-white uppercase text-sm tracking-wider hover:text-red-600 transition-colors duration-300 whitespace-nowrap cursor-pointer">Services</Link>
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
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://readdy.ai/api/search-image?query=diverse%20group%20of%20black%20professionals%20in%20modern%20corporate%20boardroom%20having%20strategic%20meeting%20with%20laptops%20and%20documents%20professional%20business%20setting%20with%20glass%20walls%20natural%20lighting%20collaborative%20atmosphere%20high%20quality%20corporate%20photography&width=1920&height=1080&seq=hero001&orientation=landscape" 
            alt="TICS Team - Strategic Business Consulting" 
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <h1 className="font-serif text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
              Empowering<br />Organizations<br />Since 2006
            </h1>
            <p className="text-2xl text-white/90 font-light mb-10 tracking-wide">Breaking Barriers. Achieving Results.</p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 hover:shadow-xl hover:shadow-red-600/50 flex items-center space-x-2 whitespace-nowrap cursor-pointer">
                <span>Explore Our 12 Pillars</span>
                <i className="ri-arrow-right-line"></i>
              </Link>
              <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center space-x-2 whitespace-nowrap cursor-pointer">
                <i className="ri-calendar-line"></i>
                <span>Book Consultation</span>
              </Link>
            </div>
          </div>

          <div className="absolute bottom-12 right-12 bg-white rounded-2xl px-6 py-4 shadow-xl border-2 border-red-600">
            <p className="text-blue-900 font-bold text-lg">18+ Years of Excellence</p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-12 shadow-md" id="trust" data-animate>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold text-blue-900 mb-2">2006</p>
              <p className="text-gray-600">Established</p>
            </div>
            <div className="text-center border-l-2 border-red-600">
              <p className="text-5xl font-bold text-blue-900 mb-2">12</p>
              <p className="text-gray-600">Service Pillars</p>
            </div>
            <div className="text-center border-l-2 border-red-600">
              <p className="text-5xl font-bold text-blue-900 mb-2">1000+</p>
              <p className="text-gray-600">Clients Served</p>
            </div>
            <div className="text-center border-l-2 border-red-600">
              <p className="text-5xl font-bold text-blue-900 mb-2">GTA</p>
              <p className="text-gray-600">Trusted Partner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-50" id="services" data-animate>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-5xl font-bold text-blue-900 mb-4">Our 12 Strategic Pillars</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive solutions designed to empower your organization and drive sustainable growth through innovative strategies and collaborative excellence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((service, index) => (
              <div key={service.id} className="bg-white rounded-3xl p-6 border-l-4 border-red-600 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer" style={{ backgroundImage: index % 2 === 0 ? `url('https://readdy.ai/api/search-image?query=black%20professional%20consultant%20working%20on%20laptop%20in%20modern%20office%20simple%20clean%20background%20professional%20business%20environment&width=400&height=300&seq=bg00${index}&orientation=landscape')` : 'none', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(255,255,255,0.95)' }}>
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
                  <i className={`${service.icon} text-white text-xl`}></i>
                </div>
                <h3 className="font-bold text-lg text-blue-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <Link to={service.link} className="text-red-600 font-semibold text-sm flex items-center space-x-1 hover:space-x-2 transition-all whitespace-nowrap cursor-pointer">
                  <span>Learn More</span>
                  <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {services.slice(4, 7).map((service, index) => (
              <div key={service.id} className="bg-white rounded-3xl p-6 border-l-4 border-red-600 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer" style={{ backgroundImage: index % 2 === 1 ? `url('https://readdy.ai/api/search-image?query=black%20business%20professional%20in%20consultation%20meeting%20modern%20corporate%20setting%20simple%20background&width=400&height=300&seq=bg00${index + 4}&orientation=landscape')` : 'none', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(255,255,255,0.95)' }}>
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
                  <i className={`${service.icon} text-white text-xl`}></i>
                </div>
                <h3 className="font-bold text-lg text-blue-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <Link to={service.link} className="text-red-600 font-semibold text-sm flex items-center space-x-1 hover:space-x-2 transition-all whitespace-nowrap cursor-pointer">
                  <span>Learn More</span>
                  <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {services.slice(7, 10).map((service, index) => (
              <div key={service.id} className="bg-white rounded-3xl p-6 border-l-4 border-red-600 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer" style={{ backgroundImage: index % 2 === 0 ? `url('https://readdy.ai/api/search-image?query=black%20professional%20team%20collaborating%20in%20modern%20workspace%20business%20consulting%20environment%20simple%20background&width=400&height=300&seq=bg00${index + 7}&orientation=landscape')` : 'none', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(255,255,255,0.95)' }}>
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
                  <i className={`${service.icon} text-white text-xl`}></i>
                </div>
                <h3 className="font-bold text-lg text-blue-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <Link to={service.link} className="text-red-600 font-semibold text-sm flex items-center space-x-1 hover:space-x-2 transition-all whitespace-nowrap cursor-pointer">
                  <span>Learn More</span>
                  <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
            {services.slice(10, 12).map((service, index) => (
              <div key={service.id} className="bg-white rounded-3xl p-6 border-l-4 border-red-600 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer" style={{ backgroundImage: index % 2 === 1 ? `url('https://readdy.ai/api/search-image?query=black%20business%20consultant%20providing%20professional%20services%20modern%20office%20environment%20simple%20clean%20background&width=400&height=300&seq=bg00${index + 10}&orientation=landscape')` : 'none', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay', backgroundColor: 'rgba(255,255,255,0.95)' }}>
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
                  <i className={`${service.icon} text-white text-xl`}></i>
                </div>
                <h3 className="font-bold text-lg text-blue-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <Link to={service.link} className="text-red-600 font-semibold text-sm flex items-center space-x-1 hover:space-x-2 transition-all whitespace-nowrap cursor-pointer">
                  <span>Learn More</span>
                  <i className="ri-arrow-right-line"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Impact */}
      <section className="py-24 bg-blue-900 text-white" id="impact" data-animate>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3">
              <blockquote className="font-serif text-4xl leading-relaxed mb-6">
                "Addressing the World's Most Pressing Issues Through Strategic Excellence"
              </blockquote>
              <p className="text-white/80 text-lg">— Trinity International Consulting Services</p>
            </div>
            <div className="md:col-span-2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="w-full h-80">
                  <img 
                    src="https://readdy.ai/api/search-image?query=black%20community%20leaders%20and%20professionals%20engaged%20in%20collaborative%20community%20development%20meeting%20diverse%20group%20working%20together%20on%20social%20impact%20initiatives%20warm%20inclusive%20atmosphere%20professional%20setting&width=600&height=400&seq=impact001&orientation=landscape" 
                    alt="Community Impact" 
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-600 to-red-600/50 p-6">
                  <p className="text-white font-bold text-2xl mb-2">500+</p>
                  <p className="text-white/90">Community Impact Initiatives</p>
                </div>
              </div>
              <div className="mt-6 bg-white text-blue-900 rounded-full px-6 py-3 inline-flex items-center space-x-2 shadow-lg">
                <i className="ri-heart-line text-red-600"></i>
                <span className="font-semibold whitespace-nowrap">Racial & Social Equity Commitment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 bg-gray-100" id="methodology" data-animate>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="font-serif text-5xl font-bold text-blue-900 mb-4">The TICS Difference</h3>
            <p className="text-xl text-gray-600">Three pillars that define our approach to excellence</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-8 text-white hover:rotate-1 transition-transform duration-300 shadow-xl cursor-pointer">
              <div className="text-6xl font-bold text-red-600 mb-4">01</div>
              <h4 className="font-serif text-3xl font-bold mb-4">Innovative Mindset</h4>
              <p className="text-white/90 leading-relaxed mb-6">We challenge conventional thinking and embrace cutting-edge strategies to deliver solutions that set new standards of excellence in your industry.</p>
              <div className="flex justify-center">
                <i className="ri-lightbulb-line text-red-600 text-6xl"></i>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-8 text-white hover:rotate-1 transition-transform duration-300 shadow-xl cursor-pointer">
              <div className="text-6xl font-bold text-red-600 mb-4">02</div>
              <h4 className="font-serif text-3xl font-bold mb-4">Integrated Ideas</h4>
              <p className="text-white/90 leading-relaxed mb-6">Our holistic approach connects diverse perspectives and disciplines to create comprehensive solutions that address your unique challenges.</p>
              <div className="flex justify-center">
                <i className="ri-links-line text-red-600 text-6xl"></i>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-8 text-white hover:rotate-1 transition-transform duration-300 shadow-xl cursor-pointer">
              <div className="text-6xl font-bold text-red-600 mb-4">03</div>
              <h4 className="font-serif text-3xl font-bold mb-4">Collaboration</h4>
              <p className="text-white/90 leading-relaxed mb-6">We work alongside you as true partners, combining our expertise with your vision to achieve breakthrough results together.</p>
              <div className="flex justify-center">
                <i className="ri-team-line text-red-600 text-6xl"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-white" id="gallery" data-animate>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-red-600 uppercase tracking-[0.25em] text-sm font-semibold">Gallery</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-blue-900 mt-3">Our Work in Pictures</h2>
            <div className="w-20 h-1 bg-red-600 mx-auto mt-6"></div>
          </div>
          <SiteGallery
            note="These pictures are illustrations until our own photos are added."
            theme={{ layout: 'grid', ink: '#1e3a8a', muted: '#4b5563', accent: '#dc2626', accentInk: '#ffffff', tabBg: '#dbeafe', radius: '0', headingClass: 'font-serif' }}
          />
        </div>
      </section>

      {/* Location Banner */}
      <section className="relative py-24 overflow-hidden" id="location" data-animate>
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://readdy.ai/api/search-image?query=brampton%20ontario%20city%20skyline%20at%20dusk%20with%20modern%20buildings%20and%20warm%20golden%20hour%20lighting%20urban%20landscape%20professional%20cityscape%20photography&width=1920&height=600&seq=location001&orientation=landscape" 
            alt="Brampton Skyline" 
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-blue-900/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0">
              <h4 className="font-serif text-5xl font-bold text-white mb-4">Proudly Serving the GTA Since 2006</h4>
            </div>
            <div className="text-right">
              <div className="flex items-start space-x-3 mb-4">
                <i className="ri-map-pin-line text-red-600 text-3xl"></i>
                <div>
                  <p className="text-white text-xl font-semibold">35 Van Kirk Dr, Unit 14B</p>
                  <p className="text-white/90 text-lg">Brampton, ON L7A 1A</p>
                  <p className="text-white/80 text-sm mt-2">Accessible by Appointment</p>
                </div>
              </div>
              <a href="https://maps.google.com/?q=35+Van+Kirk+Dr+Unit+14B+Brampton+ON+L7A+1A" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 hover:shadow-xl whitespace-nowrap cursor-pointer">
                <i className="ri-map-line"></i>
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-50" id="contact" data-animate>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="font-serif text-5xl font-bold text-blue-900 mb-8">Let's Work Together</h4>
              <p className="text-xl text-gray-600 mb-12">Thanks for your interest. Would you like us to work together as a team?</p>

              <div className="space-y-6 mb-12">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <i className="ri-phone-line text-white text-xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <a href="tel:4168575901" className="text-blue-900 font-semibold text-lg hover:text-red-600 transition-colors cursor-pointer">416-857-5901</a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <i className="ri-mail-line text-white text-xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <a href="mailto:ticonsultingservicestogo@gmail.com" className="text-blue-900 font-semibold text-lg hover:text-red-600 transition-colors cursor-pointer break-all">ticonsultingservicestogo@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <i className="ri-map-pin-line text-white text-xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Address</p>
                    <p className="text-blue-900 font-semibold text-lg">35 Van Kirk Dr, Unit 14B<br />Brampton, ON L7A 1A</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h5 className="font-bold text-blue-900 text-xl mb-4">Office Hours</h5>
                <div className="space-y-2 text-gray-700">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: By Appointment</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors cursor-pointer" aria-label="LinkedIn">
                  <i className="ri-linkedin-fill text-xl"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors cursor-pointer" aria-label="Facebook">
                  <i className="ri-facebook-fill text-xl"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors cursor-pointer" aria-label="Twitter">
                  <i className="ri-twitter-fill text-xl"></i>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h5 className="font-serif text-3xl font-bold text-blue-900 mb-6">Request Your Free Consultation</h5>
              <form className="space-y-6" data-readdy-form id="tics-consultation-form" onSubmit={(e) => handleFormSubmit(e, 'consultation', 'https://readdy.ai/api/form/d5du2nufmrgp9cvlvlj0')}>
                <div className="relative">
                  <input type="text" name="name" required className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none peer" placeholder=" " />
                  <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm transition-all">Full Name</label>
                </div>

                <div className="relative">
                  <input type="email" name="email" required className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none peer" placeholder=" " />
                  <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm transition-all">Email Address</label>
                </div>

                <div className="relative">
                  <input type="tel" name="phone" required className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none peer" placeholder=" " />
                  <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm transition-all">Phone Number</label>
                </div>

                <div className="relative">
                  <select name="service" required className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none appearance-none cursor-pointer">
                    <option value="">Select a Service</option>
                    <option value="workshops">Workshops & Skills Training</option>
                    <option value="seminars">Seminars & Conferences</option>
                    <option value="grant">Grant Writing & Evaluation</option>
                    <option value="capacity">Capacity Building</option>
                    <option value="coaching">Coaching & Life Skills</option>
                    <option value="strategic">Strategic Planning</option>
                    <option value="job">Job Search Support</option>
                    <option value="analysis">Business Analysis</option>
                    <option value="sales">Sales & Marketing</option>
                    <option value="equity">Racial & Social Equity</option>
                    <option value="registration">Business Registration</option>
                    <option value="translation">Translation Services</option>
                  </select>
                  <i className="ri-arrow-down-s-line absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none"></i>
                </div>

                <div className="relative">
                  <textarea name="description" rows={4} maxLength={500} required className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none peer resize-none" placeholder=" "></textarea>
                  <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm transition-all">Project Description (Max 500 characters)</label>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-3">Budget Range</p>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input type="radio" name="budget" value="Under $5,000" className="w-4 h-4 text-red-600" />
                      <span className="text-gray-700">Under $5,000</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input type="radio" name="budget" value="$5,000 - $10,000" className="w-4 h-4 text-red-600" />
                      <span className="text-gray-700">$5,000 - $10,000</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input type="radio" name="budget" value="$10,000 - $25,000" className="w-4 h-4 text-red-600" />
                      <span className="text-gray-700">$10,000 - $25,000</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input type="radio" name="budget" value="$25,000+" className="w-4 h-4 text-red-600" />
                      <span className="text-gray-700">$25,000+</span>
                    </label>
                  </div>
                </div>

                {formStatus.consultation === 'success' && (
                  <div className="bg-green-50 border border-green-500 text-green-700 px-4 py-3 rounded-lg">
                    Thank you! We'll contact you within 24 hours.
                  </div>
                )}
                {formStatus.consultation === 'error' && (
                  <div className="bg-red-50 border border-red-500 text-red-700 px-4 py-3 rounded-lg">
                    Please check your input and try again.
                  </div>
                )}

                <button type="submit" className="w-full bg-red-600 text-white py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 hover:shadow-xl flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer">
                  <span>Request Your Free Consultation</span>
                  <i className="ri-arrow-right-line"></i>
                </button>
              </form>
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
                <img src="https://public.readdy.ai/ai/img_res/8a4b251a-be39-4051-b57b-15cbe3fcf2cc.png" alt="TICS Logo" className="h-16" loading="lazy" />
              </Link>
              <Link to="/" className="block mb-4 cursor-pointer">
                <span className="text-white font-bold text-xl tracking-wide hover:text-red-600 transition-colors">TICS</span>
              </Link>
              <p className="text-white/80 text-sm leading-relaxed">Empowering Organizations. Breaking Barriers. Achieving Results.</p>
            </div>

            <div>
              <h5 className="font-bold text-lg mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li><Link to="/" className="text-white/80 hover:text-red-600 transition-colors cursor-pointer">Home</Link></li>
                <li><Link to="/services" className="text-white/80 hover:text-red-600 transition-colors cursor-pointer">Services</Link></li>
                <li><Link to="/about" className="text-white/80 hover:text-red-600 transition-colors cursor-pointer">About</Link></li>
                <li><Link to="/why-us" className="text-white/80 hover:text-red-600 transition-colors cursor-pointer">Why Us?</Link></li>
                <li><Link to="/contact" className="text-white/80 hover:text-red-600 transition-colors cursor-pointer">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-lg mb-4">Service Categories</h5>
              <ul className="space-y-2 text-sm">
                <li className="text-white/80">Strategic Planning</li>
                <li className="text-white/80">Business Development</li>
                <li className="text-white/80">Training & Coaching</li>
                <li className="text-white/80">Social Equity</li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-lg mb-4">Stay Connected</h5>
              <p className="text-white/80 text-sm mb-4">Subscribe to our newsletter for insights and updates</p>
              <form className="flex" data-readdy-form id="newsletter-form" onSubmit={(e) => handleFormSubmit(e, 'newsletter', 'https://readdy.ai/api/form/d5du2nufmrgp9cvlvljg')}>
                <input type="email" name="email" placeholder="Your email" className="flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none" required />
                <button type="submit" className="bg-red-600 px-6 py-2 rounded-r-lg hover:bg-red-700 transition-colors whitespace-nowrap cursor-pointer">Subscribe</button>
              </form>
              {formStatus.newsletter === 'success' && (
                <p className="text-green-400 text-sm mt-2">Subscribed successfully!</p>
              )}
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
                <a href="#" className="hover:text-red-600 transition-colors cursor-pointer" aria-label="LinkedIn"><i className="ri-linkedin-fill text-xl"></i></a>
                <a href="#" className="hover:text-red-600 transition-colors cursor-pointer" aria-label="Facebook"><i className="ri-facebook-fill text-xl"></i></a>
                <a href="#" className="hover:text-red-600 transition-colors cursor-pointer" aria-label="Twitter"><i className="ri-twitter-fill text-xl"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
