import { JBMono } from "@/fonts"
import Image from "next/image"
export const ClubCarouselCard = ({ name, img_url }: { name: string, img_url?: string }) => {
    return (
        <div className="bg-red-600 flex-none flex flex-col items-center p-4 gap-6 justify-center text-wrap basis-60 grow-1 shadow-xl rounded-2xl shadow-amber-600">
            <h2 className={`${JBMono.className} text-2xl text-center`}>{name}</h2>
            {img_url ? <img alt={name + "Logo"} src={img_url} className={"club_logo"} /> : <Image alt="test" width={75} height={75} src={"/globe.svg"} className={""} />}
        </div>
    )
}