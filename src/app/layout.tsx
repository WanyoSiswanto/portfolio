import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Wanyo Siswanto | Data Analyst & Web Developer — Galeri Karya",
  description: "Galeri portofolio resmi Wanyo Siswanto: Data Analyst & Web Developer. Menampilkan karya web nyata seperti platform apotek digital Nyopharma, sistem kepatuhan kalibrasi/validasi (CQ System), dan analitik data.",
  keywords: [
    "Wanyo Siswanto",
    "Wanyo",
    "Data Analyst",
    "Web Developer",
    "NyoClean",
    "Nyopharma",
    "CQ System",
    "Next.js",
    "React",
    "Python",
    "SQL",
    "Portfolio Gallery",
  ],
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#08090B] text-[#F2F3F5] font-sans">
        {children}
      </body>
    </html>
  );
}
