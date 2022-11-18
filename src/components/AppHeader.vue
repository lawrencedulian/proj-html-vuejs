<script>
import { store } from "../store";

export default {
    name: "AppHeader",
    data() {
        return {
            store,
            number: "1.800.555.6789"
        }
    },
}
</script>

<template>
    <!-- HEADER -->
    <header>
        <!-- CONTACTS -->
        <section class="contacts d-flex align-items-center">
            <!-- CONTAINER -->
            <div class="container d-flex">
                <!-- CALL-NUMBER -->
                <div class="call-number">
                    <font-awesome-icon icon="fa-solid fa-phone-flip" class="me-1" />
                    Call us for a Quote: {{ number }}
                </div>
                <!-- /CALL-NUMBER -->

                <!-- SOCIALS ICONS -->
                <div class="socials ms-auto">
                    <a href="">
                        <font-awesome-icon icon="fa-brands fa-facebook" />
                    </a>
                    <a href="">
                        <font-awesome-icon icon="fa-brands fa-twitter" />
                    </a>
                    <a href="">
                        <font-awesome-icon icon="fa-brands fa-instagram" />
                    </a>
                    <a href="">
                        <font-awesome-icon icon="fa-brands fa-youtube" />
                    </a>
                </div>
                <!-- /SOCIALS ICONS -->
            </div>
            <!-- CONTAINER -->
        </section>
        <!-- /CONTACTS -->

        <!-- MAIN HEADER -->
        <section class="main-header">
            <!-- CONTAINER -->
            <div class="container d-flex justify-content-between mt-2">
                <!-- LOGO -->
                <div class="logo">
                    <img src="../assets/images/avada-movers-logo.png" alt="">
                </div>
                <!-- /LOGO -->

                <!-- NAVIGATION HEADER -->
                <nav class="header-nav d-flex">
                    <ul class="d-flex align-items-center">
                        <li class="ms-4" v-for="(link, index) in this.store.links" :key="index">
                            <a :href="link.href" :class="{ 'active': link.active }">
                                {{ link.name }}
                            </a>
                        </li>
                        <li><button class="btn ms-4">FREE QUOTE</button></li>
                    </ul>
                </nav>
                <!-- /NAVIGATION HEADER -->
            </div>
            <!-- CONTAINER -->
        </section>
        <!-- /MAIN HEADER -->
    </header>
    <!-- /HEADER -->
</template>

<style lang="scss" scoped>
@use "../styles/partials/palette" as *;
@use "../styles/partials/variables" as *;

// CONTACTS
.contacts {
    background-color: $lima;
    color: white;
    height: $header-contacts-height;
    font-size: .8rem;

    .socials a {
        margin-left: .8em;
        color: white;
    }
}

// MAIN-HEADER
.main-header {
    height: $header-main;
    font-size: .9rem;

    .logo {
        line-height: 50px;
    }

    .logo img {
        height: 40px;
    }

    .header-nav ul {
        line-height: $header-main;
    }
}

// !!MOVE TO APPBUTTON
.btn {
    width: 140px;
    height: 40px;
    font-size: .9rem;
    border-radius: 20px;
    color: white;
    background-color: $denim;
    padding-left: 1em;
    padding-right: 1em;
}
</style>