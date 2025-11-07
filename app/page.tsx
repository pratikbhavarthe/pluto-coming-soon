import Image from "next/image";
import NotifyForm from "@/app/components/notify-form";

export default function Home() {
  return (
    <main className="flex h-dvh w-full flex-col items-center justify-center bg-black text-white">
      <Image
        src="/pluto-logo.svg"
        alt="Pluto Mobility Logo"
        width={260}
        height={260}
        priority
        className="select-none"
      />

      <h1 className="mt-8 text-4xl sm:text-6xl font-semibold tracking-tight">
        COMING SOON
      </h1>

      <NotifyForm />
    </main>
  );
}
