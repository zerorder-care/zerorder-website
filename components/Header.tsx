"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

/**
 * Header Component
 * Design: Modern Medical Minimalism
 * - Clean navigation with Zerorder branding
 * - Responsive mobile menu
 * - Smooth transitions and hover effects
 */

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">Z</span>
          </div>
          <span className="font-bold text-xl hidden sm:inline text-foreground">
            Zerorder
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/team" className="text-foreground hover:text-primary transition-colors font-medium">
            Team
          </Link>
          <Link
            href="/contact"
            className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/team"
              className="text-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              href="/contact"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
