import { Poppins } from "next/font/google";
import Providers from "@/components/Providers";
import { profile, siteUrl } from "@/data/profile";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const title = `${profile.name} | ${profile.role}`;
const description = `${profile.name} is a full-stack software developer in ${profile.location} working with Next.js, FastAPI, C# and PostgreSQL.`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title,
    description,
    siteName: profile.name,
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport = {
  themeColor: "#161616",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: siteUrl,
  email: `mailto:${profile.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Lilongwe", addressCountry: "MW" },
  alumniOf: "Malawi University of Science and Technology",
  sameAs: [profile.github, profile.linkedin],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Scroll-in animations start hidden; show everything if JS is unavailable */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
