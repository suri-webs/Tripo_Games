import Challenge from "@/Components/RobotrixPage/Challenge/Challenge";
import Reviews from "@/Components/RobotrixPage/Reviews/Reviews";
import RobotHead from "@/Components/RobotrixPage/RobotHead/RobotHead";
import ScreenShots from "@/Components/RobotrixPage/ScreenImage/Screenimg";

export default function Robotrix() {
    return (
        <>
            <RobotHead />
            <ScreenShots />
            <Reviews />
            <Challenge />

        </>
    )
}