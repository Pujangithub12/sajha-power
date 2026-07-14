"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Zap, ChevronDown } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    children: [
      { name: "Message from Chairman", href: "/about/message-from-chairman" },
      { name: "Board of Directors", href: "/about/board-of-directors" },
      { name: "Our Team", href: "/about/our-team" },
    ],
  },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  {
    name: "Disclosure",
    children: [
      { name: "Annual Financial Statements", href: "/disclosure/annual-financial-statements" },
      { name: "Quarterly Financial Statements", href: "/disclosure/quarterly-financial-statements" },
      { name: "News & Notice", href: "/disclosure/news-and-notice" },
    ],
  },
  {
    name: "Subsidiaries",
    children: [
      { name: "Sajha Power", href: "/subsidiaries/sajha-power" },
      { name: "Agrevision Farming and Research", href: "/subsidiaries/agrevision-farming-and-research" },
      { name: "Ridhi Solar Co. Ltd.", href: "/subsidiaries/ridhi-solar" },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setOpenDropdown(null);
    setOpenMobileDropdown(null);
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-lg group-hover:shadow-primary-500/30 transition-shadow">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-slate-900 leading-tight">
                Sajha Power
              </span>
              <span className="text-[10px] font-medium text-primary-600 tracking-wider uppercase">
                Company Limited
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div ref={dropdownRef} className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              if (link.children) {
                const isChildActive = link.children.some((child) => child.href === pathname);
                const isDropdownOpen = openDropdown === link.name;
                return (
                  <div key={link.name} className="relative">
                    <button
                      onClick={() =>
                        setOpenDropdown(isDropdownOpen ? null : link.name)
                      }
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isChildActive
                          ? "text-primary-700 bg-primary-50"
                          : "text-slate-600 hover:text-primary-600 hover:bg-slate-100"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute left-0 top-full mt-2 w-64 rounded-xl bg-white shadow-xl border border-slate-100 py-2 z-50">
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setOpenDropdown(null)}
                            className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                              pathname === child.href
                                ? "text-primary-700 bg-primary-50"
                                : "text-slate-600 hover:text-primary-600 hover:bg-slate-50"
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    pathname === link.href
                      ? "text-primary-700 bg-primary-50"
                      : "text-slate-600 hover:text-primary-600 hover:bg-slate-100"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="ml-2 px-5 py-2.5 rounded-lg bg-gradient-primary text-white text-sm font-semibold shadow-lg shadow-primary-600/20 hover:shadow-primary-600/40 hover:scale-105 transition-all duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur-md">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => {
              if (link.children) {
                const isChildActive = link.children.some((child) => child.href === pathname);
                const isExpanded = openMobileDropdown === link.name;
                return (
                  <div key={link.name}>
                    <button
                      onClick={() =>
                        setOpenMobileDropdown(isExpanded ? null : link.name)
                      }
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isChildActive
                          ? "text-primary-700 bg-primary-50"
                          : "text-slate-600 hover:text-primary-600 hover:bg-slate-50"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isExpanded && (
                      <div className="pl-4 space-y-1 mt-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                              pathname === child.href
                                ? "text-primary-700 bg-primary-50"
                                : "text-slate-500 hover:text-primary-600 hover:bg-slate-50"
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-primary-700 bg-primary-50"
                      : "text-slate-600 hover:text-primary-600 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-2 px-4 py-3 rounded-lg bg-gradient-primary text-white text-sm font-semibold text-center shadow-lg"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
