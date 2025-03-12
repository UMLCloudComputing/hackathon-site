import { JBMono } from "@/fonts"

export const LandingPageRegistrationButton = () => {
    return (
        <button className={`${JBMono.className} bg-[#890095] hover:opacity-80 text-6xl p-3 mt-12 border-4 border-black text-white cursor-pointer hover:shadow-2xl hover-ease-in ease-out duration-300 hover:shadow-[#5bbab5] shadow-none transition-all register_button`}>Register Now!</button>
    )
}