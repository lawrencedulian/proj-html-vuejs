<script>
export default {
    name: "AppMain",
    data() {
        return {

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

            </div>
        </section>

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

    .btn {
        width: 220px;
        height: 40px;
        font-size: .8rem;
        font-weight: 700;
        border-radius: 20px;
        color: white;
        background-color: $denim;
        padding-left: 1em;
        padding-right: 1em;
        margin-top: 1.5em;
    }
}

.services {
    .card {
        width: 300px;
        height: 400px;
    }
}
</style>