import { PekanNotaris } from '../components/PekanNotaris';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pekan Notaris 2026 - IMMK UI",
  description: "Pekan Notaris 2026 mengangkat tema 'Penguatan Kerangka Hukum dalam Aspek Kenotariatan untuk Mendukung Investasi dan Pengelolaan Ruang di Indonesia.' Program berskala nasional yang mencakup Seminar Nasional, Konferensi FOMNI, Kompetisi Pembuatan Akta, dan Campus Tour.",
  keywords: [
    "Pekan Notaris 2026",
    "IMMK UI",
    "Kompetisi Pembuatan Akta",
    "FOMNI",
    "Seminar Nasional Notaris",
    "Lomba Akta",
    "Mahasiswa Kenotariatan",
    "FH UI",
    "Campus Tour Notaris"
  ],
  openGraph: {
    title: "Pekan Notaris 2026 - IMMK UI",
    description: "Program berskala nasional untuk mahasiswa magister kenotariatan dari berbagai perguruan tinggi di Indonesia. Seminar Nasional, Konferensi FOMNI, Kompetisi Pembuatan Akta, dan Campus Tour.",
    url: "https://immkui.com/pekannotaris",
    images: [
      {
        url: "/pekan-notaris-header.png",
        width: 1200,
        height: 630,
        alt: "Pekan Notaris 2026 - IMMK UI",
      },
    ],
  },
  twitter: {
    title: "Pekan Notaris 2026 - IMMK UI",
    description: "Program berskala nasional untuk mahasiswa magister kenotariatan dari berbagai perguruan tinggi di Indonesia.",
  },
  alternates: {
    canonical: "/pekannotaris",
  },
};

export default function PekanNotarisPage() {
  return (
    <main className="bg-[#F2F2F2] min-h-screen pt-20">
      <PekanNotaris />
    </main>
  );
}
