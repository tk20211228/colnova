import HeroSection from "@/app/(marketing)/components/hero-section";
import InquirySection from "@/app/(marketing)/components/inquiry-section";
import ServiceSeciton from "@/app/(marketing)/components/service-seciton";
import WhatWeDoSection from "@/app/(marketing)/components/what-we-do-section";

import NewsSeciton from "@/app/(marketing)/components/news-seciton";
import CareersSection from "@/app/(marketing)/components/careers-section";

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
