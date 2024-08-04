<script setup lang="ts">
defineProps<{
    name: string
    before: string
    after: string
}>()
</script>

<template>
    <div class="case__item">
        <h3 class="case__item-header">{{ name }}</h3>
        <div class="case-image__container">
            <img
                :src="`/src/assets/images/casesImages/${before}.jpg`"
                alt="Фотография до"
                class="case__image"
            />
            <img
                :src="`/src/assets/images/casesImages/${after}.jpg`"
                alt="Фотография после"
                class="case__image"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '/src/assets/border.scss';
@import '/src/assets//flexCenter.scss';

.case__item {
    box-sizing: border-box;
    gap: 20px;
    min-width: 360px;
    max-width: 400px;
    border: $border;
    border-top: None;

    .case__item-header {
        @include flex-center;
        text-align: center;
        height: 60px;
        margin: 0;
        padding: 20px;
        border-block: $border;
        font-size: 17px;
        font-family: 'Releway';
    }

    .case-image__container {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: calc(100% - 80px);
        gap: 20px;
        padding: 20px;

        @media screen and (width<400px) {
        }

        .case__image {
            display: block;
            width: 350px;
            height: 200px;
            border-radius: 20px;
        }
    }
}
</style>
