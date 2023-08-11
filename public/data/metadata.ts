import type { Metadata } from 'next';

export const appMetaData: Metadata = {
  metadataBase: new URL('http://localhost:3000/'),
  title: 'Healthify - Find and Book Appointments with Top Doctors',
  description: 'Healthify is a user-friendly app that allows patients to search for and book appointments with doctors based on their specialty, location, availability, and reviews.',
  themeColor: "#539165",
  viewport: { width: "device-width", initialScale: 1 },
  keywords: ["Healthify", "doctors", "appointments", "booking", "reviews", "specialty", "location", "availability", "user-friendly"],
  robots: { index: true, follow: true },
  icons: { icon: "/meta/favicon.ico", apple: "/meta/apple-touch-icon.png" },
  manifest: "/meta/manifest.json",
  openGraph: {
    title: "Healthify - Find and Book Appointments with Top Doctors",
    description: "Healthify is a user-friendly app that allows patients to search for and book appointments with doctors based on their specialty, location, availability, and reviews.",
    images: [{ url: "/meta/icon-512.png" }],
    url: "https://www.healthify.com/",
    type: "website",
  },
};