import { JBMono } from '@/fonts';
import React from 'react'

export const Footer = () => {
    return (
        <div className="w-screen h-20 bg-[#9b709c] flex justify-center items-center">
            <p className={`${JBMono.className} text-xl`}>Copyright 2025 UML CS Club Coalition</p>
        </div>
    );
}