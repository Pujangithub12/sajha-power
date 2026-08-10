import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import {
  FaFacebook,
  FaXTwitter, // Modern replacement for Twitter
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

const footerLinks = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about" },
    { name: "News", href: "/about" },
  ],
  services: [
    { name: "Hydro Power Plants", href: "/services" },
    { name: "Transmission Lines", href: "/services" },
    { name: "Substation Design", href: "/services" },
    { name: "Energy Consulting", href: "/services" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-slate-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-14 h-14 overflow-hidden flex items-center justify-center">
                <Image
                  src="/sajha-logo.png"
                  alt="Sajha Power logo"
                  width={56}
                  height={56}
                  className="w-14 h-14 object-contain scale-125"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-tight">
                  Sajha Power
                </span>
                <span className="text-[10px] font-medium text-primary-400 tracking-wider uppercase">
                  Company Limited
                </span>
              </div>
            </Link>
            <p className="text-slate-400 mb-6 max-w-sm leading-relaxed">
              Leading the way in sustainable hydro power development and energy infrastructure across Nepal and beyond.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary-500 flex-shrink-0" />
                <span>5th Floor, Trade Tower, Thapathali, Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary-500 flex-shrink-0" />
                <span>01-5111015</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary-500 flex-shrink-0" />
                <span>sajhapower@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-primary-400 transition-colors flex items-center gap-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-primary-400 transition-colors flex items-center gap-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Sajha Power Company Limited. All rights reserved.
            {" "}
            <Link href="/admin/disclosure" className="hover:text-slate-300 transition-colors">
              Admin
            </Link>
          </p>
          <div className="flex items-center gap-4">
            {[FaFacebook, FaXTwitter, FaLinkedin, FaInstagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary-600 hover:text-white transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
