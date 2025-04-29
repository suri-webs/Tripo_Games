
interface NavbarProps {
    NavTittle: string;
}

const Navbardata: NavbarProps[] = [
    { NavTittle: "Home" },
    { NavTittle: "About" },
    { NavTittle: "Games" },
    { NavTittle: "Contact" },
];

export default function Navbar() {
    return (
        <nav className="flex justify-between items-start fixed top-0 z-99 w-full h-[90px] px-[80px]  text-black">
            <h1 className="text-[25px] pacifico-regular flex items-center h-[80%] rounded-b-2xl px-6 gap-2 bg-[#DA392B] text-white">Tripo Games</h1>
            <ul className="flex overflow-hidden  h-[80%]  w-[50%] rounded-b-2xl items-center justify-center bg-white text-xl font-sans">
                {Navbardata.map((items, index) => {
                    return (
                        <li key={index} className="text-2xl font-serif hover:bg-[#DA392B] hover:text-white h-full  flex justify-center items-center w-[40%] transition-all ease-in duration-300" >{items.NavTittle}</li>
                    )
                })}
            </ul>
        </nav>
    )
}