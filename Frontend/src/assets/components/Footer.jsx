export default function Footer() {
  return (
    <footer className="bg-[#4A90E2] text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-center md:text-left">
          © 2025 Pradhap Trendify. All rights reserved.
        </p>
        <div className="flex space-x-6 text-sm">
          <a href="/privacy" className="hover:underline hover:text-white/80 transition">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline hover:text-white/80 transition">
            Terms of Service
          </a>
          <a href="/contact" className="hover:underline hover:text-white/80 transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
