import { Button } from "@/lib/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/lib/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { AppConfig } from "@/app.config";

const navigationItems = [
  { label: "HOME", href: "/" },
  { label: "COMPANY", href: "/company" },
  { label: "SERVICE", href: "/" },
  { label: "NEWS", href: "/" },
  { label: "CONTACT", href: "/" },
  { label: "CAREERS", href: "/" },
] as const;

const mobileNavigationItems = [
  { label: "Home", href: "/" },
  { label: "Company", href: "/company" },
  { label: "Service", href: "/" },
  { label: "News", href: "/" },
  { label: "Careers", href: "/" },
  { label: "Contact", href: "/" },
] as const;

export default function Header() {
  return (
    <header
      className={cn(
        "sticky top-0 flex items-center z-10 min-w-0",
        "justify-between",
        "opacity-0 animate-fadeInDownDelay5",
        "bg-gradient-to-b from-foreground/50 to-transparent ",
        "text-primary-foreground tracking-widest",
        "p-4 lg:p-12"
      )}
    >
      <Button
        variant="ghost"
        className="hover:bg-transparent hover:text-primary-foreground group"
        asChild
      >
        <Link className="" href="/">
          <span className="text-base lg:text-xl group-hover:scale-110 transition-all duration-300">
            {AppConfig.title}
          </span>
        </Link>
      </Button>

      <nav className="hidden lg:block">
        {navigationItems.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            className="p-3 hover:bg-transparent hover:text-primary-foreground group"
            asChild
          >
            <Link href={item.href}>
              <span className="font-bold p-3 text-sm group-hover:scale-110 transition-all duration-300">
                {item.label}
              </span>
            </Link>
          </Button>
        ))}
      </nav>
      <MobileNav />
    </header>
  );
}

function MobileNav({ className }: { className?: string }) {
  return (
    <div className={cn("lg:hidden", className)}>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <MenuIcon className="size-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="p-9">
            <SheetTitle>{AppConfig.title}</SheetTitle>
          </SheetHeader>
          <div className="grid gap-6 p-6">
            {mobileNavigationItems.map((item) => (
              <Button
                key={item.label}
                className="w-fit"
                variant="ghost"
                asChild
              >
                <Link
                  href={item.href}
                  className="text-sm font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  {item.label}
                </Link>
              </Button>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
