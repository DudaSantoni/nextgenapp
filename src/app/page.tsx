import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="flex items-center justify-around bg-[var(--cinza)] pt-40">
        <Image
          src="/logo.png"
          alt="logo NextGen"
          width={0}
          height={0}
          className="w-[80dvw] h-auto mx-auto"
          sizes="100dvw"
        />
      </section>
    </main>
  );
}