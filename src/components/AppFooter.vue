<script>
import { store } from '../store'

export default {
    name: "AppFooter",
    data() {
        return {
            store
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
                                <a :href="link.href" :class="{ 'active': link.active }">
                                    <i class="fa-solid fa-greater-than"></i> {{ link.name }}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-4">
                        <h5>RECENT POSTS</h5>
                        <ul>
                            <li v-for="(link, index) in store.recentPostLinks" :key="index">
                                <a :href="link.href">
                                    <i class="fa-solid fa-greater-than"></i> {{ link.name }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom p-4">
            <div class="text-center">
                © Copyright 2012 - 2020 |
                <a href="">Avada Theme by ThemeFusion</a>
                <a href="">| All Rights Reserved </a>
                <a href="">| Powered by WordPress</a>

                <div class="socials mt-2 ">
                    <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                    <a href=""><i class="fa-brands fa-twitter"></i></a>
                    <a href=""><i class="fa-brands fa-instagram"></i></a>
                    <a href=""><i class="fa-brands fa-youtube"></i></a>
                </div>
            </div>
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

    .text-center {
        color: white;

        a {
            color: white;
            margin-left: .4em;
            margin-right: .4em;
        }
    }
}
</style>