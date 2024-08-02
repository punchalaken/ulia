<script setup lang="ts"></script>

<template>
    <RouterLink to="comment-form/" class="comments__button"> Оставить отзыв </RouterLink>
</template>

<style lang="scss" scoped>
@import '/src/assets/border.scss';
@import '/src/assets//flexCenter.scss';

.comments__button {
    @include flex-center;
    margin-top: 25px;
    background-color: $golden-color;
    width: 150px;
    height: 50px;
    border-radius: 40px;

    &:hover {
        background-color: rgb(149, 102, 36);
        transition: all 0.5s;
    }
}
</style>
