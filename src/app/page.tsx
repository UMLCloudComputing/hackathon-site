import { InstrSans, JBMono } from "@/fonts";

export default function Home() {
  return (
    <div className={"bg-[#ffe7ff] h-screen flex flex-col jusitfy-center items-center"}>
      <h2 className={`${JBMono.className} text-2xl m-6`}>UML CS Club Coalition Presents...</h2>
      <h1 className={`${InstrSans.className} font-bold text-8xl`}>RiverHack 2025</h1>
    </div>
  );
}
