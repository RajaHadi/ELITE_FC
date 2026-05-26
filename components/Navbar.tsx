"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/players", label: "Squad" },
  { href: "/matches", label: "Fixtures" },
  { href: "/stats", label: "Stats" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-card-border">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 sm:h-20">
        <Link href="/" className="flex items-center gap-2 font-black text-foreground">
          <Image
            src="/Logo.jpeg"
            alt="Elite Intelligence FC"
            width={40}
            height={40}
            className="rounded-full object-cover sm:w-11 sm:h-11 border border-gold/30"
          />
          <span className="hidden lg:inline text-lg bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent uppercase tracking-wider">
            ELITE INTELLIGENCE FC
          </span>
          <span className="lg:hidden text-base bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">
            EIFC
          </span>
        </Link>

        {/* Desktop nav - Center */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-bold uppercase tracking-tight transition-colors ${
                  isActive
                    ? "text-gold-light"
                    : "text-slate-400 hover:text-foreground"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-gold-light rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right - Contact CTA */}
        <div className="hidden md:block">
          <Link
            href="/#contact"
            className="px-6 py-2.5 rounded-lg border border-gold/50 text-gold-light text-sm font-bold hover:bg-gold/10 transition-all uppercase tracking-wide"
          >
            Contact
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-foreground"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden border-t border-card-border px-4 py-3 flex flex-col gap-2"
        >
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-gold/10 text-gold-light"
                    : "text-slate-400 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </motion.div>
      )}
    </nav>
  );
}
