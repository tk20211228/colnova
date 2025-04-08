import { Button } from "@/lib/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import MonitorsImage from "../images/monitors.png";
import BusinessManImage from "../images/business-man.png";
import MaintenanceImage from "../images/maintenance.jpg";

export default function ServiceSection() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-12 py-48">
        <div className="flex items-end justify-between mb-24">
          <h3 className="text-[64px] font-bold">SERVICE</h3>
          <Button variant="ghost" className="group">
            <span className="text-primary">VIEW MORE</span>
            <ChevronRight className="size-4 group-hover:translate-x-1 duration-300" />
          </Button>
        </div>
        <div className="flex mb-24">
          <Image
            src={MonitorsImage}
            height={520}
            alt="monitors"
            className="aspect-3/2 rounded-lg shadow-2xl"
          />
          <div className="flex flex-col items-center justify-center flex-1 ml-12">
            <h4 className="text-5xl font-bold mb-8">SMART ANALYSIS</h4>
            <div className="flex flex-col tracking-widest mb-12 max-w-lg ">
              <p className="text-base font-bold mb-4">
                当社オリジナルの 精度粒度分布解析ソフトシステム
              </p>
              <p className="text-base font-bold ">
                BC機器に最適化された解析ツールを提供いたします。より詳細な粒子径・数・分布の可視化が可能です。
              </p>
            </div>
            <Button className="text-sm py-3 px-12 h-12.5 duration-300 hover:translate-2 hover:bg-foreground bg-foreground shadow-2xl hover:shadow-none">
              <div className="flex items-center gap-2">
                <span className="tracking-widest">詳細ページ</span>
                <ChevronRight className="size-4" />
              </div>
            </Button>
          </div>
        </div>
        <div className="flex mb-24">
          <div className="flex flex-col items-center justify-center flex-1 mr-12">
            <h4 className="text-5xl font-bold mb-8">MEASSUREMENT SUPPORT</h4>
            <div className="flex flex-col tracking-widest max-w-lg mb-12">
              <p className="text-base font-bold">
                製品の新規導入、機器更新だけでなく、測定条件最適化、校正、マニュアル作成などもトータルでサポートします。
              </p>
            </div>
            <Button className="text-sm py-3 px-12 h-12.5 duration-300 hover:translate-2 hover:bg-foreground bg-foreground shadow-2xl hover:shadow-none">
              <div className="flex items-center gap-2">
                <span className="tracking-widest">詳細ページ</span>
                <ChevronRight className="size-4" />
              </div>
            </Button>
          </div>
          <Image
            src={BusinessManImage}
            height={520}
            alt="monitors"
            className="aspect-3/2 rounded-lg shadow-2xl"
          />
        </div>
        <div className="flex mb-24">
          <Image
            src={MaintenanceImage}
            height={520}
            alt="monitors"
            className="aspect-3/2 rounded-lg shadow-2xl"
          />
          <div className="flex flex-col items-center justify-center flex-1">
            <h4 className="text-5xl font-bold mb-8">MAINTENANCE</h4>
            <div className="flex flex-col tracking-widest mb-12 max-w-lg ">
              <p className="text-base font-bold">
                定期点検/トラブル時のリモート＆現地サポート
              </p>
            </div>
            <Button className="text-sm py-3 px-12 h-12.5 duration-300 hover:translate-2 hover:bg-foreground bg-foreground shadow-2xl hover:shadow-none">
              <div className="flex items-center gap-2">
                <span className="tracking-widest">詳細ページ</span>
                <ChevronRight className="size-4" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
