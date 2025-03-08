import { JBMono } from "@/fonts"
import { NavBarRegisterButton } from "./NavBarRegisterButton"

export const NavBar = () => {
    return (
        <div className={"flex flex-row top-0 w-full bg-[#9b709c] p-1 items-center justify-between"}>
            <div className={"flex flex-row gap-5"}>
                <h2 className={`${JBMono.className} text-3xl underline hover:text-white ease-out hover-ease-in duration-100`}>Schedule</h2>
                <h2 className={`${JBMono.className} text-3xl underline hover:text-white ease-out hover-ease-in duration-100`}>Past Events</h2>
                <h2 className={`${JBMono.className} text-3xl underline hover:text-white ease-out hover-ease-in duration-100`}>Sponsors</h2>
                <h2 className={`${JBMono.className} text-3xl underline hover:text-white ease-out hover-ease-in duration-100`}>About Us</h2>
            </div>
            <div>
                <NavBarRegisterButton />
            </div>
        </div>
    )
}