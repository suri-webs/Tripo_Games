import Image from "next/image";


// navbar data 
interface NavbarProps {
    NavTittle: string;
    href: string
}
export const Navbardata1: NavbarProps[] = [
    {
        NavTittle: "Home",
        href: "/"
    },
    {
        NavTittle: "About",
        href: "/about"
    },
];

export const NavbarGameData: NavbarProps[] = [
    {
        NavTittle: "Kipon",
        href: "/kipon"
    },
    {
        NavTittle: "Robotrix",
        href: "/robotrix"
    },
    {
        NavTittle: "Treasure Box",
        href: "/treasure"
    }

]

export const Navbardata2: NavbarProps[] = [
    {
        NavTittle: "Careers",
        href: "/careers"
    },
    {
        NavTittle: "Contact",
        href: "/contact"
    },
]


interface SecNavbarProps {
    NavTittle: string;
    href: string
}
export const Navbardata: SecNavbarProps[] = [
    {
        NavTittle: "Home",
        href: "/"
    },
    {
        NavTittle: "About",
        href: "/about"
    },
    {
        NavTittle: "Careers",
        href: "/careers"
    },
    {
        NavTittle: "Contact",
        href: "/contact"
    },
];
// boxPositions 

interface BoxPosition {
    id: string;
    className: string;
    image: string;
    heading: string;
    Para: string;
    paragraph: string
    apple: string
    playstore: string
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


// data of what section 

export const dataWhat = [
    { paragraph: " I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you." },
    { paragraph: "   I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you." },
]

export const WhatTextData = [
    {
        heading: "Accomplishment",
        paragraph: "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you."
    },
    {
        heading: "Creativity",
        paragraph: "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you."
    },
]

export const WhatTextData2 = [
    {
        heading: "Creativity",
        paragraph: "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you."
    }
]

export const images = [
    {
        image: "/images/Cartoon1.jpg",
        name: "Suraj",
        work: "Amarjeet Daddy"
    },
    {
        image: "/images/Cartoon2.jpg",
        name: "Ayush",
        work: "Game Devloper"
    },
    {
        image: "/images/Cartoon3.jpg",
        name: "AmarBeta",
        work: "Suraj ka Beta"
    },
    {
        image: "/images/Cartoon4.jpg",
        name: "Lodu Lalit",
        work: "Meri Ooladd"
    },

]


// JobOpningData 

export const JobOpningData = [
    {
        image: "/images/CardRobot1.avif",
        title: "Community Manager",
        post: "San Francisco, CA",
        paragraph: "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.",
    },
    {
        image: "/images/CardRobot2.avif",
        title: "QA Tester",
        post: "San Francisco, CA",
        paragraph: "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.",
    },
    {
        image: "/images/CardRobot3.avif",
        title: "Game Designer",
        post: "San Francisco, CA",
        paragraph: "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.",
    },
    {
        image: "/images/CardRobot4.avif",
        title: "Game Developer",
        post: "San Francisco, CA",
        paragraph: "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.",
    },
]

export const FooterData = [
    {
        title: "Contact",
        items: ["Info@mysite.com", "Tel: 123-456-7890", "500 Terry Francine St", "San Francisco, CA 94158"]
    },
    {
        title: "Navigation",
        items: [
            "Games", "Careers", "About", "Contact", "Accessibility",
            "Terms & Conditions", "Privacy Policy", "Shipping Policy", "Refund Policy"
        ],
        useAnchor: true
    },
    {
        title: "Social",
        items: ["Discord", "Twitch", "Facebook", "Youtube", "Twitter", "LinkedIn"],
        useAnchor: true
    },
    {
        title: "Find Us On",
        items: [
            <Image key="apple" className="!w-[170px]" src="/images/apple.png" alt="Apple Store" width={1000} height={100} />,
            <Image key="google" className="!w-[170px]" src="/images/Google.avif" alt="Google Play" width={1000} height={100} />
        ]
    }
];



// ReviewsData 

interface ReviewProps {
    Reviewittle: string;
    Paragraph: string
}

export const ReviewsData: ReviewProps[] = [
    {
        Paragraph: "I'm a testimonial. Click to edit me and add text that says something nice about you and your services.",
        Reviewittle: " Wang Wai"
    },
    {
        Paragraph: "I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.",
        Reviewittle: "Jose Pablo"
    },
    {
        Paragraph: "I'm a testimonial. Click to edit me and add text that says something nice about you and your services.",
        Reviewittle: "Priya Gunga",
    }
]

// Robotreix reviews 


interface RobotReviewProps {
    Reviewittle: string;
    Paragraph: string
}

export const RobotReviewsData: RobotReviewProps[] = [
    {
        Paragraph: "I'm a testimonial. Click to edit me and add text that says something nice about you and your services.",
        Reviewittle: "Omar Zaine"
    },
    {
        Paragraph: "I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.",
        Reviewittle: "Jay Jay"
    },
    {
        Paragraph: "I'm a testimonial. Click to edit me and add text that says something nice about you and your services.",
        Reviewittle: "Danni Lopez",
    }
]
// Treasure reviews 


interface TreasureReviewProps {
    Reviewittle: string;
    Paragraph: string
}

export const TreasureReviewsData: TreasureReviewProps[] = [
    {
        Paragraph: "I'm a testimonial. Click to edit me and add text that says something nice about you and your services.",
        Reviewittle: "Max Ottis"
    },
    {
        Paragraph: "I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.",
        Reviewittle: "Charlie K"
    },
    {
        Paragraph: "I'm a testimonial. Click to edit me and add text that says something nice about you and your services.",
        Reviewittle: "Sofie Zacks",
    }
]
