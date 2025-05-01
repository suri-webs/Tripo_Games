import Link from "next/link";

export default function JoinourTeam() {
    return (
        <Link href={"/contact"} className="w-full relative h-[800px] bg-[url('/Images/First-fixed-bg.avif')] bg-cover bg-center bg-no-repeat bg-fixed flex justify-start p-[120px] items-start">

            <div className="w-[800px] flex flex-col gap-10">
                <h1 className="text-3xl text-white font-medium">Join Our Team</h1>
                <p className="text-5xl suez-regular tracking-wider  text-white">It takes the world's best talent to change the game.</p>
                <button className="px-[55px] py-[15px] w-fit rounded-[15px] hover:bg-white transition-all ease-in duration-300 text-[18px] bg-[#FCFF72]">Explore Careers</button>
            </div>



            <img src="/images/Hat-Cat.avif" className="absolute bottom-0 right-20" alt="" />
        </Link>

    )
}