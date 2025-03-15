import { ClubCarousel } from "@/components/ClubCarousel";
import { Itinerary } from "@/components/Itinerary";
import { LandingPageRegistrationButton } from "@/components/LandingPageRegistrationButton";
import { InstrSans, JBMono } from "@/fonts";

export default function Home() {
  return (
    <div className={"bg-[#ffe7ff] flex flex-col jusitfy-center items-center gap-8 h-full"}>
      <h2 className={`${JBMono.className} text-2xl m-6 text-black`}>UML CS Club Coalition Presents...</h2>
      <h1 className={`${InstrSans.className} font-bold text-8xl text-black`}>RiverHack 2025</h1>
      <LandingPageRegistrationButton />
      <div>
        <h3 className={`${JBMono.className} text-3xl mt-6 text-black`}>Where: <a className={"underline hover:text-blue-500"} href={"https://maps.app.goo.gl/8Ti7Rft5gL3n98oc8"}>Coburn Hall</a></h3>
        <h3 className={`${JBMono.className} text-3xl mt-4 text-black`}>When: April 5th, 2025</h3>
      </div>
      <ClubCarousel />
      <h2 id="schedule" className={`${InstrSans.className} text-6xl m-6 font-bold text-black`}>Schedule</h2>
      <Itinerary />
    </div>
  );
}
