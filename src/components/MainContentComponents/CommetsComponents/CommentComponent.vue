<script setup lang="ts">
import CommetContent from './CommetContent.vue'
import AddCommentHref from './AddCommentHref.vue'
import { useCommentsStore } from '@/stores/commets'

</script>

<template>
    <section class="slider">
        <h3 class="slider__header">Отзывы</h3>
        <div class="slider__item">
            <img
                src="/src/assets/images/commentArrow.svg"
                alt="Следующий комментарий"
                class="slider__item-image before"
            />
            <CommetContent
                v-for="(item, key) in useCommentsStore().$state.comments"
                :key="key"
                :persone="item.persone"
                :content="item.content"
            />
            <img
                src="/src/assets/images/commentArrow.svg"
                alt="Следующий комментарий"
                class="slider__item-image next"
            />
        </div>
        <AddCommentHref />
    </section>
</template>

<style lang="scss" scoped>
@import '/src/assets/border.scss';
@import '/src/assets//flexCenter.scss';

.slider {
    @include flex-center;
    position: relative;
    flex-direction: column;
    text-align: center;
    max-width: 900px;
    width: 100%;

    .slider__header {
        margin-top: 20px;
    }

    .slider__item {
        border: $border;
        margin-inline: 40px;
        min-height: 100px;

        :hover {
            cursor: pointer;
        }

        .before {
            position: absolute;
            top: 200px;
            left: 0;
            transform: rotate(180deg);
        }

        .next {
            position: absolute;
            top: 200px;
            right: 0;
        }
    }
}
</style>
