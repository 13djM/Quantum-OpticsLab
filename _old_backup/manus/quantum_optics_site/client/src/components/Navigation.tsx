import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useScrollHide } from "@/hooks/useScrollHide";

interface NavigationProps {
  currentPage?: string;
}

export function Navigation({ currentPage = "home" }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isNavVisible = useScrollHide();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const navLinks = [
    { href: "/", label: "Home", id: "home" },
    { href: "/research", label: "Research", id: "research" },
    { href: "/people", label: "People", id: "people" },
    { href: "/publications", label: "Publications", id: "publications" },
    { href: "/contact", label: "Contact", id: "contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block border-b border-subtle bg-white sticky top-0 z-40">
        <div className="container mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="serif-display text-2xl text-burgundy">
            Theoretical Quantum Optics
          </Link>
          <div className="flex gap-8 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={`transition-colors ${
                  currentPage === link.id
                    ? "font-semibold text-burgundy"
                    : "text-muted-dark hover:text-burgundy"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav
        className={`md:hidden fixed top-0 left-0 right-0 bg-white border-b border-subtle z-50 transition-transform duration-300 ${
          isNavVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="px-4 py-3 flex items-center justify-between">
          <Link href="/" className="serif-display text-lg text-burgundy" onClick={handleLinkClick}>
            Quantum Optics
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-burgundy hover:bg-cream rounded transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="bg-white border-t border-subtle px-4 py-3 space-y-2 animate-in fade-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={handleLinkClick}
                className={`block px-4 py-2 rounded text-sm transition-colors ${
                  currentPage === link.id
                    ? "bg-burgundy text-white font-semibold"
                    : "text-foreground hover:bg-cream"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Mobile spacer to prevent content overlap */}
      {isMobile && <div className="h-14 md:h-0" />}
    </>
  );
}
