import { Button } from "@/lib/components/ui/button";
import { Card } from "@/lib/components/ui/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { AppConfig } from "@/app.config";
import { Badge } from "@/lib/components/ui/badge";
import { cn } from "@/lib/utils";

export default function Footer() {
  const footerCards = [
    {
      title: "CONTACT",
      description: "お問い合わせはこちらから",
      link: "/contact",
      badge: null,
    },
    {
      title: "CAREERS",
      description: "2025年の新卒募集を開始しました。",
      link: "/",
      badge: "エントリー開始！",
    },
  ];

  const navItems = [
    { label: "HOME", href: "/" },
    { label: "COMPANY", href: "/" },
    { label: "SERVICE", href: "/" },
    { label: "NEWS", href: "/" },
    { label: "CONTACT", href: "/" },
    { label: "CAREERS", href: "/" },
  ];

  return (
    <footer className="bg-foreground text-white py-24">
      <div className="container mx-auto">
        <div className="flex mb-24 gap-6 px-6 md:px-12 flex-col lg:flex-row">
          {footerCards.map((card, index) => (
            <Card
              key={index}
              className="p-6 lg:p-10 relative w-full flex flex-row items-center justify-between group hover:bg-accent/90 duration-300"
            >
              <div>
                <div
                  className={cn(
                    "text-2xl lg:text-4xl text-chart-1 tracking-wider font-bold flex flex-col lg:items-center gap-2 mb-6",
                    card.badge && "lg:flex-row-reverse"
                  )}
                >
                  {card.badge && (
                    <Badge className="bg-chart-1 text-white rounded-full text-sm -tracking-normal">
                      {card.badge}
                    </Badge>
                  )}
                  {card.title}
                </div>
                <div className="font-semibold text-sm lg:text-base">
                  {card.description}
                </div>
                {/* <button>
                  <Link href={card.link}>
                    <span className="absolute inset-0" />
                  </Link>
                </button> */}
              </div>
              <ChevronRight className="size-12 group-hover:translate-x-2 duration-300" />
            </Card>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between tracking-widest pb-12 px-6 md:px-8 ">
          <Button
            variant="ghost"
            className="hover:bg-transparent hover:text-primary-foreground/80 w-fit"
            asChild
          >
            <Link className="" href="/">
              <span className="text-xl">COLNOVA</span>
            </Link>
          </Button>
          <nav className="flex flex-col lg:flex-row gap-2 p-2">
            {navItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="hover:bg-transparent hover:text-primary-foreground/80 w-fit"
                asChild
              >
                <Link className="" href={item.href}>
                  <span className="font-bold p-3 text-sm">{item.label}</span>
                </Link>
              </Button>
            ))}
          </nav>
        </div>

        <div className="flex items-center lg:justify-center pb-3 px-6 md:px-8 ">
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
