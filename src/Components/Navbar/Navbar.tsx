'use client';
import { Navbardata, Navbardata1, Navbardata2, NavbarGameData } from "@/Lib/AllDatas";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);

    const NavLink = ({ href, title, className = "" }: { href: string; title: string; className?: string }) => (
        <Link href={href}
            className={`text-2xl font-serif h-full flex justify-center items-center w-full transition-all duration-300 hover:bg-[#DA392B] hover:text-white ${className}`}>
            {title}
        </Link>
    );

    return (
        <nav className="fixed top-0 w-full h-[90px] max-lg:h-[70px] flex justify-between items-start z-50 px-[80px] max-md:px-[10px]">
            <Link href="/" className="text-[25px] pacifico-regular flex items-center h-[80%] rounded-b-2xl px-6 gap-2 bg-[#DA392B] text-white max-lg:text-2xl">
                Tripo Games
            </Link>

            <ul className="max-lg:hidden flex h-[80%] w-[50%] rounded-b-2xl items-center justify-center bg-white text-xl font-sans">
                {Navbardata1.map((item, i) => (
                    <li key={i} className="w-[40%] h-full">
                        <NavLink href={item.href} title={item.NavTittle} className={i === 0 ? "rounded-bl-2xl" : ""} />
                    </li>
                ))}
                <li className="relative w-[40%] h-full text-2xl font-serif group flex justify-center items-center cursor-pointer hover:bg-[#DA392B] hover:text-white transition-all">
                    Games
                    <div className="absolute hidden group-hover:flex flex-col gap-2 text-black text-[17px] bg-white rounded-b-2xl -bottom-33.5 left-0 w-full overflow-hidden z-10 shadow-md">
                        {NavbarGameData.map((item, i) => (
                            <Link key={i} href={item.href}
                                className="py-2 text-center hover:bg-[#DA392B] hover:text-white transition-all">
                                {item.NavTittle}
                            </Link>
                        ))}
                    </div>
                </li>
                {Navbardata2.map((item, i) => (
                    <li key={i} className="w-[40%] h-full">
                        <NavLink href={item.href} title={item.NavTittle} className={i === 1 ? "rounded-br-2xl" : ""} />
                    </li>
                ))}
            </ul>

            <div className="relative w-[20%] z-99 h-full hidden max-lg:flex justify-center">
                <button onClick={() => setOpen(!open)}
                    className="bg-white flex justify-center items-center h-[80%] w-full rounded-b-2xl z-50" >
                    <AlignJustify className="w-8 h-8 max-sm:w-6 max-sm:h-6" />
                </button>

                {open && (
                    <ul className="absolute top-full right-0 mt-2 flex flex-col w-[150px] bg-white rounded-lg shadow-lg z-40">
                        {Navbardata.map((item, i) => (
                            <li key={i}>
                                <Link href={item.href}
                                    className="block px-7 py-2 text-end hover:bg-[#DA392B] hover:text-white transition duration-300">
                                    {item.NavTittle}
                                </Link>
                            </li>
                        ))}
                        <li className="relative w-full h-[40px] rounded-b-[10px] group flex justify-end pr-[30px] items-center cursor-pointer hover:bg-[#DA392B] hover:text-white transition-all"
                            onClick={() => setOpen1(!open1)}>
                            Games
                            {open1 && (
                                <div className="absolute flex flex-col overflow-hidden gap-2 text-black text-[16px] bg-white rounded-b-2xl -bottom-33.5 left-0 w-full z-10 shadow-md">
                                    {NavbarGameData.map((item, i) => (
                                        <Link key={i} href={item.href}
                                            className="py-2 text-end pr-[27px] hover:bg-[#DA392B] hover:text-white transition-all">
                                            {item.NavTittle}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
}
