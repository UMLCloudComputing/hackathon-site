import React from 'react'
import { ItineraryItem } from './ItineraryItem';
const test = [
    {
        name: "Workshop 1",
        time: "9:00am - 10:00am",
        location: "Room 1",
        host: "Host 1",
        description: "Description 1"
    },
    {
        name: "Workshop 2",
        time: "10:00am - 11:00am",
        location: "Room 2",
        host: "Host 2",
        description: "Description 2"
    }
]
export const Itinerary = () => {
    return (
        <div className={"flex flex-col gap-4 w-3/4"}>
            <ItineraryItem props={test[0]} />
            <ItineraryItem props={test[1]} />
        </div>
    );
}