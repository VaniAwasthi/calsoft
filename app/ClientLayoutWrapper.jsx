"use client";

import GlobalLoader from "./component/GlobalLoader";
import Navbar from "./component/utilities/topnav";
import Footer from "./component/utilities/Footer";

export default function ClientLayoutWrapper({ children }) {
  return (
    <>
      <GlobalLoader />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
