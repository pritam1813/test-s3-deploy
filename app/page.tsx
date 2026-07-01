import ExportedImage from "next-image-export-optimizer";
import NewsletterForm from "./components/NewsletterForm";
import Link from "next/link";
import NatureBeautiful from "./../public/images/Nature_Beautiful.jpg";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 flex flex-col justify-between overflow-x-hidden selection:bg-emerald-500/30">
      {/* Decorative top gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-100 bg-linear-to-b from-emerald-100/40 via-transparent to-transparent dark:from-emerald-950/15 pointer-events-none blur-3xl" />

      {/* Header */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-emerald-600 to-teal-500 flex items-center justify-center shadow-md shadow-emerald-500/20">
            <svg
              className="w-5.5 h-5.5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </div>
          <span className="font-extrabold text-xl tracking-tight bg-linear-to-r from-zinc-900 to-zinc-700 dark:from-white dark:to-zinc-300 bg-clip-text text-transparent">
            Wanderlust
          </span>
        </div>

        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <Link
            href="#gallery"
            className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            Gallery
          </Link>
          <Link
            href="#subscribe"
            className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            Join Explorers
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 md:py-16 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Showcase */}
          <div className="lg:col-span-7 flex flex-col gap-4 animate-fade-in">
            <div className="relative group overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-zinc-200/20 dark:border-zinc-800/50 shadow-2xl shadow-zinc-950/10 dark:shadow-black/50">
              {/* Overlay styling for premium display */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-10 opacity-80 group-hover:opacity-85 transition-opacity duration-500" />

              <ExportedImage
                src={NatureBeautiful}
                alt="Breathtaking Nature Landscape"
                width={1200}
                height={800}
                sizes="(max-width: 1024px) 100vw, 750px"
                fetchPriority="high"
                loading="eager"
                className="w-full h-87.5 sm:h-120 lg:h-145 object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />

              {/* Float Glass Card on Image */}
              <div className="absolute bottom-6 left-6 right-6 z-20 p-6 rounded-2xl bg-white/10 dark:bg-black/25 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg animate-fade-in-up">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Featured Destination
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Alpine Wilderness Sanctuary
                </h3>
                <p className="text-sm text-zinc-200/90 mt-1 max-w-xl">
                  Deep within the mountain range lies an untouched forest system
                  where silence is broken only by the whispers of ancient pine
                  needles and cascading cold waters.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Title + Newsletter Form */}
          <div className="lg:col-span-5 flex flex-col gap-8 justify-center">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200/50 dark:border-emerald-800/30 uppercase tracking-widest">
                🌿 Into the Wild
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] bg-linear-to-r from-zinc-900 via-zinc-800 to-zinc-900 dark:from-white dark:via-zinc-100 dark:to-zinc-300 bg-clip-text text-transparent">
                Discover the power of nature.
              </h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
                We curate off-the-grid destinations, conservation stories, and
                low-impact hiking routes from around the world. Step away from
                the screen and reconnect.
              </p>
            </div>

            <div id="subscribe" className="scroll-mt-10">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 border-t border-zinc-200/50 dark:border-zinc-900/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <p>© {new Date().getFullYear()} Wanderlust. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Made with passion for the wilderness
          <span className="text-emerald-500">♥</span>
        </p>
      </footer>
    </div>
  );
}
