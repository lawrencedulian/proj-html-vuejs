<script>
export default {
    name: "AppMain",
    data() {
        return {
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
    <main>
        <div class="small-banner text-center">
            <h5>GET A FREE QUOTE ONLINE NOW!</h5>
        </div>
        <section class="testimonials">
            <div class="container-fluid text-center">
                <h6 class="mb-2">HEADACHE FREE</h6>
                <h2>Award Winning</h2>
                <h2>Moving Company</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore atque impedit velit ipsum ad
                    laudantium
                    exercitationem mollitia maxime, id quasi quod quis enim, aliquam voluptatem, doloribus dolorem. Id,
                    delectus iusto.</p>
                <button class="btn">READ OUR TESTIMONIALS</button>
            </div>
        </section>
        <section class="services">
            <div class="container p-5">
                <div class="text-center">
                    <h6>WE ARE A PROFESSIONAL</h6>
                    <h2>Full-Service Solution</h2>
                </div>
                <div class="row row-cols-3 mt-5">
                    <div class="col p-0" v-for="(service, index) in services" :key="index">
                        <div class="card">
                            <img :src="getImageUrl(`../assets/images/${service.image}`)" alt="">
                            <!-- <img src="../assets/images/avada-movers-serviceonephoto-final-400x255.jpg" alt=""> -->
                            <div class="text-center p-4">
                                <h5>{{ service.title }}</h5>
                                <p>{{ service.text }}</p>
                                <button class="btn">READ MORE</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="big-banner">

        </div>

    </main>
</template>

<style lang="scss" scoped>
@use "../styles/partials/palette" as *;

.small-banner {
    background-color: $denim-vibrant;
    padding: 2em;

    h5 {
        margin: 0;
        font-size: .8rem;
        font-weight: 400;
        color: white;
    }
}

.testimonials {
    background-color: #F7F8FC;

    .text-center {
        width: 50%;
        padding: 5em;

        p {
            margin-top: 1.5em;
            font-size: .8rem;
        }
    }
}

.btn {
    max-width: 220px;
    height: 40px;
    font-size: .8rem;
    font-weight: 700;
    border-radius: 20px;
    color: white;
    background-color: $denim;
    padding-left: 1em;
    padding-right: 1em;
}

.card {
    width: 300px;
    border-radius: 0;
    border: 15px solid #F7F8FC;

    .text-center {
        border-top: 15px solid #F7F8FC;

        h5 {
            color: $denim;
            font-weight: 700;
        }

        p {
            font-size: .7rem;
        }
    }
}
</style>