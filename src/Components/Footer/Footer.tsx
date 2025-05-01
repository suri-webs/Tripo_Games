import { FooterData } from "@/Lib/AllDatas";

export default function Footer() {
    FooterData
    return (
        <footer className="w-full h-[750px] flex flex-col gap-10 justify-center items-center bg-[#F6F4F0]">
            <h4 className="text-4xl suez-regular w-[80%] text-center text-[#272443] pb-[20px] border-b-4 rounded-2xl">
                An Immersive Gaming Experience
            </h4>
            <div className="w-[75%] h-[400px] py-[40px] flex justify-evenly">
                {FooterData.map(({ title, items, useAnchor }) => (
                    <div key={title} className="w-full flex flex-col gap-5">
                        <h3 className="text-3xl font-medium  suez-regular mb-1 text-[#272443]">{title}</h3>
                        <ul className="flex flex-col gap-2">
                            {items.map((item, index) =>
                                typeof item === "string" ? (
                                    <li key={index}>
                                        {useAnchor ? <a href="#">{item}</a> : item}
                                    </li>
                                ) : (
                                    item
                                )
                            )}
                        </ul>
                    </div>
                ))}
            </div>
            <h4 className="text-[20px] suez-regular text-[#272443] w-[80%] pt-5 text-center pb-[20px] border-t-4 rounded-2xl">
                © 2035 by Tripo. Powered and secured by Wix
            </h4>

        </footer>
    );
}
