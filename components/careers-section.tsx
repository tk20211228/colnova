import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import Careers from "@/public/careers.jpg";

export default function CareersSection() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-12 pb-48 ">
        <div className="flex justify-between">
          <div className="flex flex-col items-start justify-center mr-24">
            <h2 className="text-[64px] font-bold mb-6">CAREERS</h2>
            <div className="text-base font-bold tracking-widest  mb-12">
              <p className="">
                COLNOVAは、新しい価値を共に創るメンバーを募集しています。
              </p>
              <p className="">小さな粒子が大きな未来をつくるーー</p>
              <p className="">その原点に、あなたの力を。</p>
            </div>
            <Button className="text-sm py-3 px-12 h-12.5 duration-300 hover:translate-2 hover:bg-foreground bg-foreground shadow-2xl hover:shadow-none">
              <div className="flex items-center gap-2">
                <span className="">募集一覧をみる</span>
                <ChevronRight className="size-4" />
              </div>
            </Button>
          </div>
          <Image
            src={Careers}
            height={520}
            alt="monitors"
            className="aspect-3/2 rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
