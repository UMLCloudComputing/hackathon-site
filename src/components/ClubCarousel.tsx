import { ClubCarouselCard } from "./ClubCarouselCard"
import "../app/globals.css"

export const ClubCarousel = () => {
    return (
        <div className="flex flex-row gap-10 overflow-x-scroll m-4 remove_scrollbar">
            <ClubCarouselCard name={"Cloud Computing Club"} />
            <ClubCarouselCard name={"ACM"} />
            <ClubCarouselCard name={"Open Source Club"} />
            <ClubCarouselCard name={"Cybersecurity Club"} />
            <ClubCarouselCard name={"Game Dev Club"} />
        </div>
    )
}