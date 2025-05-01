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
        <section className="w-full h-[700px] gap-20 flex flex-col justify-center items-center bg-[#F6F4F0]">
            <h1 className="text-5xl text-center suez-regular text-[#272443] border-b-4 w-[40%] rounded-2xl pb-5  ">Explore Our Games</h1>
            <div className=" w-[90%] h-[420px] flex justify-evenly items-center">
                {
                    HoverCardsdata.map((items, index) => {
                        return (
                            <Link key={index} href={items.link}>
                                <div  className="group w-[320px] h-[400px] rounded-2xl relative z-10 overflow-hidden">
                                    <div className="absolute inset-0 z-10 scale-100 hover:scale-0 hover:rounded-[100%] transition-all ease-in duration-700 bg-[linear-gradient(180deg,rgba(218,57,43,0),rgba(218,57,43,0.8))]"></div>
                                    <img className="absolute w-full h-full object-center object-cover transition-transform ease-in duration-400 group-hover:scale-105" src={items.image} alt="" />
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </section>)
}