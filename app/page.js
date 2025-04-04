import Image from "next/image";
import { CalsoftNews, CalsoftPartner } from "./screen/home/CalsoftNewsPartner";
import { Casestudy, Services } from "./screen/home/ServicesCasestudyBlog";

export default function Home() {
  return (
    <>

      <CalsoftNews />
      <CalsoftPartner />
      <Services/>
      <Casestudy/>
    </>
  );
}
