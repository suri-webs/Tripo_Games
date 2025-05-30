import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <section className="w-full h-[800px] max-sm:h-[900px] max-sm:w-full flex justify-center items-center max-sm:flex-col gap-[80px] max-sm:gap-[20px] bg-[#F6F4F0] overflow-x-hidden">
            <div className=" flex justify-center gap-7 items-center flex-col w-[45%] text-[#272443]">
                <h2 className="text-2xl max-sm:pt-[50px] font-medium border-b-4 rounded-xl pb-3 border-[#272443] ">About Tripo</h2>
                <p className="text-[45px] max-sm:w-[450px] w-full text-center suez-regular tracking-wider max-sm:text-2xl">Your Source for Mobile Entertainment</p>
                <p className="text-[20px] w-[90%] max-sm:text-[15px] max-md:w-[500px] max-sm:w-[380px]  font-medium  text-center">Im a paragraph. Click here to add your own text and edit me. Its easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Im a great place for you to tell a story and let your users know a little more about you.</p>
                <Link href={"/about"}>
                    <button className="px-[55px] max-sm:px-[20px] max-sm:text-[15px] py-[12px] rounded-2xl hover:bg-white hover:border hover:text-black text-2xl bg-[#DA392B] text-white transition-all ease-in duration-300">Learn More</button>
                </Link>
            </div>
            <div className="w-[40%] h-[420px] flex justify-center items-center  max-md:w-full rounded-2xl  relative ">
                <div className="relative rounded-2xl w-full max-sm:w-[90%] max-md:h-[70%] h-full overflow-hidden">
                    <Image className="absolute inset-0 rou !w-full !h-full hover:scale-105 transition-all ease-in duration-300  object-cover object-center" src="/images/About-Image.avif" alt="" width={1000} height={100} />
                </div>
                <Image className="absolute -bottom-20 -left-20 max-sm:bottom-5 max-sm:left-[50%] !w-[250px] max-sm:!w-[150px]" src="/images/Doll.avif" alt=""  width={1000} height={100} />
            </div>
        </section>
    )
}