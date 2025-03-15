import { ClubCarouselCard } from "./ClubCarouselCard"
import "../app/globals.css"

export const ClubCarousel = () => {
    return (
        <div className="flex flex-row gap-10 overflow-x-scroll m-4 remove_scrollbar">
            <ClubCarouselCard name={"Cloud Computing Club"} img_url={"https://umlcloudcomputing.org/img/club-logo.png"} />
            <ClubCarouselCard name={"ACM"} img_url={"https://se-images.campuslabs.com/clink/images/81bae4c9-4bea-49a7-9b8f-6ad70ffd082f5f496d8c-51e7-4b17-b0a4-8be684d97e72.png?preset=med-sq"} />
            <ClubCarouselCard name={"Open Source Club"} img_url={"https://se-images.campuslabs.com/clink/images/119694f4-b56e-47b3-9d59-a1a6a9d029efbc9ef2c6-9c3a-44a0-8664-29235028a524.png?preset=med-sq"} />
            <ClubCarouselCard name={"Cybersecurity Club"} img_url={"https://se-images.campuslabs.com/clink/images/b2722c2e-74e8-48ac-8b92-54e89eade494284e9a32-5bf6-40f1-87c8-19b8c719430c.gif?preset=med-sq"} />
            <ClubCarouselCard name={"Game Dev Club"} img_url={"https://se-images.campuslabs.com/clink/images/a9cf276f-d83d-4121-8159-fca2ec0b1f2f53aa64ff-181f-4226-83d1-8d2cc76dbdcc.png?preset=med-sq"} />
        </div>
    )
}