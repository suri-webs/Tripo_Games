import GetinTouch from "@/Components/GetinTouch/GetinTouch";
import JoinourTeam from "@/Components/JoinourTeam/JoinourTeam";

export default function ContactPage() {
    return (
        <>
            <section className="w-full h-[600px] p-[70px] flex justify-center items-center pb-[80px] bg-[#F6F4F0]">
                <div className="flex w-[95%]  flex-col gap-7">
                    <h1 className="text-2xl font-bold text-[#272443]">We’d Love to Hear From You</h1>
                    <h2 className="text-5xl text-[#272443] suez-regular font-medium ">Contact Us</h2>
                    <p className="text-[18px] font-medium  text-[#636161] w-[45%]">
                        Have questions, feedback, or just want to say hello? Reach out to us anytime.
                        Whether you're looking to collaborate, need support, or want to learn more
                        about what we do, we're here to help. Just click “Edit Text” or double-click
                        to replace this message with your contact details, form, or any other info
                        you'd like visitors to see.</p>
                </div>
            </section>
            <JoinourTeam />
            <GetinTouch />
        </>
    )
}