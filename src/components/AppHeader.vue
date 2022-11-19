<script>
export default {
    name: "AppHeader",
    data() {
        return {
            number: "1.800.555.6789",
            imgLogo: "avada-movers-logo.png",
            navLinks: [
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
        }
    },
    methods: {
        getImageUrl(url) {
            return new URL(url, import.meta.url).href;
        }
    }
}

</script>

<template>
    <!-- HEADER -->
    <header>
        <section class="contacts">
            <div class="container d-flex justify-content-between">
                <div class="call ">
                    Call us for a Quote: {{ number }}
                </div>
                <div class="socials">

                </div>
            </div>
        </section>
        <section class="jumbotron">
            <div class="container d-flex justify-content-between mt-2">
                <div class="logo">
                    <img :src="getImageUrl(`../assets/images/${imgLogo}`)" alt="logo">
                </div>
                <nav>
                    <ul class="d-flex">
                        <li class="ms-4" v-for="(link, index) in navLinks" :key="index">
                            <a :href="link.href" :class="{ 'active': link.active }">
                                {{ link.name }}
                            </a>
                        </li>
                        <li>
                            <button class="btn ms-4">FREE QUOTE</button>
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

        h6 {
            font-size: .8rem;
            font-weight: 700;
            color: $dove-gray;
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