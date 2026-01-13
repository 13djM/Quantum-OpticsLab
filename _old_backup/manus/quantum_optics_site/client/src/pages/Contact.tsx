import { Link } from "wouter";
import { ChevronLeft, Mail, Phone, MapPin } from "lucide-react";
import { Navigation } from "@/components/Navigation";

export default function Contact() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation currentPage="contact" />

      {/* Hero Section */}
      <section className="bg-white border-b border-subtle">
        <div className="container mx-auto max-w-6xl px-6 py-12">
          <Link href="/" className="text-burgundy text-sm font-semibold flex items-center gap-1 mb-4 hover:text-orange-700">
            <ChevronLeft size={16} /> Back to Home
          </Link>
          <h1 className="serif-display text-4xl text-burgundy mb-4">Contact Us</h1>
          <p className="text-sm text-muted-dark max-w-2xl">
            Get in touch with our research group. We welcome inquiries from prospective students, collaborators, and the broader scientific community.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Contact Details */}
            <div className="bg-white border border-subtle p-8">
              <h2 className="serif-display text-2xl text-burgundy mb-8">Location & Contact</h2>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <MapPin className="text-burgundy flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Office Address</h3>
                    <p className="text-sm text-muted-dark leading-relaxed">
                      Department of Physics<br />
                      University of California, Berkeley<br />
                      366 Physics North<br />
                      Berkeley, CA 94720-7300<br />
                      USA
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <Mail className="text-burgundy flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-sm text-muted-dark">
                      <a href="mailto:s.chen@berkeley.edu" className="text-burgundy hover:text-orange-700 underline">
                        s.chen@berkeley.edu
                      </a>
                    </p>
                    <p className="text-xs text-muted-dark mt-2">
                      For general inquiries about the group
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <Phone className="text-burgundy flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-sm text-muted-dark">
                      +1 (510) 642-3000 ext. 1234
                    </p>
                    <p className="text-xs text-muted-dark mt-2">
                      Department of Physics main line
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white border border-subtle p-8">
              <h2 className="serif-display text-2xl text-burgundy mb-8">Quick Links</h2>
              
              <div className="space-y-4">
                <div className="border-l-2 border-burgundy pl-4">
                  <h3 className="font-semibold text-foreground mb-2">Prospective Students</h3>
                  <p className="text-sm text-muted-dark mb-3">
                    Interested in joining our group? We are recruiting PhD students and postdoctoral researchers.
                  </p>
                  <Link href="/people" className="text-burgundy text-sm font-semibold hover:text-orange-700 underline">
                    Learn about open positions →
                  </Link>
                </div>

                <div className="border-l-2 border-burgundy pl-4">
                  <h3 className="font-semibold text-foreground mb-2">Collaborations</h3>
                  <p className="text-sm text-muted-dark mb-3">
                    We actively collaborate with experimental groups and other theoretical researchers.
                  </p>
                  <a href="mailto:s.chen@berkeley.edu" className="text-burgundy text-sm font-semibold hover:text-orange-700 underline">
                    Reach out to discuss collaboration →
                  </a>
                </div>

                <div className="border-l-2 border-burgundy pl-4">
                  <h3 className="font-semibold text-foreground mb-2">Seminars & Talks</h3>
                  <p className="text-sm text-muted-dark mb-3">
                    We host regular seminars and welcome visiting speakers.
                  </p>
                  <a href="#" className="text-burgundy text-sm font-semibold hover:text-orange-700 underline">
                    View seminar schedule →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-white border border-subtle p-8 mb-12">
            <h2 className="serif-display text-2xl text-burgundy mb-6">Directions</h2>
            <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded flex items-center justify-center">
              <div className="text-center">
                <p className="text-lg text-muted-dark font-semibold mb-2">UC Berkeley Physics Department</p>
                <p className="text-sm text-muted-dark">366 Physics North, Berkeley, CA 94720</p>
              </div>
            </div>
          </div>

          {/* Message Form */}
          <div className="bg-white border border-subtle p-8">
            <h2 className="serif-display text-2xl text-burgundy mb-6">Send a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-subtle rounded text-sm focus:outline-none focus:ring-2 focus:ring-burgundy"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-subtle rounded text-sm focus:outline-none focus:ring-2 focus:ring-burgundy"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-subtle rounded text-sm focus:outline-none focus:ring-2 focus:ring-burgundy"
                  placeholder="Subject of your message"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-2 border border-subtle rounded text-sm focus:outline-none focus:ring-2 focus:ring-burgundy"
                  placeholder="Your message here..."
                />
              </div>
              <button 
                type="submit"
                className="px-6 py-2 bg-burgundy text-white text-sm font-semibold rounded hover:bg-orange-700 transition-colors"
              >
                Send Message
              </button>
            </form>
            <p className="text-xs text-muted-dark mt-4">
              Note: This is a demonstration form. For actual inquiries, please email us directly at <a href="mailto:s.chen@berkeley.edu" className="text-burgundy underline">s.chen@berkeley.edu</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-subtle py-8">
        <div className="container mx-auto max-w-6xl px-6 text-center text-xs text-muted-dark">
          <p>Theoretical Quantum Optics Group • University of California, Berkeley</p>
          <p className="mt-2">© 2024. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
