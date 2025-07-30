import React, { useState, useEffect } from 'react';

const CrealysisApp = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    title: '',
    message: ''
  });
  const [formMessage, setFormMessage] = useState({ text: '', type: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // --- MODIFIED handleSubmit FUNCTION ---
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormMessage({ text: '', type: '' });

    const recipientEmail = 'crealysislimited@gmail.com';

    // Construct the subject line
    let subject = `New inquiry from ${formData.name}`;
    if (formData.company) {
      subject += ` - ${formData.company}`;
    } else {
      subject += ` (No Company)`;
    }

    // Construct the email body
    const body = `
      Name: ${formData.name}
      Email: ${formData.email}
      Company: ${formData.company}
      Job Title: ${formData.title}

      Message:
      ${formData.message}
    `;

    // Encode subject and body for URL
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    // Create the mailto link
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodedSubject}&body=${encodedBody}`;

    try {
      // Open the user's default email client
      window.location.href = mailtoLink;

      // Provide immediate feedback to the user that the email client is opening
      setFormMessage({
        text: 'Your email client is opening with your message. Please click "Send" to complete the inquiry.',
        type: 'success'
      });

      // Optionally, reset the form after a short delay
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          title: '',
          message: ''
        });
        setIsSubmitting(false); // Reset submitting state after opening email client
      }, 1000); // Give a small delay for the mailto link to process
    } catch (error) {
      // This catch block might not be very effective for mailto errors
      setFormMessage({
        text: 'Could not open email client. Please ensure you have one configured.',
        type: 'error'
      });
      setIsSubmitting(false);
    }
  };
  // --- END MODIFIED handleSubmit FUNCTION ---


  const features = [
    {
      title: "Enterprise Security",
      description: "SOC 2 Type II compliant with enterprise-grade security controls and data protection standards."
    },
    {
      title: "Scalable Infrastructure",
      description: "Cloud-native architecture designed to handle enterprise workloads with 99.9% uptime SLA."
    },
    {
      title: "Custom Model Training",
      description: "Train AI models on your specific brand assets, style guides, and creative requirements."
    },
    {
      title: "API-First Integration",
      description: "Comprehensive APIs and SDKs for seamless integration with existing creative tools and workflows."
    },
    {
      title: "Advanced Analytics",
      description: "Detailed insights into creative performance, usage patterns, and ROI measurement."
    }
  ];

  const services = [
    {
      title: "Visual AI Platform",
      description: "Generate high-quality visual content including images, graphics, and video assets with AI models trained specifically for business applications. Maintain brand consistency across all creative outputs."
    },
    {
      title: "Content Intelligence Suite",
      description: "AI-powered copywriting and content creation tools that understand your brand voice, audience, and business objectives. Generate marketing copy, documentation, and communications at scale."
    },
    {
      title: "Creative Workflow Automation",
      description: "Streamline creative processes with intelligent automation. From asset management to approval workflows, reduce manual tasks and accelerate time-to-market."
    },
    {
      title: "Enterprise Integration Services",
      description: "Seamlessly integrate AI creative tools with your existing technology stack. APIs, SDKs, and custom solutions for enterprise-grade deployment and management."
    }
  ];


  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      

      <main>
        {/* Hero Section */}
        <section id="home" className="pt-40 pb-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h1 className="text-6xl lg:text-7xl font-light mb-8 text-gray-900 leading-tight tracking-tight">
                  AI-powered <span className="font-semibold text-blue-600">creative solutions</span> for modern enterprises
                </h1>
                <p className="text-xl mb-12 text-gray-600 leading-relaxed max-w-lg">
                  Transform your creative operations with enterprise-grade AI tools designed for scale, security, and performance. From content generation to creative automation, Crealysis delivers measurable business impact.
                </p>
                <button
                  onClick={() => scrollToSection('services')}
                  className="bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 transition-colors duration-200 font-medium mb-12"
                >
                  Explore solutions
                </button>

                <div className="grid grid-cols-2 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="text-5xl font-light text-blue-600 leading-tight">90%</div>
                    <div className="text-sm text-gray-600 font-medium uppercase tracking-wide">Cost reduction</div>
                  </div>
                  <div>
                    <div className="text-5xl font-light text-blue-600 leading-tight">10x</div>
                    <div className="text-sm text-gray-600 font-medium uppercase tracking-wide">Faster delivery</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-12 border border-gray-200 space-y-6">
                <div className="bg-gray-100 p-6 border-l-4 border-blue-600">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Visual Content Generation</h3>
                  <p className="text-sm text-gray-600">Create professional-grade visuals, illustrations, and designs with enterprise AI models optimized for brand consistency.</p>
                </div>
                <div className="bg-gray-100 p-6 border-l-4 border-blue-600">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Intelligent Content Creation</h3>
                  <p className="text-sm text-gray-600">Generate compelling copy, marketing materials, and documentation that aligns with your brand voice and business objectives.</p>
                </div>
                <div className="bg-gray-100 p-6 border-l-4 border-blue-600">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Creative Automation</h3>
                  <p className="text-sm text-gray-600">Streamline creative workflows with AI-powered automation tools that integrate seamlessly with existing enterprise systems.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="max-w-2xl mb-16">
              <h2 className="text-5xl font-light mb-6 text-gray-900 leading-tight tracking-tight">
                Enterprise AI solutions built for creative teams
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Comprehensive AI-powered tools and services designed to enhance creative productivity while maintaining enterprise security and compliance standards.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 p-12 hover:border-blue-600 hover:shadow-lg transition-all duration-200 relative group"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-blue-600 transition-colors duration-200"></div>
                  <h3 className="text-2xl font-medium mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <button className="text-blue-600 font-medium hover:underline">
                    Learn more →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid lg:grid-cols-3 gap-20 items-start">
              <div>
                <h2 className="text-5xl font-light mb-8 text-gray-900 leading-tight tracking-tight">
                  Key capabilities
                </h2>
                <ul className="space-y-0">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      className={`py-6 border-b border-gray-200 cursor-pointer transition-all duration-200 ${activeFeature === index ? 'bg-blue-50 pl-4' : 'hover:bg-blue-50 hover:pl-4'
                        }`}
                      onClick={() => setActiveFeature(index)}
                    >
                      <h3 className="text-xl font-medium text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-2 bg-white border border-gray-200 h-96 flex items-center justify-center">
                <p className="text-lg text-gray-600">Interactive product demonstration available upon request</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-5xl font-light mb-8 leading-tight">
                  Pioneering enterprise AI for creative industries
                </h2>
                <p className="text-lg mb-6 text-gray-300 leading-relaxed">
                  Crealysis Limited combines cutting-edge artificial intelligence research with deep understanding of enterprise creative operations. Our solutions are trusted by Fortune 500 companies to transform their creative processes.
                </p>
                <p className="text-lg mb-8 text-gray-300 leading-relaxed">
                  Founded by AI researchers and creative industry veterans, we've built proprietary models and platforms specifically designed for business-critical creative applications.
                </p>
                <button className="text-blue-400 font-medium hover:underline">
                  Read our story →
                </button>
              </div>

              <div className="grid grid-cols-1 gap-12">
                <div>
                  <div className="text-6xl font-extralight text-blue-400 leading-none mb-2">99.9%</div>
                  <div className="text-gray-300">Platform uptime SLA</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-20">
              <div>
                <h2 className="text-5xl font-light mb-8 text-gray-900 leading-tight">
                  Ready to transform your creative operations?
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Connect with our enterprise solutions team to discuss how AI can enhance your creative workflows and drive measurable business impact.
                </p>
              </div>

              <div className="bg-gray-100 p-12 border border-gray-200">
                {/* Wrap your form inputs and button in a <form> tag */}
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-sm text-gray-900 mb-2 font-medium">
                      Full name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required // Added 'required' for basic validation
                      className="w-full p-4 border border-gray-400 bg-white text-gray-900 focus:outline-none focus:border-blue-600 transition-colors duration-200"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm text-gray-900 mb-2 font-medium">
                      Business email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required // Added 'required'
                      className="w-full p-4 border border-gray-400 bg-white text-gray-900 focus:outline-none focus:border-blue-600 transition-colors duration-200"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="company" className="block text-sm text-gray-900 mb-2 font-medium">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required // Added 'required'
                      className="w-full p-4 border border-gray-400 bg-white text-gray-900 focus:outline-none focus:border-blue-600 transition-colors duration-200"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="title" className="block text-sm text-gray-900 mb-2 font-medium">
                      Job title
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-full p-4 border border-gray-400 bg-white text-gray-900 focus:outline-none focus:border-blue-600 transition-colors duration-200"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm text-gray-900 mb-2 font-medium">
                      How can we help? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      placeholder="Tell us about your creative challenges and objectives..."
                      required // Added 'required'
                      className="w-full p-4 border border-gray-400 bg-white text-gray-900 focus:outline-none focus:border-blue-600 transition-colors duration-200 resize-y"
                    />
                  </div>

                  <button
                    type="submit" // Changed to type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-600 text-white px-6 py-3 hover:bg-blue-700 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Opening email...' : 'Submit inquiry'}
                  </button>
                </form>

                {formMessage.text && (
                  <div
                    className={`mt-5 p-3 rounded ${formMessage.type === 'success'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                      }`}
                  >
                    {formMessage.text}
                  </div>
                )}

                {/* Added contact email address below the form */}
                <div className="mt-8 text-gray-600 text-center">
                  Prefer to email directly? Reach us at <a href="mailto:crealysislimited@gmail.com" className="text-blue-600 hover:underline">crealysislimited@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
            <div>
              <h3 className="text-white text-base font-medium mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-blue-400 transition-colors duration-200">Visual AI Platform</a></li>
                <li><a href="#" className="text-sm hover:text-blue-400 transition-colors duration-200">Content Intelligence</a></li>
                <li><a href="#" className="text-sm hover:text-blue-400 transition-colors duration-200">Workflow Automation</a></li>
                <li><a href="#" className="text-sm hover:text-blue-400 transition-colors duration-200">Enterprise Integration</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-base font-medium mb-4">Products</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-blue-400 transition-colors duration-200">API Documentation</a></li>
                <li><a href="#" className="text-sm hover:text-blue-400 transition-colors duration-200">SDK Downloads</a></li>
                <li><a href="#" className="text-sm hover:text-blue-400 transition-colors duration-200">Model Training</a></li>
                <li><a href="#" className="text-sm hover:text-blue-400 transition-colors duration-200">Analytics Dashboard</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-base font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-blue-400 transition-colors duration-200">About Us</a></li>
                <li><a href="#" className="text-sm hover:text-blue-400 transition-colors duration-200">Leadership</a></li>
                <li><a href="#" className="text-sm hover:text-blue-400 transition-colors duration-200">Careers</a></li>
                <li><a href="#" className="text-sm hover:text-blue-400 transition-colors duration-200">News</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-base font-medium mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-blue-400 transition-colors duration-200">Documentation</a></li>
                <li><a href="#" className="text-sm hover:text-blue-400 transition-colors duration-200">Help Center</a></li>
                <li><a href="#" className="text-sm hover:text-blue-400 transition-colors duration-200">Contact Support</a></li>
                <li><a href="#" className="text-sm hover:text-blue-400 transition-colors duration-200">System Status</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-700 text-center text-sm">
            <p>&copy; 2025 Crealysis Limited. All rights reserved. | Privacy Policy | Terms of Service | Security</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CrealysisApp;