import HeroSection from "@/components/hero-section";
import InquirySection from "@/components/inquiry-section";
import ServiceSeciton from "@/components/service-seciton";
import WhatWeDoSection from "@/components/what-we-do-section";

import NewsSeciton from "@/components/news-seciton";
import CareersSection from "@/components/careers-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhatWeDoSection />
      <ServiceSeciton />
      <InquirySection />
      <NewsSeciton />
      <CareersSection />
    </main>
  );
}
