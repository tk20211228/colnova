import { Button } from "@/lib/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 flex items-center justify-between tracking-widest p-12 bg-gradient-to-b from-foreground/50 to-transparent text-primary-foreground opacity-0 animate-fadeInDownDelay5">
      <Button
        variant="ghost"
        className="hover:bg-transparent hover:text-primary-foreground group"
        asChild
      >
        <Link className="" href="/">
          <span className="text-xl group-hover:scale-110 transition-all duration-300">
            COLNOVA
          </span>
        </Link>
      </Button>
      <div className="hidden lg:block">
        <Button
          variant="ghost"
          className="p-3 hover:bg-transparent hover:text-primary-foreground group"
          asChild
        >
          <Link href="/">
            <span className="p-3 text-sm group-hover:scale-110 transition-all duration-300 font-bold ">
              HOME
            </span>
          </Link>
        </Button>
        <Button
          variant="ghost"
          className="p-3 hover:bg-transparent hover:text-primary-foreground group"
          asChild
        >
          <Link href="/">
            <span className=" font-bold p-3 text-sm group-hover:scale-110 transition-all duration-300">
              COMPANY
            </span>
          </Link>
        </Button>
        <Button
          variant="ghost"
          className="p-3 hover:bg-transparent hover:text-primary-foreground group"
          asChild
        >
          <Link href="/">
            <span className=" font-bold p-3 text-sm group-hover:scale-110 transition-all duration-300">
              SERVICE
            </span>
          </Link>
        </Button>
        <Button
          variant="ghost"
          className="p-3 hover:bg-transparent hover:text-primary-foreground group"
          asChild
        >
          <Link href="/">
            <span className=" font-bold p-3 text-sm group-hover:scale-110 transition-all duration-300">
              NEWS
            </span>
          </Link>
        </Button>
        <Button
          variant="ghost"
          className="p-3 hover:bg-transparent hover:text-primary-foreground group"
          asChild
        >
          <Link href="/">
            <span className=" font-bold p-3 text-sm group-hover:scale-110 transition-all duration-300">
              CONTACT
            </span>
          </Link>
        </Button>
        <Button
          variant="ghost"
          className="p-3 hover:bg-transparent hover:text-primary-foreground group"
          asChild
        >
          <Link href="/">
            <span className=" font-bold p-3 text-sm group-hover:scale-110 transition-all duration-300">
              CAREERS
            </span>
          </Link>
        </Button>
      </div>
    </header>
  );
}
