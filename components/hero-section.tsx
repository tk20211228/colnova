import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <div className="container mx-auto px-12 pt-18 pb-48">
      <div className="text-primary-foreground tracking-widest w-fit relative">
        {/* <div className="bg-primary-foreground/20 size-full absolute top-0 left-0 blur-sm -z-10" /> */}
        <div className="flex flex-col mb-22">
          <h1 className="text-8xl font-semibold font-montserrat opacity-0 animate-fadeInUp">
            PRECISION
          </h1>
          <h2 className="text-[64px] font-bold font-montserrat opacity-0 animate-fadeInUpDelay">
            小さな粒子が大きな未来をつくる
          </h2>
        </div>
        <div className=" text-xl font-semibold opacity-0 animate-fadeInUpDelay5">
          <p className="mb-8">OUR MISSION</p>
          <p className="mb-2 text-[28px] ">粒子の世界に革新を。</p>
          <p className="mb-12 text-[28px] ">
            私たちは計測・解析ソリューションの力で、次世代の研究・製造を支援します。
          </p>
          <p className="mb-1 text-base opacity-0 animate-fadeInUpDelay9">
            粒子測定のために必要な前処理装置、超音波分散機および、測定データ検証用のデータ解析システムなど、
          </p>
          <p className="mb-12 text-base opacity-0 animate-fadeInUpDelay9">
            トータルでサポートいたします。
          </p>
          <Button className="text-sm py-3 px-12 h-12.5 duration-300 hover:translate-2 hover:bg-foreground bg-foreground shadow-2xl hover:shadow-none opacity-0 animate-fadeInUpDelay9">
            <div className="flex items-center gap-2">
              <span className="">わたしたちについて</span>
              <ChevronRight className="size-4" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
