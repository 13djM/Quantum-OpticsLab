import { Link } from "wouter";
import { ChevronLeft, Mail, Globe } from "lucide-react";
import { Navigation } from "@/components/Navigation";

export default function People() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation currentPage="people" />

      {/* Hero Section */}
      <section className="bg-white border-b border-subtle">
        <div className="container mx-auto max-w-6xl px-6 py-12">
          <Link href="/" className="text-burgundy text-sm font-semibold flex items-center gap-1 mb-4 hover:text-orange-700">
            <ChevronLeft size={16} /> Back to Home
          </Link>
          <h1 className="serif-display text-4xl text-burgundy mb-4">Our Team</h1>
          <p className="text-sm text-muted-dark max-w-2xl">
            Meet the researchers and students driving our quantum optics research forward.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto max-w-6xl px-6">
          {/* Principal Investigator */}
          <div className="mb-16">
            <h2 className="serif-display text-2xl text-burgundy mb-8">Principal Investigator</h2>
            <div className="bg-white border border-subtle p-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="flex justify-center">
                  <div className="w-32 h-40 bg-gradient-to-br from-gray-200 to-gray-300 rounded flex items-center justify-center">
                    <span className="text-4xl">👩‍🔬</span>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <h3 className="serif-display text-xl text-burgundy mb-2">Dr. Sarah Chen</h3>
                  <p className="text-sm font-semibold text-muted-dark mb-4">Assistant Professor of Physics</p>
                  <p className="text-sm text-foreground mb-4 leading-relaxed">
                    Dr. Chen received her Ph.D. in Physics from MIT in 2018, where she worked on quantum error correction under the supervision of Prof. Isaac Chuang. She completed postdoctoral research at Caltech (2018-2021) and at Harvard University (2021-2023) before joining UC Berkeley in 2023.
                  </p>
                  <p className="text-sm text-foreground mb-4 leading-relaxed">
                    Her research interests include quantum error correction, quantum optics, and the theory of quantum information processing. She has published over 25 peer-reviewed papers in top-tier journals and has received the NSF CAREER Award (2024) and the Sloan Research Fellowship (2024).
                  </p>
                  <div className="flex gap-4 text-sm">
                    <a href="mailto:s.chen@berkeley.edu" className="text-burgundy hover:text-orange-700 flex items-center gap-1">
                      <Mail size={14} /> s.chen@berkeley.edu
                    </a>
                    <a href="#" className="text-burgundy hover:text-orange-700 flex items-center gap-1">
                      <Globe size={14} /> CV (PDF)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Postdoctoral Researchers */}
          <div className="mb-16">
            <h2 className="serif-display text-2xl text-burgundy mb-8">Postdoctoral Researchers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Postdoc 1 */}
              <div className="bg-white border border-subtle p-6">
                <div className="flex gap-4 mb-4">
                  <div className="w-20 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">👨‍🔬</span>
                  </div>
                  <div>
                    <h3 className="serif-display text-lg text-burgundy">Dr. James Liu</h3>
                    <p className="text-xs text-muted-dark mb-2">Postdoctoral Researcher</p>
                    <p className="text-xs text-foreground mb-2">
                      James received his Ph.D. from Stanford University in 2023. His research focuses on bosonic codes and their implementation in superconducting circuits.
                    </p>
                    <a href="mailto:j.liu@berkeley.edu" className="text-burgundy text-xs hover:text-orange-700">
                      j.liu@berkeley.edu
                    </a>
                  </div>
                </div>
              </div>

              {/* Postdoc 2 */}
              <div className="bg-white border border-subtle p-6">
                <div className="flex gap-4 mb-4">
                  <div className="w-20 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">👩‍🔬</span>
                  </div>
                  <div>
                    <h3 className="serif-display text-lg text-burgundy">Dr. Maria Rodriguez</h3>
                    <p className="text-xs text-muted-dark mb-2">Postdoctoral Researcher</p>
                    <p className="text-xs text-foreground mb-2">
                      Maria completed her Ph.D. at ETH Zurich in 2022. She works on measurement-based quantum computing and photonic implementations.
                    </p>
                    <a href="mailto:m.rodriguez@berkeley.edu" className="text-burgundy text-xs hover:text-orange-700">
                      m.rodriguez@berkeley.edu
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Graduate Students */}
          <div className="mb-16">
            <h2 className="serif-display text-2xl text-burgundy mb-8">Graduate Students</h2>
            <div className="space-y-6">
              {/* PhD Student 1 */}
              <div className="bg-white border border-subtle p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="flex justify-center">
                    <div className="w-24 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded flex items-center justify-center">
                      <span className="text-2xl">👨‍🎓</span>
                    </div>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="serif-display text-lg text-burgundy mb-1">David Park</h3>
                    <p className="text-xs text-muted-dark font-semibold mb-3">5th Year PhD Student, Physics</p>
                    <p className="text-xs font-semibold text-burgundy mb-2">Project: Fault-Tolerant Quantum Computing with Kerr-Cat Codes</p>
                    <p className="text-sm text-foreground mb-3 leading-relaxed">
                      David is developing efficient decoding algorithms for Kerr-cat codes in superconducting cavities. His work focuses on reducing the resource overhead for fault-tolerant quantum computation while maintaining high error thresholds. He has published two first-author papers in Physical Review Letters.
                    </p>
                    <a href="mailto:d.park@berkeley.edu" className="text-burgundy text-xs hover:text-orange-700">
                      d.park@berkeley.edu
                    </a>
                  </div>
                </div>
              </div>

              {/* PhD Student 2 */}
              <div className="bg-white border border-subtle p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="flex justify-center">
                    <div className="w-24 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded flex items-center justify-center">
                      <span className="text-2xl">👩‍🎓</span>
                    </div>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="serif-display text-lg text-burgundy mb-1">Emily Zhang</h3>
                    <p className="text-xs text-muted-dark font-semibold mb-3">3rd Year PhD Student, Physics</p>
                    <p className="text-xs font-semibold text-burgundy mb-2">Project: Measurement-Based Quantum Computing with Photonic Systems</p>
                    <p className="text-sm text-foreground mb-3 leading-relaxed">
                      Emily develops fault-tolerant measurement-based quantum computing protocols optimized for linear optical systems. Her research addresses photon loss and detector inefficiencies while maintaining computational universality. She is currently working on a manuscript on resource-efficient cluster state generation.
                    </p>
                    <a href="mailto:e.zhang@berkeley.edu" className="text-burgundy text-xs hover:text-orange-700">
                      e.zhang@berkeley.edu
                    </a>
                  </div>
                </div>
              </div>

              {/* PhD Student 3 */}
              <div className="bg-white border border-subtle p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="flex justify-center">
                    <div className="w-24 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded flex items-center justify-center">
                      <span className="text-2xl">👨‍🎓</span>
                    </div>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="serif-display text-lg text-burgundy mb-1">Michael Patel</h3>
                    <p className="text-xs text-muted-dark font-semibold mb-3">2nd Year PhD Student, Physics</p>
                    <p className="text-xs font-semibold text-burgundy mb-2">Project: Quantum Metrology with Entangled Photons</p>
                    <p className="text-sm text-foreground mb-3 leading-relaxed">
                      Michael investigates quantum sensing protocols that achieve Heisenberg-limited precision using entangled photon states. His work combines theoretical optimization with experimental feasibility analysis for atomic clock and gravitational wave detection applications.
                    </p>
                    <a href="mailto:m.patel@berkeley.edu" className="text-burgundy text-xs hover:text-orange-700">
                      m.patel@berkeley.edu
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Alumni */}
          <div className="bg-white border border-subtle p-8">
            <h2 className="serif-display text-2xl text-burgundy mb-6">Alumni</h2>
            <div className="space-y-3 text-sm">
              <p><span className="font-semibold">Dr. Alexandra Thompson</span> (Postdoc 2023-2024) → Assistant Professor, University of Toronto</p>
              <p><span className="font-semibold">Dr. Christopher Lee</span> (PhD 2022) → Research Scientist, IBM Quantum</p>
              <p><span className="font-semibold">Dr. Priya Kapoor</span> (Postdoc 2022-2023) → Researcher, Google Quantum AI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment */}
      <section className="py-12 bg-white border-t border-subtle">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="serif-display text-2xl text-burgundy mb-6">Join Our Group</h2>
          <p className="text-sm text-foreground mb-4 leading-relaxed">
            We are actively recruiting PhD students and postdoctoral researchers. If you are interested in quantum information theory, quantum error correction, or quantum optics, please reach out to Dr. Chen at <a href="mailto:s.chen@berkeley.edu" className="text-burgundy underline">s.chen@berkeley.edu</a>.
          </p>
          <p className="text-sm text-foreground mb-4 leading-relaxed">
            Prospective PhD students should apply through the <a href="#" className="text-burgundy underline">UC Berkeley Physics Department</a>. Postdoctoral applicants should send a CV, research statement, and contact information for three references.
          </p>
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
