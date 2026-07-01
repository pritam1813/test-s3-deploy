import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import SainteMarieImg from "../../public/images/Sainte-Marie.jpg";

export default function SainteMariePage() {
  // Dummy data for testing display
  const quickFacts = [
    { label: "Location", value: "East Coast of Madagascar" },
    { label: "Best Time to Visit", value: "July to October (Humpback Whales)" },
    { label: "Vibe", value: "Quiet, Tropical & Historical" },
    { label: "Key Attraction", value: "Authentic Pirate Cemetery" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col justify-between selection:bg-teal-500/30">
      
      {/* Header */}
      <header className="w-full max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
        >
          <svg
            className="w-5 h-5 transition-transform group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Homepage
        </Link>
        <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
          CI/CD Active Test
        </span>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-6xl mx-auto px-6 py-8 md:py-12 flex-1 flex flex-col gap-12">
        
        {/* Title Section */}
        <div className="space-y-4 max-w-3xl">
          <span className="text-xs font-extrabold tracking-widest text-teal-600 dark:text-teal-400 uppercase">
            🏝️ Island Escapes
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
            Île Sainte-Marie
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Welcome to the sanctuary of lush vegetation, pristine white beaches, and clear waters. Also known as Nosy Boraha, this island offers a window into rich history and untouched nature.
          </p>
        </div>

        {/* Hero Image Showcase */}
        <div className="relative group overflow-hidden rounded-[2.5rem] bg-slate-900 border border-slate-200/20 dark:border-slate-800/50 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
          <ExportedImage
            src={SainteMarieImg}
            alt="Sainte-Marie Island Beachside View"
            width={1200}
            height={800}
            sizes="(max-width: 1024px) 100vw, 1152px"
            priority
            fetchPriority="high"
            className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-102"
          />
          <div className="absolute bottom-6 left-6 z-20 text-white">
            <p className="text-xs font-bold uppercase tracking-wider text-teal-300 mb-1">Featured Coast</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Coconut Grove Palms</h2>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Quick Facts Card (Left Column) */}
          <div className="md:col-span-5 p-8 rounded-3xl bg-white dark:bg-slate-900 shadow-xl shadow-slate-100 dark:shadow-black/30 border border-slate-200/50 dark:border-slate-800/50">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="text-teal-500">❖</span> Destination Facts
            </h3>
            <dl className="space-y-4">
              {quickFacts.map((fact, idx) => (
                <div key={idx} className="pb-3 border-b border-slate-100 dark:border-slate-800/80 last:border-b-0 last:pb-0">
                  <dt className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{fact.label}</dt>
                  <dd className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Narrative content (Right Column) */}
          <div className="md:col-span-7 space-y-6">
            <div className="p-8 rounded-3xl bg-white/50 dark:bg-slate-900/35 border border-slate-200/40 dark:border-slate-800/30">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Whale Watching Paradise</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                During the southern winter (July to September), large groups of humpback whales migrate from the Antarctic to the calm waters around Île Sainte-Marie to breed and calve. The island offers some of the most spectacular, close-encounter whale tours in the Southern Hemisphere, committed to eco-friendly guidelines.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/50 dark:bg-slate-900/35 border border-slate-200/40 dark:border-slate-800/30">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Legacies of the Pirate Era</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                In the 17th and 18th centuries, the island was home to over a thousand pirates. Its deep, protected bays made it the perfect hideout to raid ships returning from the East Indies. Today, visitors can explore the world's only official pirate cemetery perched on a hilltop overlooking the bay.
              </p>
            </div>
          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="w-full max-w-6xl mx-auto px-6 py-8 border-t border-slate-200/50 dark:border-slate-900/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 mt-12">
        <p>© {new Date().getFullYear()} Wanderlust. All rights reserved.</p>
        <p className="flex items-center gap-1">
          CI/CD Testing Deployment Page
        </p>
      </footer>

    </div>
  );
}
