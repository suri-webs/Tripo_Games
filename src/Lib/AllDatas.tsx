

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
        href: "/"
    },
    {
        NavTittle: "Robotrix",
        href: "/"
    },
    {
        NavTittle: "Treasure Box",
        href: "/"
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
            <img key="apple" className="w-[170px]" src="/images/apple.png" alt="Apple Store" />,
            <img key="google" className="w-[170px]" src="/images/Google.avif" alt="Google Play" />
        ]
    }
];