import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/ui/Navbar";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "IMMK UI - Ikatan Mahasiswa Magister Kenotariatan Universitas Indonesia",
    template: "%s | IMMK UI"
  },
  description: "Wadah pengembangan diri bagi mahasiswa Magister Kenotariatan Universitas Indonesia. Program unggulan, workshop, dan kegiatan rutin untuk pengembangan akademik dan profesional.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  keywords: [
    "IMMK UI",
    "Magister Kenotariatan",
    "Universitas Indonesia",
    "Mahasiswa Notaris",
    "Program Kenotariatan",
    "Workshop Notaris",
    "Seminar Hukum",
    "Akademik Kenotariatan",
    "UI Depok",
    "Pendidikan Notaris"
  ],
  authors: [{ name: "IMMK UI" }],
  creator: "IMMK UI",
  publisher: "IMMK UI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://immkui.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://immkui.com',
    siteName: 'IMMK UI',
    title: 'IMMK UI - Ikatan Mahasiswa Magister Kenotariatan Universitas Indonesia',
    description: 'Wadah pengembangan diri bagi mahasiswa Magister Kenotariatan Universitas Indonesia. Program unggulan, workshop, dan kegiatan rutin untuk pengembangan akademik dan profesional.',
    images: [
      {
        url: '/favicon.ico',
        width: 32,
        height: 32,
        alt: 'IMMK UI - Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IMMK UI - Ikatan Mahasiswa Magister Kenotariatan Universitas Indonesia',
    description: 'Wadah pengembangan diri bagi mahasiswa Magister Kenotariatan Universitas Indonesia. Program unggulan, workshop, dan kegiatan rutin.',
    images: ['/favicon.ico'],
    creator: '@immkui',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" style={{ scrollBehavior: "smooth" }}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0A2463" />
        <meta name="msapplication-TileColor" content="#0A2463" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "IMMK UI",
              "alternateName": "Ikatan Mahasiswa Magister Kenotariatan Universitas Indonesia",
              "url": "https://immkui.com",
              "logo": "https://immkui.com/favicon.ico",
              "description": "Wadah pengembangan diri bagi mahasiswa Magister Kenotariatan Universitas Indonesia",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Gedung Magister Kenotariatan",
                "addressLocality": "Depok",
                "addressRegion": "Jawa Barat",
                "addressCountry": "ID"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+62-812-3456-7890",
                "contactType": "customer service",
                "email": "info@immk.org"
              },
              "sameAs": [
                "https://www.instagram.com/notarismasakini"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${manrope.className} antialiased w-full`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
