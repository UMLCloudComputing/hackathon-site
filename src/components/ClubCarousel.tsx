import { ClubCarouselCard } from "./ClubCarouselCard"
import "../app/globals.css"

export const ClubCarousel = () => {
    return (
        <div className="flex flex-row gap-10 overflow-x-scroll m-4 remove_scrollbar">
            <ClubCarouselCard name={"Cloud Computing Club"} url={"https://umlcloudcomputing.org/img/club-logo.png"} />
            <ClubCarouselCard name={"ACM"} url={""} />
            <ClubCarouselCard name={"Open Source Club"} url={""} />
            <ClubCarouselCard name={"Cybersecurity Club"} url={""} />
            <ClubCarouselCard name={"Game Dev Club"} url={""} />
        </div>
    )
}