import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation currentPage="home" />

      {/* Hero Section */}
      <section className="bg-white border-b border-subtle">
        <div className="container mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h1 className="serif-display text-4xl text-burgundy mb-4">
              Quantum Information & Quantum Optics
            </h1>
            <p className="text-base text-muted-dark mb-2">
              <span className="font-semibold">Dr. Sarah Chen</span> • Assistant Professor, Department of Physics
            </p>
            <p className="text-base text-muted-dark mb-6">
              University of California, Berkeley
            </p>
            <p className="text-sm leading-relaxed text-foreground max-w-2xl">
              Our research group focuses on the theoretical foundations of quantum information processing and quantum optics. We develop novel quantum codes, error correction strategies, and optical implementations for scalable quantum computation. Through close collaboration with experimental groups, we bridge theory and practice to advance quantum technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Research Highlights */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="serif-display text-3xl text-burgundy mb-12">Featured Research</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Highlight 1 */}
            <div className="bg-white border border-subtle p-6">
              <div className="mb-4 h-48 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1635070041078-e5b94fbb3d5c?w=400&h=300&fit=crop" 
                  alt="Quantum error correction concept"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="serif-display text-xl text-burgundy mb-3">
                Bosonic Codes for Quantum Error Correction
              </h3>
              <p className="text-sm text-foreground mb-4 leading-relaxed">
                We develop novel bosonic quantum error correction codes that leverage continuous variable encoding in superconducting cavities. Our approach achieves exponential suppression of logical errors with polynomial overhead.
              </p>
              <a href="/research#bosonic-codes" className="text-burgundy text-sm font-semibold hover:text-orange-700 flex items-center gap-2">
                Learn More <ChevronRight size={14} />
              </a>
            </div>

            {/* Highlight 2 */}
            <div className="bg-white border border-subtle p-6">
              <div className="mb-4 h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=400&h=300&fit=crop" 
                  alt="Quantum optics experiment"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="serif-display text-xl text-burgundy mb-3">
                Measurement-Based Quantum Computing
              </h3>
              <p className="text-sm text-foreground mb-4 leading-relaxed">
                Our theoretical framework optimizes measurement-based quantum computing using cat codes and cluster states. We achieve fault tolerance with realistic experimental parameters.
              </p>
              <a href="/research#measurement-based" className="text-burgundy text-sm font-semibold hover:text-blue-700 flex items-center gap-2">
                Learn More <ChevronRight size={14} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Highlight 3 */}
            <div className="bg-white border border-subtle p-6">
              <div className="mb-4 h-48 bg-gradient-to-br from-green-100 to-teal-100 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=400&h=300&fit=crop" 
                  alt="Quantum metrology"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="serif-display text-xl text-burgundy mb-3">
                Quantum Metrology & Sensing
              </h3>
              <p className="text-sm text-foreground mb-4 leading-relaxed">
                We design quantum sensing protocols that achieve Heisenberg-limited precision using entangled photon states. Applications include atomic clocks and gravitational wave detection.
              </p>
              <a href="/research#metrology" className="text-burgundy text-sm font-semibold hover:text-green-700 flex items-center gap-2">
                Learn More <ChevronRight size={14} />
              </a>
            </div>

            {/* Highlight 4 */}
            <div className="bg-white border border-subtle p-6">
              <div className="mb-4 h-48 bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1579033100900-f29202c94f95?w=400&h=300&fit=crop" 
                  alt="Quantum simulation"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="serif-display text-xl text-burgundy mb-3">
                Quantum Simulation & Dynamics
              </h3>
              <p className="text-sm text-foreground mb-4 leading-relaxed">
                We develop efficient quantum algorithms for simulating many-body dynamics and open quantum systems. Our methods enable study of non-equilibrium phenomena on near-term quantum processors.
              </p>
              <a href="/research#simulation" className="text-burgundy text-sm font-semibold hover:text-rose-700 flex items-center gap-2">
                Learn More <ChevronRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-12 bg-white border-t border-subtle">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="serif-display text-2xl text-burgundy mb-8">Latest News</h2>
          <div className="space-y-4">
            <div className="border-l-2 border-burgundy pl-4">
              <p className="text-xs text-muted-dark font-semibold mb-1">December 2024</p>
              <p className="text-sm text-foreground">
                <span className="font-semibold">New Publication:</span> "Fault-Tolerant Quantum Computing with Kerr-Cat Codes" accepted at Nature Physics.
              </p>
            </div>
            <div className="border-l-2 border-burgundy pl-4">
              <p className="text-xs text-muted-dark font-semibold mb-1">November 2024</p>
              <p className="text-sm text-foreground">
                <span className="font-semibold">Award:</span> Dr. Chen receives the NSF CAREER Award for quantum error correction research.
              </p>
            </div>
            <div className="border-l-2 border-burgundy pl-4">
              <p className="text-xs text-muted-dark font-semibold mb-1">October 2024</p>
              <p className="text-sm text-foreground">
                <span className="font-semibold">Hiring:</span> We are recruiting 2 PhD students for Fall 2025. See our <Link href="/people" className="text-burgundy underline">People</Link> page for details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-subtle py-8 mt-16">
        <div className="container mx-auto max-w-6xl px-6 text-center text-xs text-muted-dark">
          <p>Theoretical Quantum Optics Group • University of California, Berkeley</p>
          <p className="mt-2">© 2024. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
