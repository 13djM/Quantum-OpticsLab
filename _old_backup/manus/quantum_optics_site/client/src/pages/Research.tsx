import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";

export default function Research() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation currentPage="research" />

      {/* Hero Section */}
      <section className="bg-white border-b border-subtle">
        <div className="container mx-auto max-w-6xl px-6 py-12">
          <Link href="/" className="text-burgundy text-sm font-semibold flex items-center gap-1 mb-4 hover:text-orange-700">
            <ChevronLeft size={16} /> Back to Home
          </Link>
          <h1 className="serif-display text-4xl text-burgundy mb-4">Our Research</h1>
          <p className="text-sm text-muted-dark max-w-2xl">
            We develop theoretical frameworks for quantum information processing, quantum error correction, and quantum optics. Our work bridges fundamental quantum physics with practical implementations in superconducting circuits, trapped ions, and photonic systems.
          </p>
        </div>
      </section>

      {/* Research Themes */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto max-w-6xl px-6">
          {/* Theme 1 */}
          <div id="bosonic-codes" className="mb-16 bg-white border border-subtle p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="serif-display text-2xl text-burgundy mb-4">
                  Bosonic Quantum Error Correction
                </h2>
                <p className="text-sm text-foreground mb-4 leading-relaxed">
                  Quantum error correction is essential for scalable quantum computation. Traditional approaches using surface codes require millions of physical qubits. We develop bosonic codes that encode logical information in continuous variable states of harmonic oscillators, achieving exponential error suppression with polynomial overhead.
                </p>
                <p className="text-sm text-foreground mb-4 leading-relaxed">
                  Our key innovations include:
                </p>
                <ul className="text-sm text-foreground space-y-2 mb-4 ml-4">
                  <li>• <span className="font-semibold">Kerr-Cat Codes:</span> Leveraging Kerr non-linearity for efficient error correction in superconducting cavities.</li>
                  <li>• <span className="font-semibold">GKP Codes:</span> Gottesman-Kitaev-Preskill codes for continuous variable quantum computing.</li>
                  <li>• <span className="font-semibold">Hybrid Approaches:</span> Combining bosonic and discrete-variable encodings for optimal performance.</li>
                </ul>
                <p className="text-xs text-muted-dark">
                  <span className="font-semibold">Key Publications:</span> Chen et al., Nature Physics (2024); Chen et al., Quantum (2023)
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 flex items-center justify-center min-h-64">
                <div className="text-center">
                  <div className="text-6xl mb-2">⊗</div>
                  <p className="text-xs text-muted-dark font-semibold">Bosonic Code Schematic</p>
                </div>
              </div>
            </div>
          </div>

          {/* Theme 2 */}
          <div id="measurement-based" className="mb-16 bg-white border border-subtle p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 flex items-center justify-center min-h-64">
                <div className="text-center">
                  <div className="text-6xl mb-2">◇</div>
                  <p className="text-xs text-muted-dark font-semibold">Cluster State Pattern</p>
                </div>
              </div>
              <div className="md:col-span-2">
                <h2 className="serif-display text-2xl text-burgundy mb-4">
                  Measurement-Based Quantum Computing
                </h2>
                <p className="text-sm text-foreground mb-4 leading-relaxed">
                  One-way quantum computing offers an alternative paradigm where computation proceeds through adaptive measurements on entangled cluster states. This approach naturally accommodates topological error correction and is well-suited for photonic implementations.
                </p>
                <p className="text-sm text-foreground mb-4 leading-relaxed">
                  Our research focuses on:
                </p>
                <ul className="text-sm text-foreground space-y-2 mb-4 ml-4">
                  <li>• <span className="font-semibold">Fault-Tolerant Protocols:</span> Designing measurement sequences robust to experimental imperfections.</li>
                  <li>• <span className="font-semibold">Resource Optimization:</span> Minimizing cluster state size while maintaining error thresholds.</li>
                  <li>• <span className="font-semibold">Photonic Implementation:</span> Adapting protocols for linear optical systems with photon loss.</li>
                </ul>
                <p className="text-xs text-muted-dark">
                  <span className="font-semibold">Key Publications:</span> Chen & Lee, Phys. Rev. Lett. (2023); Chen et al., PRX Quantum (2024)
                </p>
              </div>
            </div>
          </div>

          {/* Theme 3 */}
          <div id="metrology" className="mb-16 bg-white border border-subtle p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="serif-display text-2xl text-burgundy mb-4">
                  Quantum Metrology & Sensing
                </h2>
                <p className="text-sm text-foreground mb-4 leading-relaxed">
                  Quantum systems can achieve measurement precision beyond classical limits. We design quantum sensing protocols that exploit entanglement and squeezing to achieve Heisenberg-limited precision, with applications to atomic clocks, gravitational wave detection, and magnetometry.
                </p>
                <p className="text-sm text-foreground mb-4 leading-relaxed">
                  Current research directions:
                </p>
                <ul className="text-sm text-foreground space-y-2 mb-4 ml-4">
                  <li>• <span className="font-semibold">Entanglement-Enhanced Sensing:</span> Optimal state preparation and measurement strategies.</li>
                  <li>• <span className="font-semibold">Robustness to Decoherence:</span> Maintaining quantum advantage in realistic environments.</li>
                  <li>• <span className="font-semibold">Multi-Parameter Estimation:</span> Simultaneous estimation of multiple unknown parameters.</li>
                </ul>
                <p className="text-xs text-muted-dark">
                  <span className="font-semibold">Key Publications:</span> Chen et al., Nature Reviews Physics (2023)
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 flex items-center justify-center min-h-64">
                <div className="text-center">
                  <div className="text-6xl mb-2">◐</div>
                  <p className="text-xs text-muted-dark font-semibold">Squeezed State</p>
                </div>
              </div>
            </div>
          </div>

          {/* Theme 4 */}
          <div id="simulation" className="bg-white border border-subtle p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-6 flex items-center justify-center min-h-64">
                <div className="text-center">
                  <div className="text-6xl mb-2">≈</div>
                  <p className="text-xs text-muted-dark font-semibold">Many-Body Dynamics</p>
                </div>
              </div>
              <div className="md:col-span-2">
                <h2 className="serif-display text-2xl text-burgundy mb-4">
                  Quantum Simulation & Dynamics
                </h2>
                <p className="text-sm text-foreground mb-4 leading-relaxed">
                  Quantum computers can efficiently simulate quantum systems that are intractable classically. We develop algorithms for simulating many-body dynamics, open quantum systems, and non-equilibrium phenomena, with applications to condensed matter physics and chemistry.
                </p>
                <p className="text-sm text-foreground mb-4 leading-relaxed">
                  Key research areas:
                </p>
                <ul className="text-sm text-foreground space-y-2 mb-4 ml-4">
                  <li>• <span className="font-semibold">Variational Algorithms:</span> VQE and QAOA for near-term quantum processors.</li>
                  <li>• <span className="font-semibold">Open System Simulation:</span> Efficient encoding of dissipation and decoherence.</li>
                  <li>• <span className="font-semibold">Hybrid Classical-Quantum:</span> Combining classical and quantum resources optimally.</li>
                </ul>
                <p className="text-xs text-muted-dark">
                  <span className="font-semibold">Key Publications:</span> Chen et al., Quantum Science and Technology (2024)
                </p>
              </div>
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
