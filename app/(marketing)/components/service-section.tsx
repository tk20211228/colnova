import { Button } from "@/lib/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import MonitorsImage from "../images/monitors.png";
import BusinessManImage from "../images/business-man.png";
import MaintenanceImage from "../images/maintenance.jpg";
import { cn } from "@/lib/utils";

export default function ServiceSection() {
  const services = [
    {
      title: "SMART ANALYSIS",
      description: [
        "当社オリジナルの 精度粒度分布解析ソフトシステム",
        "BC機器に最適化された解析ツールを提供いたします。より詳細な粒子径・数・分布の可視化が可能です。",
      ],
      image: MonitorsImage,
      alt: "monitors",
      reverse: false,
    },
    {
      title: "MEASSUREMENT SUPPORT",
      description: [
        "製品の新規導入、機器更新だけでなく、測定条件最適化、校正、マニュアル作成などもトータルでサポートします。",
      ],
      image: BusinessManImage,
      alt: "business man",
      reverse: true,
    },
    {
      title: "MAINTENANCE",
      description: ["定期点検/トラブル時のリモート＆現地サポート"],
      image: MaintenanceImage,
      alt: "maintenance",
      reverse: false,
    },
  ];

  return (
    <div className="bg-background">
      <div className="container mx-auto px-6 md:px-12 py-24 md:py-48">
        <div className="flex items-end justify-between mb-12 md:mb-24">
          <h3 className="text-2xl md:text-5xl font-bold">SERVICE</h3>
          <Button variant="ghost" className="group">
            <span className="text-primary">VIEW MORE</span>
            <ChevronRight className="size-4 group-hover:translate-x-1 duration-300" />
          </Button>
        </div>

        {services.map((service, index) => (
          <div
            key={service.title}
            className="flex mb-24 flex-col md:flex-row gap-12"
          >
            <div
              className={cn(
                "order-1 flex flex-col items-center justify-center",
                service.reverse && "md:order-2",
                "basis-3/5"
              )}
            >
              <Image
                src={service.image}
                alt={service.alt}
                className="aspect-3/2 rounded-lg shadow-2xl"
              />
            </div>
            <div
              className={cn(
                "flex flex-col items-center justify-center order-2",
                service.reverse && "md:order-1",
                "basis-2/5"
              )}
            >
              <h4 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6">
                {service.title}
              </h4>
              <div className="flex flex-col tracking-widest max-w-lg mb-6">
                {service.description.map((paragraph, i) => (
                  <p key={i} className="text-xs md:text-base font-bold">
                    {paragraph}
                  </p>
                ))}
              </div>
              <Button className="text-sm py-3 px-12 h-12.5 duration-300 hover:translate-2 hover:bg-foreground bg-foreground shadow-2xl hover:shadow-none">
                <div className="flex items-center gap-2">
                  <span className="tracking-widest">詳細ページ</span>
                  <ChevronRight className="size-4" />
                </div>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
