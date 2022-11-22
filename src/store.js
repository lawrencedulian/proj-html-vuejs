import { reactive } from "vue";

export const store = reactive({
    number: "1.800.555.6789",
    imgLogo: "avada-movers-logo.png",
    services: [
        {
            image: 'avada-movers-serviceonephoto-final-400x255.jpg',
            title: "Two Man Teams",
            text: "Lorem ipsum dolor amet, consectetur adipiscing elit. Nullam ac consectetur augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
            image: 'avada-movers-servicetwophoto-final-400x255.jpg',
            title: "We Do All The Lifting",
            text: "Lorem ipsum dolor amet, consectetur adipiscing elit. Nullam ac consectetur augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        },
        {
            image: 'avada-movers-servicethreephoto-final-400x255.jpg',
            title: "Coast To Coast",
            text: "Lorem ipsum dolor amet, consectetur adipiscing elit. Nullam ac consectetur augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
        }
    ],
    testimonials: [
        {
            image: 'avada-movers-johndoe-final-200x200.jpg',
            name: "John Doe",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lectus dolor, aliquet sed maximus et, vestibulum pulvinar leo.Vivamus varius pretium fermentum."
        },
        {
            image: 'avada-movers-janedoe-final-200x200.jpg',
            name: "Jane Doe",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lectus dolor, aliquet sed maximus et, vestibulum pulvinar leo.Vivamus varius pretium fermentum."
        },
        {
            image: 'avada-movers-johnsmith-final-200x200.jpg',
            name: "John Smith",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lectus dolor, aliquet sed maximus et, vestibulum pulvinar leo.Vivamus varius pretium fermentum."
        }
    ],
    recentPostLinks: [
        {
            name: "Heading Out To College?",
            href: "/heading-out",
            active: false

        },
        {
            name: "Moves Your Business",
            href: "/move-business",
            active: false
        },
        {
            name: "Outstanding Quality",
            href: "/quality",
            active: false
        },
        {
            name: "Cost of Moving",
            href: "/costs",
            active: false
        },
        {
            name: "Best Moving Tips",
            href: "/tips",
            active: false
        }
    ]

})