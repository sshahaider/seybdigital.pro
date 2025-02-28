import { BackGround } from "@/components/ui/background";
import { Spotlight } from "@/components/ui/spotlight";

export default function Home() {
  return (
    <div className="relative flex min-h-[36rem] w-full items-center justify-center">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="var(--primary)"
      />
      <BackGround mask="rounded" size="md" />

      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className=" py-4 tracking-tighter text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Coming Soon!
        </h1>
      </div>
    </div>
  );
}
