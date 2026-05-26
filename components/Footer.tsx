import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-gold/10 pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-2 font-black text-foreground">
            <Image
              src="/Logo.jpeg"
              alt="Elite Intelligence FC"
              width={40}
              height={40}
              className="rounded-full object-cover border border-gold/30"
            />
            <span className="text-xl bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent uppercase tracking-wider">
              EIFC
            </span>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            The official platform for Elite Intelligence FC. Discover our squad, follow our journey, and get scouted.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-foreground font-black uppercase tracking-widest text-xs mb-6">Explore</h4>
          <ul className="space-y-4">
            {["Home", "Squad", "Fixtures", "Stats"].map((link) => (
              <li key={link}>
                <Link 
                  href={link === "Home" ? "/" : `/${link.toLowerCase()}`} 
                  className="text-slate-400 hover:text-gold transition-colors text-sm font-medium"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Community */}
        <div>
          <h4 className="text-foreground font-black uppercase tracking-widest text-xs mb-6">Community</h4>
          <ul className="space-y-4">
            {["Our Mission", "Benefits", "Trusted By", "Contact"].map((link) => (
              <li key={link}>
                <Link 
                  href="/#contact" 
                  className="text-slate-400 hover:text-gold transition-colors text-sm font-medium"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-foreground font-black uppercase tracking-widest text-xs mb-6">Follow Us</h4>
          <div className="flex gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i} 
                className="w-10 h-10 rounded-lg bg-gold/5 border border-gold/10 flex items-center justify-center text-gold hover:bg-gold hover:text-slate-900 transition-all cursor-pointer"
              >
                <span className="text-xs font-bold">IG</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-gold/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© 2026 Elite Intelligence FC. All Rights Reserved.</p>
        <p>
          Developed by <span className="text-gold-light font-bold">Raja Mannan Khan</span>
        </p>
      </div>
    </footer>
  );
}
