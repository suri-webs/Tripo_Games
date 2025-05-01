import { Navbardata1, Navbardata2, NavbarGameData } from "@/Lib/AllDatas";
import Link from "next/link";
export default function Navbar() {
    return (
        <nav className="flex justify-between z-50 items-start fixed top-0 w-full h-[90px] px-[80px] text-black">
            <Link href={"/"} className="text-[25px] pacifico-regular flex items-center h-[90%] rounded-b-2xl px-6 gap-2 bg-[#DA392B] text-white">
                Tripo Games
            </Link>

            <ul className="flex h-[90%] w-[50%] rounded-b-2xl items-center justify-center bg-white text-xl font-sans z-99">
                {Navbardata1.map((item, index) => (
                    <li key={index} className="w-[40%] h-full">
                        <Link href={item.href} className={`text-2xl font-serif h-full flex justify-center items-center w-full transition-all ease-in duration-300 hover:bg-[#DA392B] hover:text-white ${index === 0 ? "rounded-bl-2xl" : ""}`}>
                            {item.NavTittle}
                        </Link>
                    </li>
                ))}
                <li className="relative w-[40%] h-full group flex justify-center items-center text-2xl font-serif hover:bg-[#DA392B] hover:text-white transition-all ease-in duration-300 cursor-pointer">Games
                    <div className="absolute hidden group-hover:flex flex-col gap-2 text-black text-[17px] bg-white rounded-b-2xl -bottom-33.5 overflow-hidden left-0 w-full z-10 shadow-md">
                        {NavbarGameData.map((item, index) => (
                            <Link key={index} href={item.href} className="w-full py-2 text-center hover:bg-[#DA392B] hover:text-white transition-all ease-in duration-300">
                                {item.NavTittle}
                            </Link>
                        ))}
                    </div>
                </li>

                {Navbardata2.map((item, index) => (
                    <li key={index} className="w-[40%] h-full">
                        <Link href={item.href} className={`text-2xl font-serif h-full flex justify-center items-center w-full transition-all ease-in duration-300 hover:bg-[#DA392B] hover:text-white ${index === 1 ? "rounded-br-2xl" : ""}`}>
                            {item.NavTittle}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
