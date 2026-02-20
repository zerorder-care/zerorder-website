"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

/**
 * Header Component
 * Design: Modern Medical Minimalism
 * - Clean navigation with Zerorder branding
 * - Responsive mobile menu
 * - Language toggle (KO | EN) - preserves current page
 */

interface HeaderProps {
  locale?: "ko" | "en";
}

export default function Header({ locale = "ko" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Generate paths based on locale
  const basePath = locale === "en" ? "/en" : "";
  const homePath = locale === "en" ? "/en" : "/";
  const teamPath = `${basePath}/team`;
  const contactPath = `${basePath}/contact`;

  // Language toggle paths - preserve current page
  const getLocalizedPath = (targetLocale: "ko" | "en") => {
    // Remove /en prefix if present to get the base path
    const pathWithoutLocale = pathname.startsWith("/en")
      ? pathname.slice(3) || "/"
      : pathname;

    // Build path for target locale
    if (targetLocale === "en") {
      return pathWithoutLocale === "/" ? "/en" : `/en${pathWithoutLocale}`;
    } else {
      return pathWithoutLocale || "/";
    }
  };

  const koPath = getLocalizedPath("ko");
  const enPath = getLocalizedPath("en");

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href={homePath} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">Z</span>
          </div>
          <span className="font-bold text-xl hidden sm:inline text-foreground">
            Zerorder
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href={teamPath} className="text-foreground hover:text-primary transition-colors font-medium">
            Team
          </Link>
          <Link
            href={contactPath}
            className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Contact
          </Link>
          {/* Language Toggle */}
          <div className="flex items-center gap-1 text-sm font-medium">
            <Link
              href={koPath}
              className={`px-2 py-1 rounded transition-colors ${
                locale === "ko"
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              KO
            </Link>
            <span className="text-muted-foreground">|</span>
            <Link
              href={enPath}
              className={`px-2 py-1 rounded transition-colors ${
                locale === "en"
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              EN
            </Link>
          </div>
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
              href={teamPath}
              className="text-foreground hover:text-primary transition-colors font-medium py-2 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </Link>
            <Link
              href={contactPath}
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            {/* Mobile Language Toggle */}
            <div className="flex items-center justify-center gap-2 pt-2 border-t border-border">
              <Link
                href={koPath}
                className={`px-3 py-1 rounded transition-colors ${
                  locale === "ko"
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                KO
              </Link>
              <span className="text-muted-foreground">|</span>
              <Link
                href={enPath}
                className={`px-3 py-1 rounded transition-colors ${
                  locale === "en"
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                EN
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
