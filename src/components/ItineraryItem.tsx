"use client"
import { JBMono } from '@/fonts';
import { ItineraryItemProps } from '@/types';
import React, { useState } from 'react'
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

export const ItineraryItem = ({ props }: { props: ItineraryItemProps }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className={`flex flex-row justify-between bg-white p-2 ${isOpen ? "rounded-t-lg" : "rounded-lg"}`}>
                <div className="flex flex-col gap-1 justify-center items-start">
                    <h4 className={`${JBMono.className} text-md`}>{props.time}</h4>
                    <h3 className={`${JBMono.className} text-2xl`}>{props.name}</h3>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <h2 className={`${JBMono.className} text-2xl`}>{props.location}</h2>
                    <button className={`hover:bg-blue-300 cursor-pointer rounded-full`} onClick={() => setIsOpen(!isOpen)}>
                        {
                            isOpen ? (
                                <MdArrowDropUp size={"2.5em"} />
                            ) : (
                                <MdArrowDropDown size={"2.5em"} />
                            )
                        }
                    </button>
                </div>
            </div>
            <div id="itinerary-item-dropdown" className={`bg-white p-2 ${isOpen ? "block" : "hidden"}`}>
                <hr className="pt-2" />
                <h4 className={`${JBMono.className} text-md font-bold`}>Speaker: {props.host}</h4>
                <h4 className={`${JBMono.className} text-md`}>{props.description}</h4>
            </div>
        </div>
    );
}