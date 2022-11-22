<script>
export default {
    name: "AppFooter",
    data() {
        return {
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

        }
    },
    props: {
        navLinksObj: Object
    }
}
</script>

<template>
    <!-- FOOTER -->
    <footer>
        <div class="footer-top">
            <div class="container">
                <div class="row row-cols-3">
                    <div class="col-4">
                        <h5>ABOUT</h5>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis ex ut sem accusam
                            vehicula. Integer elit arcu, hendrerit id sapien ut, facilisis accumsan arcu.
                        </p>
                        <div class="mt-3">
                            <img src="../assets/images/avada-movers-logo.png" alt="">
                        </div>
                    </div>
                    <div class="col-4">
                        <h5>AVADA MOVERS</h5>
                        <ul>
                            <li v-for="(link, index) in navLinksObj" :key="index">
                                <a :href="link.href">
                                    {{ link.name }}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-4">
                        <h5>RECENT POSTS</h5>
                        <ul>
                            <li v-for="(link, index) in recentPostLinks" :key="index">
                                <a :href="link.href">
                                    <i class="arrow right"></i>{{ link.name }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">

        </div>
    </footer>
    <!-- /FOOTER -->
</template>

<style lang="scss" scoped>
@use "../styles/partials/palette" as *;
@use "../styles/partials/variables" as *;

footer {
    border-top: 15px solid $lima ;
}

.footer-top {
    padding: 5em;

    ul {
        padding: 0;
    }

    ul li {
        margin: 1em 1em 0 0;
    }
}


.footer-bottom {
    height: $footer-bottom-height;
    background-color: $lima;
}
</style>