import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface ContactProps {
  prefilledProject?: string;
}

export const Contact: React.FC<ContactProps> = ({ prefilledProject }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    projectType: prefilledProject || 'Creative Direction',
    budget: '$30,000 – $60,000',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide a valid email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please share a brief description of your project.';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Please provide at least 15 characters describing your project.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate clean premium client submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      projectType: 'Creative Direction',
      budget: '$30,000 – $60,000',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0d0d10] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Side: Agency Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c5a880] block mb-3">
                INITIATE A CONVERSATION
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#f5f4f0] leading-tight mb-6">
                Let's Talk
              </h2>
              <p className="text-base text-[#9d9c98] leading-relaxed mb-10">
                We accept a strictly limited number of commissions each quarter to preserve uncompromising quality and attention. Share your vision and our partners will respond within 24 hours.
              </p>

              {/* Direct Channels */}
              <div className="space-y-6 pb-10 border-b border-white/5 text-sm">
                <div>
                  <div className="text-xs text-[#63625f] uppercase tracking-wider mb-1 flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>Inquiries</span>
                  </div>
                  <a
                    href="mailto:hello@auraatelier.design"
                    className="text-base text-[#f5f4f0] hover:text-[#c5a880] transition-colors"
                  >
                    hello@auraatelier.design
                  </a>
                </div>

                <div>
                  <div className="text-xs text-[#63625f] uppercase tracking-wider mb-1 flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>Studio Direct</span>
                  </div>
                  <a
                    href="tel:+919876543210"
                    className="text-base text-[#f5f4f0] hover:text-[#c5a880] transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>

                <div>
                  <div className="text-xs text-[#63625f] uppercase tracking-wider mb-1 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
                    <span>Headquarters</span>
                  </div>
                  <div className="text-base text-[#f5f4f0]">
                    West Bengal, India
                  </div>
                  <div className="text-xs text-[#7c7b77] mt-0.5">
                    Satellite studios in Zurich & Tokyo
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-8">
                <div className="text-xs text-[#63625f] uppercase tracking-wider mb-3">
                  Follow Our Work
                </div>
                <div className="flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-wider text-[#9d9c98]">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#c5a880] transition-colors"
                  >
                    Instagram
                  </a>
                  <span className="text-white/10">·</span>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#c5a880] transition-colors"
                  >
                    LinkedIn
                  </a>
                  <span className="text-white/10">·</span>
                  <a
                    href="https://behance.net"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#c5a880] transition-colors"
                  >
                    Behance
                  </a>
                  <span className="text-white/10">·</span>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#c5a880] transition-colors"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: High-End Contact Form */}
          <div className="lg:col-span-7 bg-[#121216] border border-white/10 p-8 sm:p-10 md:p-12 rounded-2xl relative">
            {isSubmitted ? (
              <div className="py-12 text-center animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#c5a880]/15 text-[#c5a880] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#f5f4f0] mb-3">
                  Inquiry Received with Distinction
                </h3>
                <p className="text-sm text-[#9d9c98] max-w-md mx-auto leading-relaxed mb-8">
                  Thank you, <span className="text-[#f5f4f0] font-medium">{formData.fullName}</span>. Our executive creative partner will review your project requirements and connect with you within 24 business hours.
                </p>
                <button
                  onClick={resetForm}
                  className="px-6 py-3 bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-wider text-[#f5f4f0] rounded-md hover:bg-white/10 transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-medium uppercase tracking-wider text-[#9d9c98] mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Eleanor Vance"
                      className={`w-full px-4 py-3 bg-[#0a0a0c] border rounded-lg text-sm text-[#f5f4f0] placeholder-[#63625f] focus:outline-none transition-colors ${
                        errors.fullName ? 'border-rose-500/70 focus:border-rose-500' : 'border-white/10 focus:border-[#c5a880]'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium uppercase tracking-wider text-[#9d9c98] mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. eleanor@maison.com"
                      className={`w-full px-4 py-3 bg-[#0a0a0c] border rounded-lg text-sm text-[#f5f4f0] placeholder-[#63625f] focus:outline-none transition-colors ${
                        errors.email ? 'border-rose-500/70 focus:border-rose-500' : 'border-white/10 focus:border-[#c5a880]'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone & Company Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-medium uppercase tracking-wider text-[#9d9c98] mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 bg-[#0a0a0c] border border-white/10 rounded-lg text-sm text-[#f5f4f0] placeholder-[#63625f] focus:outline-none focus:border-[#c5a880] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-xs font-medium uppercase tracking-wider text-[#9d9c98] mb-2"
                    >
                      Company / Organization
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Maison Vance or Studio Name"
                      className="w-full px-4 py-3 bg-[#0a0a0c] border border-white/10 rounded-lg text-sm text-[#f5f4f0] placeholder-[#63625f] focus:outline-none focus:border-[#c5a880] transition-colors"
                    />
                  </div>
                </div>

                {/* Dropdowns Row: Project Type & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-xs font-medium uppercase tracking-wider text-[#9d9c98] mb-2"
                    >
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0a0a0c] border border-white/10 rounded-lg text-sm text-[#f5f4f0] focus:outline-none focus:border-[#c5a880] transition-colors cursor-pointer"
                    >
                      <option value="Creative Direction">Creative Direction</option>
                      <option value="Spatial Architecture">Spatial & Architectural Design</option>
                      <option value="Digital Experience">Digital Experience & Web</option>
                      <option value="Brand Strategy">Comprehensive Brand Strategy</option>
                      <option value="Cinematography">Cinematography & Visual Monograph</option>
                      <option value="Full Transformation">Full Atelier Transformation</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-xs font-medium uppercase tracking-wider text-[#9d9c98] mb-2"
                    >
                      Estimated Budget (USD)
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0a0a0c] border border-white/10 rounded-lg text-sm text-[#f5f4f0] focus:outline-none focus:border-[#c5a880] transition-colors cursor-pointer"
                    >
                      <option value="$15,000 – $30,000">$15,000 – $30,000</option>
                      <option value="$30,000 – $60,000">$30,000 – $60,000</option>
                      <option value="$60,000 – $120,000">$60,000 – $120,000</option>
                      <option value="$120,000+">$120,000+ (Master Commission)</option>
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium uppercase tracking-wider text-[#9d9c98] mb-2"
                  >
                    Project Details & Scope *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about the project ambition, timeline, key deliverables, and target audience..."
                    className={`w-full px-4 py-3 bg-[#0a0a0c] border rounded-lg text-sm text-[#f5f4f0] placeholder-[#63625f] focus:outline-none transition-colors ${
                      errors.message ? 'border-rose-500/70 focus:border-rose-500' : 'border-white/10 focus:border-[#c5a880]'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#c5a880] text-[#0a0a0c] text-xs font-semibold tracking-widest uppercase rounded-md hover:bg-[#dfc9a7] transition-all duration-200 active:scale-95 disabled:opacity-50 cursor-pointer shadow-lg shadow-black/40"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
