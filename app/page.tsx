import SingleMarquee from "@/app/components/single-marquee";

export default function Home() {
  return (
    <main className="relative h-dvh overflow-hidden bg-black pt-16">
      <div className="flex h-[calc(100dvh-4rem)] w-full items-center justify-center">
        <div className="w-full flex justify-center">
          <SingleMarquee text="COMING SOON ✦" speed={95} direction={-1} />
        </div>
      </div>
    </main>
  );
}
