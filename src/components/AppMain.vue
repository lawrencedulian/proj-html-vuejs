<script>
import { store } from '../store';
import AppButton from './AppButton.vue';
export default {
    name: "AppMain",
    components: {
        AppButton
    },
    data() {
        return {
            store
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
    <main>
        <!-- SMALL BANNER -->
        <div class="small-banner text-center">
            <h6><i class="fa-regular fa-paper-plane me-2"></i>GET A FREE QUOTE ONLINE NOW!</h6>
        </div>
        <!-- /SMALL BANNER -->

        <!-- AWARD -->
        <section class="award">
            <!-- CONTAINER -->
            <div class="container text-center">
                <h4 class="mb-2">HEADACHE FREE</h4>
                <h2>Award Winning</h2>
                <h2>Moving Company</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore atque impedit velit ipsum ad
                    laudantium
                    exercitationem mollitia maxime, id quasi quod quis enim, aliquam voluptatem, doloribus dolorem. Id,
                    delectus iusto.</p>
                <AppButton name="READ OUT TESTIMONIALS" />
            </div>
            <!-- /CONTAINER -->
        </section>
        <!-- AWARD -->

        <!-- SERVICES -->
        <section class="services">
            <!-- CONTAINER -->
            <div class="container">
                <div class="text-center">
                    <h4>WE ARE A PROFESSIONAL</h4>
                    <h2>Full-Service Solution</h2>
                </div>
                <!-- ROW -->
                <div class="row row-cols-3">
                    <!-- COL -->
                    <div class="col p-0 d-flex justify-content-center" v-for="(service, index) in store.services"
                        :key="index">
                        <!-- CARD -->
                        <div class="card">
                            <img :src="getImageUrl(`../assets/images/${service.image}`)" alt="">
                            <div class="text-center p-4">
                                <h5>{{ service.title }}</h5>
                                <p>{{ service.text }}</p>
                                <AppButton name="READ MORE" />
                            </div>
                        </div>
                        <!-- CARD -->
                    </div>
                    <!-- /COL -->
                </div>
                <!-- /ROW -->
            </div>
            <!-- /CONTAINER -->
        </section>
        <!-- /SERVICES -->

        <!-- BIG BANNER -->
        <section class="big-banner position-relative">
            <!-- CONTAINER -->
            <div class="container">
                <!-- CARD -->
                <div class="card p-4">
                    <div class="text-center ">
                        <h4>WE REMOVE THE HEADACHE FROM MOVING</h4>
                        <h2 class="border-bottom">Move With Ease</h2>
                        <p class="mt-4">With our super simple service we can take you from getting a quote, right
                            through to being in
                            you new home with all of your belongings securely packed and safely delivered, even in the
                            rooms of your choice.</p>
                        <AppButton name="GET A FREE QUOTE NOW" />
                    </div>
                </div>
                <!-- /CARD -->
            </div>
            <!-- /CONTAINER -->
        </section>
        <!-- /BIG BANNER -->

        <!-- TESTIMONIALS -->
        <section class="testimonials">
            <!-- CONTAINER -->
            <div class="container">
                <div class="text-center">
                    <h4>HAPPY CUSTOMERS</h4>
                    <h2>Testimonials</h2>
                </div>
                <!-- ROW -->
                <div class="row row-cols-3 mt-5">
                    <!-- COL -->
                    <div class="col p-0 d-flex justify-content-center"
                        v-for="(testimonial, index) in store.testimonials" :key="index">
                        <!-- CARD -->
                        <div class="card">
                            <img :src="getImageUrl(`../assets/images/${testimonial.image}`)" alt="">
                            <div class="text-center p-4">
                                <h5>{{ testimonial.name }}</h5>
                                <p> {{ testimonial.text }} </p>
                            </div>
                        </div>
                        <!-- /CARD -->
                    </div>
                    <!-- COL -->
                </div>
                <!-- /ROW -->
            </div>
            <!-- /CONTAINER -->
            <div class="d-flex justify-content-center">
                <AppButton class="mt-3" name="READ MORE TESTIMONIALS" />
            </div>
        </section>
        <!-- /TESTIMONIALS -->

        <!-- REQUEST QUOTE -->
        <section class="request-quote">
            <!-- CONTAINER FLUID -->
            <div class="container-fluid text-center">
                <h2>Request A Free Quote</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nullam ac consectetur argue. Orci varius
                    natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                <AppButton name="CLICK HERE" />
            </div>
            <!-- /CONTAINER-FLUID -->
        </section>
        <!-- /REQUEST QUOTE -->
    </main>
</template>

<style lang="scss" scoped>
@use "../styles/partials/palette" as *;
@use "../styles/partials/variables" as *;

.small-banner {
    background-color: $denim-vibrant;
    padding: 2em;

    h6 {
        margin: 0;
        font-weight: 400;
        color: white;
    }
}

.award {
    background-color: #F7F8FC;

    .text-center {
        width: 50%;
        padding: 5em;

        h4 {
            color: $dove-gray;
        }

        p {
            margin-top: 1.5em;
        }
    }
}

.services {
    padding: 5em;

    .card {
        border: 15px solid #F7F8FC;
        margin: 1.5em;

        .text-center {
            h4 {
                color: $denim;
            }
        }
    }


}

.big-banner {
    height: $big-banner-height;
    background-image:
        linear-gradient(to right, rgba(0, 0, 0, 0), rgba(219, 234, 253, 1)),
        url(../assets/images/avada-movers-servicetwophoto-final.jpg);
    background-size: cover;
    background-position: center;

    .card {
        border: 15px solid $lima-dark;
        background-color: $lima;

        position: absolute;
        top: 20%;
        right: 0px;
        transform: translateX(-240px);

        .text-center {
            color: white;
            font-size: .8rem;

            h2,
            h4 {
                color: white;
            }
        }
    }
}

.testimonials {
    height: $testimonials-height;
    padding: 5em;
    background-image: url(../assets/images/avada-movers-testimonial-background.jpg);
    background-size: cover;

    .card {
        display: flex;
        align-items: center;
        border: none;
        background: none;

        img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }

        .text-center {
            h4 {
                color: $denim;
            }
        }
    }
}

.request-quote {
    height: 300px;
    background-image: url(../assets/images/avada-movers-request-quote-background.jpg);
    background-size: cover;

    .text-center {
        width: 50%;
        padding: 5em;

        p {
            margin-top: 1.5em;
        }
    }
}
</style>