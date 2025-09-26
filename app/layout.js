// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientProvider from "./ClientProvider";
import ClientLayoutWrapper from "./ClientLayoutWrapper";
import Script from "next/script";
import { Londrina_Shadow, Manrope } from "next/font/google";
// import { Toaster } from "@/components/ui/sonner";

const londrina = Londrina_Shadow({
  subsets: ["latin"],
  weight: ["400"], // pick what you need
  variable: "--font-londrina", // custom CSS variable
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"], // pick what you need
  variable: "--font-manrope", // custom CSS variable
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Calsoft",
  description: "Calsoft Technology first",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`overflow-x-hidden ${londrina.variable} ${manrope.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </head>

      {/* ✅ Hubspot Script */}
      <Script
        id="hubspot-script"
        strategy="afterInteractive"
        src="https://js.hs-scripts.com/9496305.js"
      />

      {/* ✅ ZoomInfo Chatbot Script */}
      <Script id="zoominfo-chatbot" strategy="afterInteractive">
        {`
          window[(function(_LhA,_h8){
            var _re='';for(var _2E=0;_2E<_LhA.length;_2E++){
              var _vl=_LhA[_2E].charCodeAt();_vl-=_h8;
              _re==_re;_vl+=61;_vl!=_2E;_vl%=94;_vl+=33;
              _h8>1;_re+=String.fromCharCode(_vl)
            }
            return _re
          })(atob('dGNqLismIX0wZSE1'), 26)] = 'fe5fba95941680272965'; 

          var zi = document.createElement('script'); 
          zi.type = 'text/javascript';
          zi.async = true;
          zi.src = (function(_cvs,_8w){
            var _eq='';for(var _cm=0;_cm<_cvs.length;_cm++){
              _8w>9;var _vn=_cvs[_cm].charCodeAt();_eq==_eq;
              _vn-=_8w;_vn!=_cm;_vn+=61;_vn%=94;_vn+=33;
              _eq+=String.fromCharCode(_vn)
            }
            return _eq
          })(atob('Lzs7NzpfVFQxOlNBMFI6KjkwNzs6Uyo2NFRBMFI7KC5TMTo='), 37);

          if (document.readyState === 'complete') {
            document.body.appendChild(zi);
          } else {
            window.addEventListener('load', function() {
              document.body.appendChild(zi);
            });
          }
        `}
      </Script>

      <body className="overflow-x-hidden min-h-screen flex flex-col font-manrope">
        <ClientProvider>
          <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
          {/* <Toaster /> */}
        </ClientProvider>
      </body>
    </html>
  );
}
