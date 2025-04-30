import Link from "next/link";

interface NavbarProps {
    NavTittle: string;
    href: string
}

const Navbardata: NavbarProps[] = [
    {
        NavTittle: "Home",
        href: "/"
    },
    {
        NavTittle: "About",
        href: "/about"
    },
    {
        NavTittle: "Careers",
        href: ""
    },
    {
        NavTittle: "Games",
        href: ""
    },
    {
        NavTittle: "Contact",
        href: ""
    },
];

export default function Navbar() {
    return (
        <nav className="flex justify-between z-99 items-start fixed top-0  w-full h-[90px] px-[80px]  text-black">
            <h1 className="text-[25px] pacifico-regular flex items-center h-[80%] rounded-b-2xl px-6 gap-2 bg-[#DA392B] text-white">Tripo Games</h1>
            <ul className="flex overflow-hidden  h-[80%]  w-[50%] rounded-b-2xl items-center justify-center bg-white text-xl font-sans">
                {Navbardata.map((items, index) => {
                    return (
                        <Link href={items.href} key={index} className="text-2xl font-serif hover:bg-[#DA392B] hover:text-white h-full  flex justify-center items-center w-[40%] transition-all ease-in duration-300" >{items.NavTittle}</Link>
                    )
                })}
            </ul>
        </nav>
    )
}