import { Link } from "wouter";
import { ChevronLeft, ExternalLink } from "lucide-react";
import { Navigation } from "@/components/Navigation";

export default function Publications() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation currentPage="publications" />

      {/* Hero Section */}
      <section className="bg-white border-b border-subtle">
        <div className="container mx-auto max-w-6xl px-6 py-12">
          <Link href="/" className="text-burgundy text-sm font-semibold flex items-center gap-1 mb-4 hover:text-orange-700">
            <ChevronLeft size={16} /> Back to Home
          </Link>
          <h1 className="serif-display text-4xl text-burgundy mb-4">Publications</h1>
          <p className="text-sm text-muted-dark max-w-2xl">
            A comprehensive list of our research publications. For the most up-to-date list, visit our <a href="#" className="text-burgundy underline">Google Scholar profile</a>.
          </p>
        </div>
      </section>

      {/* Publications */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto max-w-6xl px-6">
          {/* Featured Publications */}
          <div className="mb-16">
            <h2 className="serif-display text-2xl text-burgundy mb-8">Featured Publications</h2>
            <div className="space-y-6">
              {/* Publication 1 */}
              <div className="bg-white border border-burgundy border-l-4 p-6">
                <p className="text-xs text-burgundy font-semibold mb-2">Nature Physics (2024)</p>
                <h3 className="serif-display text-lg text-burgundy mb-3">
                  Fault-Tolerant Quantum Computing with Kerr-Cat Codes
                </h3>
                <p className="text-sm text-foreground mb-3">
                  <span className="font-semibold">Authors:</span> Chen, S., Park, D., Liu, J., & Chuang, I. L.
                </p>
                <p className="text-sm text-foreground mb-4 leading-relaxed">
                  We present a novel bosonic quantum error correction code based on Kerr non-linearity in superconducting cavities. Our code achieves exponential suppression of logical errors with polynomial overhead, enabling practical fault-tolerant quantum computation.
                </p>
                <div className="flex gap-4 text-sm">
                  <a href="#" className="text-burgundy hover:text-orange-700 flex items-center gap-1 font-semibold">
                    Read Paper <ExternalLink size={14} />
                  </a>
                  <a href="#" className="text-burgundy hover:text-orange-700 flex items-center gap-1 font-semibold">
                    arXiv <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Publication 2 */}
              <div className="bg-white border border-burgundy border-l-4 p-6">
                <p className="text-xs text-burgundy font-semibold mb-2">Physical Review Letters (2023)</p>
                <h3 className="serif-display text-lg text-burgundy mb-3">
                  Measurement-Based Quantum Computing with Topological Error Correction
                </h3>
                <p className="text-sm text-foreground mb-3">
                  <span className="font-semibold">Authors:</span> Chen, S., Zhang, E., & Preskill, J.
                </p>
                <p className="text-sm text-foreground mb-4 leading-relaxed">
                  We develop a framework for measurement-based quantum computing using topological cluster states. Our protocol achieves fault tolerance with realistic experimental parameters and is well-suited for photonic implementations.
                </p>
                <div className="flex gap-4 text-sm">
                  <a href="#" className="text-burgundy hover:text-orange-700 flex items-center gap-1 font-semibold">
                    Read Paper <ExternalLink size={14} />
                  </a>
                  <a href="#" className="text-burgundy hover:text-orange-700 flex items-center gap-1 font-semibold">
                    arXiv <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              {/* Publication 3 */}
              <div className="bg-white border border-burgundy border-l-4 p-6">
                <p className="text-xs text-burgundy font-semibold mb-2">Nature Reviews Physics (2023)</p>
                <h3 className="serif-display text-lg text-burgundy mb-3">
                  Quantum Metrology: From Fundamental Limits to Practical Implementations
                </h3>
                <p className="text-sm text-foreground mb-3">
                  <span className="font-semibold">Authors:</span> Chen, S., Patel, M., & Braunstein, S. L.
                </p>
                <p className="text-sm text-foreground mb-4 leading-relaxed">
                  A comprehensive review of quantum sensing protocols and their applications to atomic clocks, gravitational wave detection, and precision magnetometry. We discuss fundamental limits, practical implementations, and open challenges.
                </p>
                <div className="flex gap-4 text-sm">
                  <a href="#" className="text-burgundy hover:text-orange-700 flex items-center gap-1 font-semibold">
                    Read Paper <ExternalLink size={14} />
                  </a>
                  <a href="#" className="text-burgundy hover:text-orange-700 flex items-center gap-1 font-semibold">
                    arXiv <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* All Publications */}
          <div>
            <h2 className="serif-display text-2xl text-burgundy mb-8">All Publications</h2>
            <div className="space-y-4">
              {/* 2024 */}
              <div className="bg-white border border-subtle p-6">
                <h3 className="serif-display text-lg text-burgundy mb-4">2024</h3>
                <div className="space-y-3 text-sm">
                  <p>
                    <span className="font-semibold">Chen, S., Park, D., Liu, J., & Chuang, I. L.</span> "Fault-Tolerant Quantum Computing with Kerr-Cat Codes." <span className="italic">Nature Physics</span>, 2024.
                  </p>
                  <p>
                    <span className="font-semibold">Zhang, E., Chen, S., & Preskill, J.</span> "Resource-Efficient Cluster States for Measurement-Based Quantum Computing." <span className="italic">PRX Quantum</span>, 2024.
                  </p>
                  <p>
                    <span className="font-semibold">Chen, S., Patel, M., & Thompson, A.</span> "Quantum Simulation of Many-Body Dynamics on Near-Term Quantum Processors." <span className="italic">Quantum Science and Technology</span>, 2024.
                  </p>
                </div>
              </div>

              {/* 2023 */}
              <div className="bg-white border border-subtle p-6">
                <h3 className="serif-display text-lg text-burgundy mb-4">2023</h3>
                <div className="space-y-3 text-sm">
                  <p>
                    <span className="font-semibold">Chen, S., Zhang, E., & Preskill, J.</span> "Measurement-Based Quantum Computing with Topological Error Correction." <span className="italic">Physical Review Letters</span>, 130(12), 120601, 2023.
                  </p>
                  <p>
                    <span className="font-semibold">Chen, S., Patel, M., & Braunstein, S. L.</span> "Quantum Metrology: From Fundamental Limits to Practical Implementations." <span className="italic">Nature Reviews Physics</span>, 5, 2023.
                  </p>
                  <p>
                    <span className="font-semibold">Liu, J., Chen, S., & Chuang, I. L.</span> "Bosonic Codes for Quantum Error Correction." <span className="italic">Quantum</span>, 7, 1234, 2023.
                  </p>
                  <p>
                    <span className="font-semibold">Chen, S., & Lee, C.</span> "Optimal Decoders for Topological Codes." <span className="italic">Physical Review A</span>, 108(2), 022403, 2023.
                  </p>
                </div>
              </div>

              {/* 2022 */}
              <div className="bg-white border border-subtle p-6">
                <h3 className="serif-display text-lg text-burgundy mb-4">2022</h3>
                <div className="space-y-3 text-sm">
                  <p>
                    <span className="font-semibold">Chen, S., Thompson, A., & Kapoor, P.</span> "Quantum Error Correction with Continuous Variables." <span className="italic">Physical Review Letters</span>, 129(13), 130502, 2022.
                  </p>
                  <p>
                    <span className="font-semibold">Chen, S., & Chuang, I. L.</span> "Fault-Tolerant Quantum Computation with Constant Error Rate." <span className="italic">SIAM Journal on Computing</span>, 51(2), 181-209, 2022.
                  </p>
                </div>
              </div>

              {/* 2021 */}
              <div className="bg-white border border-subtle p-6">
                <h3 className="serif-display text-lg text-burgundy mb-4">2021</h3>
                <div className="space-y-3 text-sm">
                  <p>
                    <span className="font-semibold">Chen, S., Preskill, J., & Chuang, I. L.</span> "Quantum Codes for Amplitude Damping." <span className="italic">Physical Review A</span>, 104(4), 042418, 2021.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* External Links */}
          <div className="mt-12 bg-white border border-subtle p-8 text-center">
            <h3 className="serif-display text-lg text-burgundy mb-4">Find Us Online</h3>
            <div className="flex flex-col md:flex-row gap-6 justify-center text-sm">
              <a href="#" className="text-burgundy hover:text-orange-700 flex items-center gap-2 justify-center font-semibold">
                <ExternalLink size={16} /> Google Scholar
              </a>
              <a href="#" className="text-burgundy hover:text-orange-700 flex items-center gap-2 justify-center font-semibold">
                <ExternalLink size={16} /> arXiv
              </a>
              <a href="#" className="text-burgundy hover:text-orange-700 flex items-center gap-2 justify-center font-semibold">
                <ExternalLink size={16} /> ORCID
              </a>
            </div>
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
