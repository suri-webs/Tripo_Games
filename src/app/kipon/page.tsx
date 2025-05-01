import Challenge from "@/Components/KiponPage/Challenge/Challenge";
import KiponHead from "@/Components/KiponPage/KiponHead/KiponHead";
import Reviews from "@/Components/KiponPage/Reviews/Reviews";
import ScreenShots from "@/Components/KiponPage/ScreenImage/Screenimg";

export default function Kipon() {
    return (
        <>
            <KiponHead />
            <ScreenShots />
            <Reviews />
            <Challenge />
        </>
    )
}