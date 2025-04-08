import { Button } from "@/lib/components/ui/button";
import { Card, CardContent, CardHeader } from "@/lib/components/ui/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { AppConfig } from "@/app.config";
import { Badge } from "@/lib/components/ui/badge";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-24">
      <div className="container mx-auto">
        <div className="flex mb-24 gap-6 px-12">
          <Card className="p-12 relative w-full flex flex-row items-center justify-between group hover:bg-accent/90 duration-300">
            <div>
              <CardHeader className="text-4xl text-chart-1 tracking-widest font-bold mb-6">
                CONTACT
              </CardHeader>
              <CardContent className="font-semibold">
                お問い合わせはこちらから
              </CardContent>
              <button>
                <Link href="/contact">
                  <span className="absolute inset-0" />
                </Link>
              </button>
            </div>
            <ChevronRight className="size-12 group-hover:translate-x-2 duration-300" />
          </Card>
          <Card className="p-12 relative w-full flex flex-row items-center justify-between group hover:bg-accent/90 duration-300">
            <div>
              <CardHeader className="text-4xl text-chart-1 tracking-widest font-bold flex items-center gap-2 mb-6">
                CAREERS
                <Badge className="bg-chart-1 text-white rounded-full text-sm -tracking-normal">
                  エントリー開始！
                </Badge>
              </CardHeader>
              <CardContent className="font-semibold">
                2025年の新卒募集を開始しました。
              </CardContent>
              <button>
                <Link href="/">
                  <span className="absolute inset-0" />
                </Link>
              </button>
            </div>
            <ChevronRight className="size-12 group-hover:translate-x-2 duration-300" />
          </Card>
        </div>

        <div className="flex items-center justify-between tracking-widest pb-12 px-6">
          <Button
            variant="ghost"
            className="hover:bg-transparent hover:text-primary-foreground/80"
            asChild
          >
            <Link className="" href="/">
              <span className="text-xl">COLNOVA</span>
            </Link>
          </Button>
          <div className="hidden lg:block">
            <Button
              variant="ghost"
              className="hover:bg-transparent hover:text-primary-foreground/80"
              asChild
            >
              <Link className="" href="/">
                <span className="font-bold p-3 text-sm">HOME</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="hover:bg-transparent hover:text-primary-foreground/80"
              asChild
            >
              <Link className="" href="/">
                <span className="font-bold p-3 text-sm">COMPANY</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="hover:bg-transparent hover:text-primary-foreground/80"
              asChild
            >
              <Link className="" href="/">
                <span className="font-bold p-3 text-sm">SERVICE</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="hover:bg-transparent hover:text-primary-foreground/80"
              asChild
            >
              <Link className="" href="/">
                <span className="font-bold p-3 text-sm">NEWS</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="hover:bg-transparent hover:text-primary-foreground/80"
              asChild
            >
              <Link className="" href="/">
                <span className="font-bold p-3 text-sm">CONTACT</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="hover:bg-transparent hover:text-primary-foreground/80"
              asChild
            >
              <Link className="" href="/">
                <span className="font-bold p-3 text-sm">CAREERS</span>
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center pb-3">
          <Button
            variant="ghost"
            className="hover:bg-transparent hover:text-primary-foreground/80"
            asChild
          >
            <Link className="" href="/">
              <span className="text-sm font-bold tracking-widest">
                PRIVACY POLICY
              </span>
            </Link>
          </Button>
        </div>
        <p className="text-center text-xs">&copy; 2025 {AppConfig.company}</p>
      </div>
    </footer>
  );
}
