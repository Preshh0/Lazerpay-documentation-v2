export interface TabsItem {
    title: string,
    route: string,
    desc: string
    image: string,
    label: string
}

export const tabsData: TabsItem[] = [
    {
        title: "Accept Payments",
        route: "payments",
        desc: `Accepting payments on Lazerpay is as seamless as it gets. Simply integrate a payment link or button.`,
        image: '/images/payments.svg',
        label: 'Go to payments'
    },
    {
        title: "Transfers",
        route: "transfers",
        desc: `Get almost instant payouts to your local bank account, or crypto wallet`,
        image: '/images/transfers.svg',
        label: 'Go to transfers'
    },
    {
        title: "Authentication",
        route: "authentication",
        desc: `Learn how to easily integrate our APIs into your platform or application.`,
        image: '/images/authentication.svg',
        label: 'Go to app authentication'
    },
    {
        title: "Libraries",
        route: "libraries",
        desc: `These are othe official and community Lazerpay Libraries, APIs and Plugins.`,
        image: '/images/libraries.svg',
        label: 'Go to libraries'
    },
    {
        title: "Use Cases",
        route: "use-cases",
        desc: `Learn how we’re powering crypto payments for creators, software providers, stores and startups.`,
        image: '/images/use-cases.svg',
        label: 'Go to Use Cases'
    },
    {
        title: "Guides and Tutorials",
        route: "guides",
        desc: `Step-by-step guide on how to get the best out of your Lazerpay integration and features.`,
        image: '/images/guides.svg',
        label: 'Go to guides'
    },
]