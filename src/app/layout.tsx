import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Cinzel, Montserrat } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import { CartProvider } from "@/context/CartContext";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import MotionPressProvider from "@/components/MotionPressProvider";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#faf7f2",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sfvourclinic.com"),
  title: {
    default: "S Fvour | Cosmetology & Aesthetic Skin Hub by M Scissors | Baramati",
    template: "%s | S Fvour Clinic Baramati",
  },
  description:
    "Baramati's premier Cosmetology & Aesthetic Skin Hub by M Scissors. Advanced Hair, Skin, Painless Laser, Bridal Makeup, Nail Art, Clinical Nutrition & Luxury Spa. 2nd Floor, Subhadra Mall, Pencil Chowk, Baramati MIDC.",
  keywords: [
    "S Fvour",
    "S Fvour Baramati",
    "M Scissors Group",
    "Best Skin Clinic in Baramati",
    "Cosmetology Clinic Baramati MIDC",
    "Laser Hair Removal Baramati",
    "HydraFacial Baramati",
    "Hair Fall Treatment Baramati",
    "Bridal Makeup Baramati",
    "Aesthetic Clinic Pune",
    "Painless Laser Treatment",
    "Subhadra Mall Baramati",
  ],
  authors: [{ name: "S Fvour Group By M Scissors" }],
  creator: "NRAVIXA",
  publisher: "S Fvour Cosmetology & Aesthetic Skin Hub",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://sfvourclinic.com",
  },
  openGraph: {
    title: "S Fvour | Cosmetology & Aesthetic Skin Hub by M Scissors",
    description:
      "A rare combination of luxurious ambience, premium quality, value for money & customer satisfaction. Specializing in Hair, Skin, Laser, Makeup, Nail, Nutrition & Spa.",
    url: "https://sfvourclinic.com",
    siteName: "S Fvour Clinic",
    images: [
      {
        url: "/images/hero-clinic.jpg",
        width: 1200,
        height: 675,
        alt: "S Fvour Luxury Aesthetic Clinic Lounge Baramati",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "S Fvour | Cosmetology & Aesthetic Skin Hub by M Scissors",
    description:
      "Experience luxury aesthetic dermatology, hair restoration, and painless laser treatments in Baramati MIDC.",
    images: ["/images/hero-clinic.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["HealthAndBeautyBusiness", "MedicalBusiness"],
    name: "S Fvour Group By - M Scissors",
    alternateName: "S Fvour Cosmetology & Aesthetic Skin Hub",
    description:
      "Premier Cosmetology & Aesthetic Skin Hub in Baramati MIDC providing Hair, Skin, Painless Laser, Makeup, Nail Art, Nutrition and Spa therapies.",
    url: "https://sfvourclinic.com",
    telephone: "+917378603232",
    priceRange: "₹₹",
    image: "https://sfvourclinic.com/images/hero-clinic.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "2nd Floor, Shop No.003, Near Subhadra Cinemas, Subhadra Mall, Pencil Chowk, Baramati MIDC",
      addressLocality: "Baramati",
      addressRegion: "Maharashtra",
      postalCode: "413133",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "18.1517",
      longitude: "74.5775",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "10:00",
        closes: "21:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/m_scissors_group?dlrf=MWxhdGI4NHFsYTZweg==",
    ],
  };

  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        {/* Instant Bright/Dark theme detection & Refresh to Hero scroll reset */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if ('scrollRestoration' in history) {
                  history.scrollRestoration = 'manual';
                }
                window.scrollTo(0, 0);
                if (window.location.hash) {
                  window.history.replaceState(null, '', window.location.pathname + window.location.search);
                }
                var theme = localStorage.getItem('sfvour-theme') || 'light';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                } else {
                  document.documentElement.classList.add('light');
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {
                document.documentElement.classList.add('light');
              }
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${cormorant.variable} ${cinzel.variable} font-sans antialiased selection:bg-[#d4af37] selection:text-[#0b0908] min-h-screen relative`}
      >
        <ThemeProvider>
          <SmoothScrollProvider>
            <MotionPressProvider>
              <CartProvider>{children}</CartProvider>
            </MotionPressProvider>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
