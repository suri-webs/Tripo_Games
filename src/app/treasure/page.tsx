import TreasureChallenge from "@/Components/TreasurePage/Challenge/TChallenge";
import TreasureReviews from "@/Components/TreasurePage/Reviews/Treviwes";
import TreasureScreenShots from "@/Components/TreasurePage/ScreenImage/Tscreen";
import TreasureRobotHead from "@/Components/TreasurePage/TreasureHead/TreasureHead";

export default function treasure() {
    return (
        <>
            <TreasureRobotHead />
            <TreasureScreenShots />
            <TreasureReviews />
            <TreasureChallenge />
        </>
    )
}