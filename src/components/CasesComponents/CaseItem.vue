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
                class="case__image circular-mask"
            />
            <img
                :src="`/src/assets/images/casesImages/${after}.jpg`"
                alt="Фотография после"
                class="case__image circular-mask"
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
    width: 580px;
    min-width: 360px;
    border: $border;
    border-top: None;

    @media screen and (width<650px) {
        width: 360px;
        margin: 0;
    }

    .case__item-header {
        @include flex-center;
        text-align: center;
        margin: 0;
        padding: 20px;
        border-block: $border;
        font-size: 17px;
        font-family: 'Releway';
    }

    .case-image__container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        gap: 20px;
        padding: 20px;

        @media screen and (width<650px) {
            flex-direction: column;
        }

        .case__image {
            width: 250px;
            height: 300px;

            @media screen and (width<650px) {
                width: 300px;
                height: 350px;
            }
        }

        .circular-mask {
            mask-image: radial-gradient(
                circle,
                rgba(0, 0, 0, 1) 70%,
                rgba(0, 0, 0, 0) 100%
            );

            @media screen and (max-width: 650px) {
                mask-image: none;
            }
        }
    }
}
</style>
