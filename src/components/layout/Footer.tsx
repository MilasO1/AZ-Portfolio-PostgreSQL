"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-800/40 py-8">
      <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-400 sm:flex-row">
        <div className="flex  gap-4">
          <p className="font-light tracking-wide">
            © {new Date().getFullYear()} Ayoub Zinane. Tous droits réservés.{" "}
            <br></br>
            <span className="font-light tracking-wide">
              Design inspiré de{" "}
              <a
                href="https://github.com/bchiang7"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold hover:text-slate-200 transition-colors"
              >
                Brittany Chiang
              </a>
            </span>
          </p>
        </div>
        <Link
          href="/mentions-legales"
          className="font-light tracking-wide hover:text-slate-200 transition-colors"
        >
          Mentions légales
        </Link>
      </div>
    </footer>
  );
}
