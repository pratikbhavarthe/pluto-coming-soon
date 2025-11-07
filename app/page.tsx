import Image from "next/image";
import NotifyForm from "@/app/components/notify-form";

export default function Home() {
  return (
    <main
      className="
        relative flex min-h-screen flex-col items-center justify-center
        bg-black text-white overflow-hidden
      "
    >
      {/* Background silhouette */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[url('/images/silhouette-pluto.png')] bg-center bg-cover bg-no-repeat opacity-40
        "
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/pluto-logo.svg"
          alt="Pluto Mobility Logo"
          width={350}
          height={350}
          priority
          className="mb-6 select-none"
        />

        <h1 className="text-3xl tracking-[0.15em] mb-6 font-medium">
          COMING SOON
        </h1>

        <NotifyForm />
      </div>
    </main>
  );
}
