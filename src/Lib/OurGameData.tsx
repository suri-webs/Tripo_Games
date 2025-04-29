
interface BoxPosition {
    id: string;
    className: string;
    image: string;
    heading: string;
    Para: string;
    paragraph: string
    apple:string
    playstore:string
}

export const boxPositions: BoxPosition[] = [
    {
        id: 'top-left',
        className: 'left-0 top-0',
        image: "/images/Cat-hat.jpg",
        heading: "Kipon",
        Para: 'Casual - Free',
        paragraph: "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.",
        apple: "/images/apple.png",
        playstore: "/images/Google.avif"
    },
    {
        id: 'top-right',
        className: 'right-0 top-0',
        image: "/images/Robotrix.avif",
        heading: "Robotrix",
        Para: 'RPG - Free',
        paragraph: "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.",
        apple: "/images/apple.png",
        playstore: "/images/Google.avif"
    },
    {
        id: 'bottom-left',
        className: 'left-0 bottom-0',
        image: "/images/trasture-box.avif",
        heading: "Treasure Box",
        Para: 'Adventure - Free',
        paragraph: "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.",
        apple: "/images/apple.png",
        playstore: "/images/Google.avif"
    },
];