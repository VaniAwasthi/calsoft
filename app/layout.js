import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientProvider from "./ClientProvider";
import ClientLayoutWrapper from "./ClientLayoutWrapper";
import Script from "next/script";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Calsoft",
  description: "Calsoft Technology first",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <Script
        id="hubspot-script"
        strategy="afterInteractive"
        src="https://js.hs-scripts.com/9496305.js"
      />
      <body className="overflow-x-hidden min-h-screen flex flex-col">
        <ClientProvider>
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
        </ClientProvider>
      </body>
    </html>
  );
}
