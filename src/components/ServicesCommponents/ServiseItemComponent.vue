<script setup lang="ts">
defineProps<{
    itemIcon: string
    itemName: string
}>()
</script>

<template>
    <div class="service__item">
        <img :src="`/src/assets/images/toothIcons/${itemIcon}`" :alt="`Иконка ${itemName}`" />
        <span class="service__item-header">{{ itemName }}</span>
        <a href="https://onlinelpu.ru/psp22/record" target="_blank" class="service__record"
            >Записаться</a
        >
    </div>
</template>

<style lang="scss" scoped>
@import '/src/assets/border.scss';
@import '/src/assets//flexCenter.scss';

.service__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
    max-width: 320px;
    width: 100%;
    height: 350px;
    border: $border;
    padding: 20px 10px;
    box-sizing: border-box;

    img {
        height: 130px;
        width: 150px;
    }

    .service__item-header {
        @include flex-center;
        text-align: center;
        font-weight: 400;
        font-size: 20px;
        height: 60px;
    }

    .service__record {
        bottom: 10px;
        @include flex-center;
        width: 150px;
        height: 40px;
        background-color: $golden-color;
        border-radius: 20px;

        &:hover {
            background-color: rgb(149, 102, 36);
            transition: all 0.5s;
        }
    }
}
</style>
