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
    <footer>
        <!-- FOOTER TOP -->
        <div class="footer-top">
            <!-- CONTAINER -->
            <div class="container">
                <!-- ROW -->
                <div class="row row-cols-3">
                    <!-- COL -->
                    <div class="col-4">
                        <h6>ABOUT</h6>
                        <p class="mt-3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis convallis ex ut sem accusam
                            vehicula. Integer elit arcu, hendrerit id sapien ut, facilisis accumsan arcu.
                        </p>
                        <div class="mt-5">
                            <img src="../assets/images/avada-movers-logo.png" alt="">
                        </div>
                    </div>
                    <!--/COL -->

                    <!--COL -->
                    <div class="col-4">
                        <h6>AVADA MOVERS</h6>
                        <ul>
                            <li v-for="(link, index) in navLinksObj" :key="index">
                                <a :href="link.href" :class="{ 'active': link.active }">
                                    <i class="fa-solid fa-greater-than"></i> {{ link.name }}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <!--/COL -->

                    <!-- COL -->
                    <div class="col-4">
                        <h6>RECENT POSTS</h6>
                        <ul>
                            <li v-for="(link, index) in store.recentPostLinks" :key="index">
                                <a :href="link.href">
                                    <i class="fa-solid fa-greater-than"></i> {{ link.name }}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <!--/COL -->
                </div>
                <!-- /ROW -->
            </div>
            <!-- /CONTAINER -->
        </div>
        <!-- FOOTER TOP -->

        <!-- FOOTER BOTTOM -->
        <div class="footer-bottom p-4 ">
            <div class="container">
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
                <div class="btn">
                    <i class="fa-solid fa-chevron-up"></i>
                </div>
            </div>
        </div>
        <!-- /FOOTER BOTTOM -->
    </footer>
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
        font-size: .9rem;
    }

    i {
        font-size: .5rem;
    }
}


.footer-bottom {
    height: $footer-bottom-height;
    background-color: $lima;

    .text-center {
        color: white;
        font-size: .7rem;

        a {
            color: white;
            margin-left: .5em;
            margin-right: .5em;
        }
    }

    .btn {
        display: flex;
        justify-content: flex-end;

        i {
            width: 40px;
            padding: .5em;
            background-color: rgb(81, 80, 80);
        }


    }
}
</style>