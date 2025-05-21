import HeroSection from "@/app/(marketing)/components/hero-section";
import InquirySection from "@/app/(marketing)/components/inquiry-section";
import ServiceSection from "@/app/(marketing)/components/service-section";
import WhatWeDoSection from "@/app/(marketing)/components/what-we-do-section";

import NewsSection from "@/app/(marketing)/components/news-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatWeDoSection />
      <ServiceSection />
      <InquirySection />
      <NewsSection />
      {/* <CareersSection /> */}
    </>
  );
}
