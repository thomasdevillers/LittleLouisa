import type { Metadata } from "next";
import { Newsreader, Manrope } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Little Louisa | Self-Catering Guest House in Colleen Glen, Port Elizabeth",
  description:
    "A quiet self-catering retreat nestled in Colleen Glen, Port Elizabeth. Two bedrooms, two bathrooms, garden, fireplace, and everything you need for a peaceful stay.",
  keywords: [
    "Little Louisa",
    "self-catering",
    "guest house",
    "Colleen Glen",
    "Port Elizabeth",
    "Gqeberha",
    "accommodation",
    "holiday rental",
  ],
  openGraph: {
    title: "Little Louisa — Self-Catering in Colleen Glen, PE",
    description:
      "Two bedrooms, two bathrooms, a fireplace, and a garden. Your quiet place in Port Elizabeth.",
    url: "https://littlelouisa.co.za",
    siteName: "Little Louisa",
    images: [
      {
        url: "/photos/outside.jpg",
        width: 1200,
        height: 630,
        alt: "Little Louisa guest house exterior",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Louisa — Self-Catering in Colleen Glen, PE",
    description:
      "Two bedrooms, two bathrooms, a fireplace, and a garden. Your quiet place in Port Elizabeth.",
    images: ["/photos/outside.jpg"],
  },
  metadataBase: new URL("https://littlelouisa.co.za"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Little Louisa",
    description:
      "A quiet self-catering guest house in Colleen Glen, Port Elizabeth. Two bedrooms, two bathrooms, garden, and fireplace.",
    url: "https://littlelouisa.co.za",
    telephone: "+27730012400",
    email: "info@littlelouisa.co.za",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Port Elizabeth",
      addressRegion: "Eastern Cape",
      addressCountry: "ZA",
      streetAddress: "Colleen Glen",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -33.85,
      longitude: 25.75,
    },
    image: "/photos/outside.jpg",
    priceRange: "R495 - R595 per person per night",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free Parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "Self-Catering Kitchen", value: true },
      { "@type": "LocationFeatureSpecification", name: "Fireplace", value: true },
      { "@type": "LocationFeatureSpecification", name: "Garden", value: true },
    ],
    numberOfRooms: 2,
    petsAllowed: false,
  };

  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${manrope.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#f9f9f9] text-black font-[family-name:var(--font-manrope)] overflow-x-hidden selection:bg-black selection:text-white">
        {children}
      </body>
    </html>
  );
}
