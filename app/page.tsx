import { BackGround } from "@/components/ui/background";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex min-h-[100dvh] w-full items-center justify-center">
      <Spotlight
        className="hidden md:block top-20 left-0 md:-top-20 md:left-20"
        fill="color-mix(in oklab, var(--primary) 80%, transparent)"
      />
      <BackGround mask="rounded" size="md" />

      <div className="max-w-7xl p-4  mx-auto relative z-10  w-full flex flex-col items-center justify-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={200}
          height={200}
          className="-my-20"
        />
        <h1 className="py-4 tracking-tighter text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-primary/20 to-primary/80">
          Coming Soon!
        </h1>
      </div>
    </div>
  );
}
