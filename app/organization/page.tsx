import { OrganizationStructure } from '../components/OrganizationStructure';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Struktur Organisasi IMMK UI",
  description: "Struktur organisasi dan kepengurusan IMMK UI. Kenali tim pengurus, divisi-divisi, dan struktur kepemimpinan Ikatan Mahasiswa Magister Kenotariatan Universitas Indonesia.",
  keywords: [
    "Struktur Organisasi IMMK UI",
    "Kepengurusan IMMK UI",
    "Tim Pengurus MKN UI",
    "Divisi IMMK UI",
    "Kepemimpinan Mahasiswa Notaris",
    "Organisasi Mahasiswa UI",
    "Struktur IMMK"
  ],
  openGraph: {
    title: "Struktur Organisasi IMMK UI",
    description: "Struktur organisasi dan kepengurusan IMMK UI. Kenali tim pengurus, divisi-divisi, dan struktur kepemimpinan Ikatan Mahasiswa Magister Kenotariatan Universitas Indonesia.",
    url: "https://immkui.com/organization",
    images: [
      {
        url: "/favicon.ico",
        width: 32,
        height: 32,
        alt: "Struktur Organisasi IMMK UI - Logo",
      },
    ],
  },
  twitter: {
    title: "Struktur Organisasi IMMK UI",
    description: "Struktur organisasi dan kepengurusan IMMK UI. Kenali tim pengurus dan divisi-divisi.",
  },
  alternates: {
    canonical: "/organization",
  },
};

export default function OrganizationPage() {
  return (
    <main className="bg-[#F2F2F2] min-h-screen pt-20">
      <OrganizationStructure />
    </main>
  );
} 