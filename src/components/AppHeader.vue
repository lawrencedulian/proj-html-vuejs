<script>
import { store } from '../store'
import AppButton from './AppButton.vue';

export default {
    name: "AppHeader",
    data() {
        return {
            store
        };
    },
    components: {
        AppButton
    },
    props: {
        navLinksObj: Object
    },
    methods: {
        getImageUrl(url) {
            return new URL(url, import.meta.url).href;
        }
    },

}

</script>

<template>
    <!-- HEADER -->
    <header>
        <section class="contacts">
            <div class="container d-flex justify-content-between">
                <div class="call ">
                    <i class="fa-solid fa-phone-flip me-2"></i>
                    Call us for a Quote: {{ store.number }}
                </div>
                <div class="socials d-flex align-items-center">
                    <a href=""><i class="fa-brands fa-facebook-f"></i></a>
                    <a href=""><i class="fa-brands fa-twitter"></i></a>
                    <a href=""><i class="fa-brands fa-instagram"></i></a>
                    <a href=""><i class="fa-brands fa-youtube"></i></a>
                </div>
            </div>
        </section>
        <section class="jumbotron">
            <div class="container d-flex justify-content-between mt-2">
                <div class="logo">
                    <img :src="getImageUrl(`../assets/images/${store.imgLogo}`)" alt="logo">
                </div>
                <nav>
                    <ul class="d-flex">
                        <li class="ms-4" v-for="(link, index) in navLinksObj" :key="index">
                            <a :href="link.href" :class="{ 'active': link.active }">
                                {{ link.name }}
                            </a>
                        </li>
                        <li>
                            <AppButton class="ms-3" name="FREE QUOTE" />
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="container info text-center">
                <h6>MOVING WITHOUT HASSLE</h6>
                <h1>WE MAKE IT SIMPLE</h1>
                <h6>PROFESSIONAL SERVICE WITH QUALITY AND CUSTOMER SATISFACTION</h6>
            </div>
        </section>
    </header>

    <!-- /HEADER -->
</template>

<style lang="scss" scoped>
@use "../styles/partials/palette" as *;
@use "../styles/partials/variables" as *;

.contacts {
    height: $header-contacts-height;
    background-color: $lima;
    font-size: .8rem;

    .call {
        color: white;
        line-height: $header-contacts-height;
    }

    .socials a {
        color: white;
        margin-left: .8em;
    }
}

.jumbotron {
    background-image: url(../assets/images/avada-movers-homeherobackground-final.jpg);
    height: 80vh;
    background-size: cover;
    background-position: center;
    position: relative;

    .info {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        h1 {
            font-size: 3.5rem;
            font-weight: 800;
        }

    }
}

.contacts .logo {
    display: flex;
    align-items: center;
}

.logo img {
    height: 40px;
}

ul {
    margin: 0;
    font-size: .8rem;
    font-weight: 700;

    li {
        line-height: 40px;
    }
}


// !!MOVE TO APPBUTTON
.btn {
    width: 140px;
    height: 40px;
    font-size: .8rem;
    font-weight: 700;
    border-radius: 20px;
    color: white;
    background-color: $denim;
    padding-left: 1em;
    padding-right: 1em;
}
</style>