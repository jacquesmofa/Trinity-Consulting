import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<{ [key: string]: string }>({});

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>, formId: string, submitUrl: string) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Validate textarea length
    const message = formData.get('message') as string;
    if (message && message.length > 500) {
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
              <Link to="/services" className="text-white uppercase text-sm tracking-wider hover:text-red-600 transition-colors duration-300 whitespace-nowrap cursor-pointer">Services</Link>
              <Link to="/about" className="text-white uppercase text-sm tracking-wider hover:text-red-600 transition-colors duration-300 whitespace-nowrap cursor-pointer">About</Link>
              <Link to="/why-us" className="text-white uppercase text-sm tracking-wider hover:text-red-600 transition-colors duration-300 whitespace-nowrap cursor-pointer">Why Us?</Link>
              <Link to="/contact" className="text-red-600 uppercase text-sm tracking-wider whitespace-nowrap cursor-pointer">Contact</Link>
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
          <h1 className="font-serif text-6xl font-bold mb-6">Let's Work Together</h1>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">Thanks for your interest. Would you like us to work together as a team?</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-4xl font-bold text-blue-900 mb-8">Get In Touch</h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                We're here to help you transform your organization. Reach out to us through any of the channels below, and let's start a conversation about your goals.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-phone-line text-white text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900 text-xl mb-2">Phone</h3>
                    <a href="tel:4168575901" className="text-gray-700 text-lg hover:text-red-600 transition-colors cursor-pointer">416-857-5901</a>
                    <p className="text-gray-600 text-sm mt-1">Monday - Friday, 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-mail-line text-white text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900 text-xl mb-2">Email</h3>
                    <a href="mailto:ticonsultingservicestogo@gmail.com" className="text-gray-700 text-lg hover:text-red-600 transition-colors cursor-pointer break-all">ticonsultingservicestogo@gmail.com</a>
                    <p className="text-gray-600 text-sm mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="ri-map-pin-line text-white text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900 text-xl mb-2">Office Location</h3>
                    <p className="text-gray-700 text-lg">35 Van Kirk Dr, Unit 14B</p>
                    <p className="text-gray-700 text-lg">Brampton, ON L7A 1A</p>
                    <p className="text-gray-600 text-sm mt-1">By appointment only</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg mb-12">
                <h3 className="font-bold text-blue-900 text-2xl mb-6">Office Hours</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="font-semibold">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="font-semibold">Saturday</span>
                    <span>By Appointment</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-blue-900 text-xl mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-all hover:scale-110 cursor-pointer">
                    <i className="ri-linkedin-fill text-2xl"></i>
                  </a>
                  <a href="#" className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-all hover:scale-110 cursor-pointer">
                    <i className="ri-facebook-fill text-2xl"></i>
                  </a>
                  <a href="#" className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-all hover:scale-110 cursor-pointer">
                    <i className="ri-twitter-fill text-2xl"></i>
                  </a>
                  <a href="#" className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-all hover:scale-110 cursor-pointer">
                    <i className="ri-instagram-line text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-10 shadow-2xl">
              <h3 className="font-serif text-3xl font-bold text-blue-900 mb-3">Request Your Free Consultation</h3>
              <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
              
              <form className="space-y-6" data-readdy-form id="contact-form" onSubmit={(e) => handleFormSubmit(e, 'contact', 'https://readdy.ai/api/form/d5du2nufmrgp9cvlvlk0')}>
                <div className="relative">
                  <input type="text" name="name" required className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none peer text-base" placeholder=" " />
                  <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm transition-all">Full Name *</label>
                </div>

                <div className="relative">
                  <input type="email" name="email" required className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none peer text-base" placeholder=" " />
                  <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm transition-all">Email Address *</label>
                </div>

                <div className="relative">
                  <input type="tel" name="phone" required className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none peer text-base" placeholder=" " />
                  <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm transition-all">Phone Number *</label>
                </div>

                <div className="relative">
                  <input type="text" name="company" className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none peer text-base" placeholder=" " />
                  <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm transition-all">Company/Organization</label>
                </div>

                <div className="relative">
                  <select name="service" required className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none appearance-none text-base cursor-pointer">
                    <option value="">Select a Service *</option>
                    <option value="Workshops & Skills Training">Workshops & Skills Training</option>
                    <option value="Seminars & Conferences">Seminars & Conferences</option>
                    <option value="Grant Writing & Evaluation">Grant Writing & Evaluation</option>
                    <option value="Capacity Building">Capacity Building</option>
                    <option value="Coaching & Life Skills">Coaching & Life Skills</option>
                    <option value="Strategic Planning">Strategic Planning</option>
                    <option value="Job Search Support">Job Search Support</option>
                    <option value="Business Analysis">Business Analysis</option>
                    <option value="Sales & Marketing">Sales & Marketing</option>
                    <option value="Racial & Social Equity">Racial & Social Equity</option>
                    <option value="Business Registration">Business Registration</option>
                    <option value="Translation Services">Translation Services</option>
                    <option value="Multiple Services">Multiple Services</option>
                    <option value="Not Sure - Need Consultation">Not Sure - Need Consultation</option>
                  </select>
                  <i className="ri-arrow-down-s-line absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none text-xl"></i>
                </div>

                <div className="relative">
                  <textarea name="message" rows={5} maxLength={500} required className="w-full px-4 py-4 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none peer resize-none text-base" placeholder=" "></textarea>
                  <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-gray-600 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm transition-all">Tell us about your project (Max 500 characters) *</label>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-3">Estimated Budget Range</p>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3 cursor-pointer group">
                      <input type="radio" name="budget" value="Under $5,000" className="w-5 h-5 text-red-600" />
                      <span className="text-gray-700 group-hover:text-blue-900">Under $5,000</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer group">
                      <input type="radio" name="budget" value="$5,000 - $10,000" className="w-5 h-5 text-red-600" />
                      <span className="text-gray-700 group-hover:text-blue-900">$5,000 - $10,000</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer group">
                      <input type="radio" name="budget" value="$10,000 - $25,000" className="w-5 h-5 text-red-600" />
                      <span className="text-gray-700 group-hover:text-blue-900">$10,000 - $25,000</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer group">
                      <input type="radio" name="budget" value="$25,000 - $50,000" className="w-5 h-5 text-red-600" />
                      <span className="text-gray-700 group-hover:text-blue-900">$25,000 - $50,000</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer group">
                      <input type="radio" name="budget" value="$50,000+" className="w-5 h-5 text-red-600" />
                      <span className="text-gray-700 group-hover:text-blue-900">$50,000+</span>
                    </label>
                  </div>
                </div>

                {formStatus.contact === 'success' && (
                  <div className="bg-green-50 border border-green-500 text-green-700 px-4 py-3 rounded-lg">
                    Thank you! We'll get back to you within 24 hours.
                  </div>
                )}
                {formStatus.contact === 'error' && (
                  <div className="bg-red-50 border border-red-500 text-red-700 px-4 py-3 rounded-lg">
                    Please check your input and try again.
                  </div>
                )}

                <button type="submit" className="w-full bg-red-600 text-white py-5 rounded-lg font-semibold text-lg hover:bg-red-700 transition-all duration-300 hover:shadow-xl flex items-center justify-center space-x-3 whitespace-nowrap cursor-pointer">
                  <span>Send Your Request</span>
                  <i className="ri-send-plane-fill"></i>
                </button>

                <p className="text-xs text-gray-500 text-center">By submitting this form, you agree to be contacted by TICS regarding your inquiry.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-5xl font-bold text-blue-900 mb-4">Visit Our Office</h2>
            <p className="text-xl text-gray-600">Located in the heart of Brampton, serving the Greater Toronto Area</p>
          </div>
          
          <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ height: '500px' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.5!2d-79.7!3d43.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQyJzAwLjAiTiA3OcKwNDInMDAuMCJX!5e0!3m2!1sen!2sca!4v1234567890" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="TICS Office Location"
            ></iframe>
          </div>

          <div className="mt-8 text-center">
            <a href="https://maps.google.com/?q=35+Van+Kirk+Dr+Unit+14B+Brampton+ON+L7A+1A" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 hover:shadow-xl whitespace-nowrap cursor-pointer">
              <i className="ri-map-line text-xl"></i>
              <span>Get Directions</span>
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
              <form className="flex" data-readdy-form id="newsletter-form-contact" onSubmit={(e) => handleFormSubmit(e, 'newsletter', 'https://readdy.ai/api/form/d5du2nufmrgp9cvlvljg')}>
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
