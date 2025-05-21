import { ChevronRight } from "lucide-react";
import { Button } from "../../../lib/components/ui/button";

export default function HeroSection() {
  return (
    <div className="container mx-auto px-12 pt-18 pb-48">
      <div className="text-primary-foreground tracking-widest">
        <div className="flex flex-col mb-22">
          <h1 className="text-6xl md:text-8xl font-semibold font-montserrat opacity-0 animate-fadeInUp break-words break-all">
            PRECISION
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold font-montserrat opacity-0 animate-fadeInUpDelay">
            小さな粒子が大きな未来をつくる
          </h2>
        </div>
        <div className="font-semibold opacity-0 animate-fadeInUpDelay5">
          <p className="mb-8 text-sm md:text-xl">OUR MISSION</p>
          <p className="mb-2 text-lg md:text-2xl lg:text-[28px] ">
            粒子の世界に革新を。
          </p>
          <p className="mb-12 text-lg md:text-2xl lg:text-[28px] flex">
            私たちは計測・解析ソリューションの力で、次世代の研究・製造を支援します。
          </p>
        </div>
        <div className="opacity-0 animate-fadeInUpDelay9">
          <p className="mb-1 text-xs md:text-sm lg:text-base">
            粒子測定のために必要な前処理装置、超音波分散機および、測定データ検証用のデータ解析システムなど、
          </p>
          <p className="mb-12 text-xs md:text-sm lg:text-base">
            トータルでサポートいたします。
          </p>
          <Button className="py-3 px-9 h-12.5 duration-300 hover:translate-2 hover:bg-foreground bg-foreground shadow-2xl hover:shadow-none">
            <div className="flex items-center gap-2">
              <span className="text-xs md:text-sm ">わたしたちについて</span>
              <ChevronRight className="size-4" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
