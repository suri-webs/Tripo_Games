import Image from "next/image";
import Link from "next/link";


interface HoverCardsProps {
    image: string;
    link: string
}

const HoverCardsdata: HoverCardsProps[] = [
    {
        image: "/images/Helloween.jpg",
        link: "/kipon"
    },
    {
        image: "/images/Robot.jpg",
        link: "/robotrix"
    },
    {
        image: "/images/Coin.jpg",
        link: "/treasure"
    },
];

export default function HoverCards() {
    return (
        <section className="w-full gap-20 flex flex-col justify-center items-center bg-[#F6F4F0] py-[50px]">
            <h1 className="text-5xl max-sm:text-2xl text-center suez-regular text-[#272443] border-b-4 w-[40%] rounded-2xl pb-5  max-sm:w-[80%] ">Explore Our Games</h1>
            <div className="w-[90%] max-md:w-full h-[70%] flex flex-wrap max-sm:gap-10 justify-evenly items-center">
                {
                    HoverCardsdata.map((items, index) => {
                        return (
                            <Link key={index} href={items.link}>
                                <div  className="group w-[320px] h-[400px] rounded-2xl relative z-10 overflow-hidden max-sm:w-[300px] max-sm:h-[300px]">
                                    <div className="absolute inset-0 z-10 scale-100 hover:scale-0 hover:rounded-[100%] transition-all ease-in duration-700 bg-[linear-gradient(180deg,rgba(218,57,43,0),rgba(218,57,43,0.8))]"></div>
                                    <Image className="absolute !w-full !h-full object-center object-cover transition-transform ease-in duration-400 group-hover:scale-105" src={items.image} alt=""  width={1000} height={100}/>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </section>)
}