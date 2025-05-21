import { Button } from "@/lib/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function InquirySection() {
  return (
    <div className="bg-background/10">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-24 text-primary-foreground tracking-widest">
        <div className="flex items-center justify-between flex-col md:flex-row gap-12">
          <div>
            <p className="max-w-lg text-xl md:text-2xl lg:text-3xl font-bold mb-8">
              粒子分布測定器でのお困りごとに 様々な形でサポートいたします。
            </p>
            <p className="text-sm lg:text-base font-bold">
              サービスに関するお問い合わせ、資料のご請求はこちらから承っております。
            </p>
          </div>
          <Button className="hover:bg-background bg-background text-primary text-sm py-3 px-12 h-12.5 duration-300 hover:translate-2 shadow-2xl hover:shadow-none">
            <div className="flex items-center gap-2">
              <span className="tracking-widest font-bold text-xs md:text-sm">
                お問い合わせはこちら
              </span>
              <ChevronRight className="size-4" />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
