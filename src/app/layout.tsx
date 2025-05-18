import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayoub Zinane | Développeur Web",
  description:
    "Portfolio de Ayoub Zinane, développeur web junior spécialisé dans la création d'interfaces digitales accessibles et intuitives.",
  keywords:
    "développeur web, portfolio, React, Next.js, TypeScript, front-end, développement web, Ayoub Zinane",
  authors: [{ name: "Ayoub Zinane" }],
  creator: "Ayoub Zinane",
  publisher: "Ayoub Zinane",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ayoub-zinane.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/images/logo_portfolio_v3.ico", type: "image/ico" }],
    apple: [{ url: "/images/logo_portfolio_v3.ico", type: "image/ico" }],
    shortcut: ["/images/logo_portfolio_v3.ico"],
  },

  openGraph: {
    title: "Ayoub Zinane | Développeur Web",
    description:
      "Portfolio de Ayoub Zinane, développeur web junior spécialisé dans la création d'interfaces digitales accessibles et intuitives.",
    url: "https://mathiasjacquart.com",
    siteName: "Portfolio Ayoub Zinane",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ayoub Zinane - Développeur Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayoub Zinane | Développeur Web",
    description:
      "Portfolio de Ayoub Zinane, développeur web junior spécialisé dans la création d'interfaces digitales accessibles et intuitives.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "votre-code-verification-google",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="icon"
          href="/images/logo_portfolio_v3.ico"
          type="image/x-icon"
        />
        <link rel="apple-touch-icon" href="/images/logo_portfolio_v3.ico" />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
