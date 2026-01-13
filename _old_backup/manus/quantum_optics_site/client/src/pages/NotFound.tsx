import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <Navigation />

      <section className="flex-1 flex items-center justify-center py-16">
        <div className="text-center max-w-md">
          <h1 className="serif-display text-6xl text-burgundy mb-4">404</h1>
          <h2 className="serif-display text-2xl text-burgundy mb-4">Page Not Found</h2>
          <p className="text-sm text-muted-dark mb-8">
            The page you are looking for does not exist. Please check the URL or return to the home page.
          </p>
          <Link href="/" className="inline-block px-6 py-2 bg-burgundy text-white text-sm font-semibold rounded hover:bg-orange-700 transition-colors">
            Return to Home
          </Link>
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