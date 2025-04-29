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