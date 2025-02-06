'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

const linkData = [
    { name: "Performance", href: "/performance" },
    { name: "Reliability", href: "/reliability" },
    { name: "Scale", href: "/scale" }
]

export default function Header() {
    const pathname = usePathname();
    return (
        <div className="absolute w-full z-10">
            <div className="flex justify-between container mx-auto text-white p-8 items-center">
                <a href="/" className="text-3xl font-bold">Home</a>
                <div className="text-xl space-x-4">
                    {linkData.map(({ name, href }, index) => (
                        <a key={index} href={href} className={pathname === href ? 'text-purple-500' : ''}>{name}</a>
                    ))}
                </div>
            </div>
        </div>
    )
}
