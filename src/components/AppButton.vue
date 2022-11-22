<script>
export default {
    name: "button",
    props: {
        name: String
    }

}
</script>

<template>
    <button class="btn"> {{ name }} </button>
</template>

<style lang="scss" scoped>
@use "../styles/partials/palette" as *;

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
</style>