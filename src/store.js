import { reactive } from "vue";

export const store = reactive({
    links: [
        {
            name: "Home",
            href: "/home",
            active: true

        },
        {
            name: "Rates",
            href: "/rates",
            active: false
        },
        {
            name: "Testimonials",
            href: "/testimonials",
            active: false
        },
        {
            name: "FAQ",
            href: "/faq",
            active: false
        },
        {
            name: "Blog",
            href: "/blog",
            active: false
        },
        {
            name: "Contact",
            href: "/contact",
            active: false
        },
    ]
})