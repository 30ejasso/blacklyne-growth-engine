import Link from 'next/link';

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          Black<span className="text-accent">lyne</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-gray-500 hover:text-primary text-sm font-medium transition-colors">About</Link>
          <Link href="/loans" className="text-gray-500 hover:text-primary text-sm font-medium transition-colors">Business Capital</Link>
          <a href="tel:+16029803338" className="text-gray-500 hover:text-primary text-sm font-medium transition-colors">602.980.3338</a>
        </div>
        <a
          href="https://calendly.com/eddiejasso"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent hover:bg-accent-dark text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors"
        >
          Book a Call
        </a>
      </nav>
    </header>
  );
}
