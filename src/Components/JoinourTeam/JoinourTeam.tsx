import Image from "next/image";
import Link from "next/link";

export default function JoinourTeam() {
    return (
        <div className="w-full relative h-[800px] max-md:h-[500px] bg-[url('/Images/First-fixed-bg.avif')] bg-cover bg-center bg-no-repeat bg-fixed flex justify-start p-[120px] max-md:p-[20px] max-md:pt-10 items-start">
            <div className="w-[800px] flex flex-col max-md:justify-center gap-10">
                <h1 className="text-3xl max-md:text-2xl text-white font-medium">Join Our Team</h1>
                <p className="text-5xl max-md:text-3xl suez-regular tracking-wider  text-white">It takes the worlds best talent to change the game.</p>
                    <Link href={"/careers"} className="px-[55px] py-[15px] max-md:px-[25px] max-md:py-[10px] w-fit rounded-[15px] hover:bg-white transition-all ease-in duration-300 text-[18px] bg-[#FCFF72]">Explore Careers</Link>
            </div>
            <Image src="/images/Hat-Cat.avif" className="absolute bottom-0 max-md:!w-[170px] right-20 max-md:right-10 "  width={500} height={100} alt="" />
        </div>

    )
}









// event bubling chid to parent  