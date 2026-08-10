"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import {
  FaFacebook,
  FaXTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Full name is required.";
  }

  if (!data.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (data.phone.trim() && !/^[0-9+\-\s()]{7,20}$/.test(data.phone.trim())) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required.";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }

  return errors;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: undefined });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 rounded-xl border bg-white text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:border-transparent focus:shadow-md transition-all ${
      errors[field]
        ? "border-red-400 focus:ring-red-400"
        : "border-slate-200 focus:ring-primary-500"
    }`;

  return (
    <div>
      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Reach out to us through any of the channels below. Our team typically responds
              within 24 business hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Address</h3>
                    <p className="text-slate-500 text-sm">
                      5th Floor, Trade Tower, Thapathali, Kathmandu, Nepal
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Phone</h3>
                    <p className="text-slate-500 text-sm">01-5111015</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Email</h3>
                    <p className="text-slate-500 text-sm">sajhapower@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Business Hours</h3>
                    <p className="text-slate-500 text-sm">Sunday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-slate-500 text-sm">Saturday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-slate-900 mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[FaFacebook, FaXTwitter, FaLinkedin, FaInstagram].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-gradient-primary hover:text-white transition-all"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100 shadow-xl shadow-slate-200/60">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-600">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          className={inputClass("name")}
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => updateField("name", e.target.value)}
                          aria-invalid={!!errors.name}
                        />
                        {errors.name && (
                          <p className="mt-1.5 text-sm text-red-600">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          className={inputClass("email")}
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => updateField("email", e.target.value)}
                          aria-invalid={!!errors.email}
                        />
                        {errors.email && (
                          <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          className={inputClass("phone")}
                          placeholder="+977-XXXXXXXXXX"
                          value={formData.phone}
                          onChange={(e) => updateField("phone", e.target.value)}
                          aria-invalid={!!errors.phone}
                        />
                        {errors.phone && (
                          <p className="mt-1.5 text-sm text-red-600">{errors.phone}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          className={inputClass("company")}
                          placeholder="Your Company"
                          value={formData.company}
                          onChange={(e) => updateField("company", e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Service Interested In
                      </label>
                      <select
                        className={inputClass("service")}
                        value={formData.service}
                        onChange={(e) => updateField("service", e.target.value)}
                      >
                        <option value="">Select a service</option>
                        <option value="hydro">Hydro Power Plant Development</option>
                        <option value="transmission">Transmission Line Construction</option>
                        <option value="substation">Substation Engineering</option>
                        <option value="consulting">Energy Consulting & EIA</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        rows={5}
                        className={`${inputClass("message")} resize-none`}
                        placeholder="Tell us about your project or inquiry..."
                        value={formData.message}
                        onChange={(e) => updateField("message", e.target.value)}
                        aria-invalid={!!errors.message}
                      />
                      {errors.message && (
                        <p className="mt-1.5 text-sm text-red-600">{errors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-primary text-white rounded-xl font-semibold shadow-lg shadow-primary-600/20 hover:shadow-primary-600/40 hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      Send Message <Send className="w-5 h-5" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
              Find Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Trade Tower, Thapathali, Kathmandu
            </h2>
          </div>
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm h-96">
            <iframe
              title="Sajha Power Company Limited - Trade Tower, Thapathali, Kathmandu"
              src="https://www.google.com/maps?q=Trade+Tower,+Thapathali,+Kathmandu,+Nepal&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Have Questions?
          </h2>
          <p className="text-slate-400 mb-8">
            Check out our frequently asked questions or reach out directly to our support team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-primary text-white rounded-xl font-semibold shadow-lg hover:shadow-primary-600/40 hover:scale-105 transition-all flex items-center gap-2"
            >
              Contact Support <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-all"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
