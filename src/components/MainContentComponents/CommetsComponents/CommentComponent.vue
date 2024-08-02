<script setup lang="ts">
import CommetContent from './CommetContent.vue'
import AddCommentHref from './AddCommentHref.vue'
import { useCommentsStore } from '@/stores/commets'
import { computed, ref } from 'vue'

const commentLength = useCommentsStore().$state.comments.length
const commentIndex = ref<number>(0)
const commentSlide = computed(() => useCommentsStore().$state.comments[commentIndex.value])
const isLastComment = computed(() => commentIndex.value >= commentLength - 1)

const nextComment = () => {
    if (isLastComment.value) {
        return (commentIndex.value = 0)
    }
    commentIndex.value++
}

const prevComment = () => {
    if (commentIndex.value === 0) {
        return (commentIndex.value = commentLength - 1)
    }
    commentIndex.value--
}
</script>

<template>
    <section class="comments">
        <h3 class="comments__header">Отзывы</h3>
        <div class="comments__item">
            <img
                src="/src/assets/images/commentArrow.svg"
                alt="Следующий комментарий"
                class="comments__item-image before"
                @click="prevComment"
            />
            <CommetContent :persone="commentSlide.persone" :content="commentSlide.content" />
            <img
                src="/src/assets/images/commentArrow.svg"
                alt="Следующий комментарий"
                class="comments__item-image next"
                @click="nextComment"
            />
        </div>
        <div class="comments__count">{{ commentIndex + 1 }}/{{ commentLength }}</div>
        <AddCommentHref />
    </section>
</template>

<style lang="scss" scoped>
@import '/src/assets/border.scss';
@import '/src/assets//flexCenter.scss';

.comments {
    @include flex-center;
    position: relative;
    flex-direction: column;
    text-align: center;
    max-width: 900px;
    width: 100%;

    .comments__header {
        margin-top: 20px;
    }

    .comments__item {
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
    .comments__count {
        margin-top: 10px;
    }
}
</style>
