<script setup lang="ts">
import CommetContent from './CommetContent.vue'
import AddCommentHref from './AddCommentHref.vue'
</script>

<template>
    <section class="slider">
        <h3 class="slider__header">Отзывы</h3>
        <CommetContent />
        <AddCommentHref />
    </section>
</template>

<style lang="scss" scoped>
@import '/src/assets/border.scss';
@import '/src/assets//flexCenter.scss';

.slider {
    @include flex-center;
    box-sizing: border-box;
    padding-inline: 10px;
    position: relative;
    flex-direction: column;
    text-align: center;
    width: 100%;
    max-width: 900px;
    min-width: 360px;
    @media screen and (width<400px) {
        padding: 0;
    }

    .slider__header {
        margin-top: 20px;
    }
}
</style>
