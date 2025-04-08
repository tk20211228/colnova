import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import openNews from "@/public/open.jpg";
import Android from "@/public/android.jpg";
import Tenjikai from "@/public/tenjikai.jpg";
import { Card } from "@/components/ui/card";

export default function NewsSeciton() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-12 py-48 ">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-[64px] font-bold">NEWS</h2>
          <Button variant="ghost" className="group">
            <span className="text-primary">VIEW MORE</span>
            <ChevronRight className="size-4 group-hover:translate-x-1 duration-300" />
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-6 mx-8">
          <Card className="p-6 duration-300 hover:shadow-none hover:translate-2 relative">
            <div className="relative aspect-video rounded-lg overflow-hidden h-[180px]">
              <Image src={openNews} alt="news" fill className="object-cover" />
            </div>
            <Badge className="bg-primary text-primary-foreground rounded-full mb-3 px-3 tracking-widest">
              プレスリリース
            </Badge>
            <p className="text-[16px] font-bold">
              企業サイトをオープンしました。
            </p>
            <button>
              <Link href="/">
                <span className="absolute inset-0" />
              </Link>
            </button>
            <p className="text-sm font-bold text-muted-foreground/80">
              2025年4月1日 13:34
            </p>
          </Card>

          <Card className="p-6 duration-300 hover:shadow-none hover:translate-2 relative">
            <div className="relative aspect-video rounded-lg overflow-hidden h-[180px]">
              <Image
                src={Android}
                alt="android"
                fill
                className="object-cover"
              />
            </div>
            <Badge className="bg-primary text-primary-foreground rounded-full mb-3 px-3 tracking-widest">
              プレスリリース
            </Badge>
            <p className="text-[16px] font-bold">
              Androidアプリ（タイマーアプリ）をリリースしました。
            </p>
            <button>
              <Link href="/">
                <span className="absolute inset-0" />
              </Link>
            </button>
            <p className="text-sm font-bold text-muted-foreground/80">
              2025年3月26日 14:08
            </p>
          </Card>

          <Card className="p-6 duration-300 hover:shadow-none hover:translate-2 relative">
            <div className="relative aspect-video rounded-lg overflow-hidden h-[180px]">
              <Image
                src={Tenjikai}
                alt="tenjikai"
                fill
                className="object-cover"
              />
            </div>
            <Badge className="bg-primary text-primary-foreground rounded-full mb-3 px-3 tracking-widest">
              プレスリリース
            </Badge>
            <p className="text-[16px] font-bold">
              展示会（JASIS 2025）に出展します。
            </p>
            <button>
              <Link href="/">
                <span className="absolute inset-0" />
              </Link>
            </button>
            <p className="text-sm font-bold text-muted-foreground/80">
              2025年3月36日 14:15
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
