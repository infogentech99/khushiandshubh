import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://khushiandshubh.vercel.app/"),

  openGraph: {
    title: "Khushi & Shubh",
    description: "Join as they begin their forever. 1, 2, 3 & 5 December, 2026",
    url: "https://khushiandshubh.vercel.app/",
    siteName: "InviteArc",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Khushi & Shubh",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Khushi & Shubh",
    description: "Join as they begin their forever. 1, 2, 3 & 5 December, 2026",
    images: ["/og.jpg"],
  },

  other: {
    "og:image:secure_url": "https://khushiandshubh.vercel.app/og.jpg",
    "og:image:type": "image/jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
