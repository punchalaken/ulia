<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import { useCommentsStore } from '@/stores/commets'
import 'swiper/scss'
import 'swiper/scss/navigation'
</script>

<template>
    <Swiper
        :modules="[Navigation]"
        :navigation="true"
        :slides-per-view="1"
        :space-between="10"
        class="swiper"
    >
        <swiper-slide
            v-for="(item, key) in useCommentsStore().$state.comments"
            :key="key"
            class="swiper__item"
        >
            <h4 class="slider__item-header">{{ item.persone }}</h4>
            <p class="slider__item-content">{{ item.content }}</p>
        </swiper-slide>
    </Swiper>
</template>

<style lang="scss" scoped>
@import '/src/assets/border.scss';

.swiper {
    width: 100%;
    max-width: 900px;
    min-width: 360px;
    cursor: pointer;
    --swiper-navigation-size: 30px;
    --swiper-navigation-color: #ac8943;
    @media screen and (width<600px) {
        height: 350px;
    }

    .swiper__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        border: $border;
    }

    .slider__item-header {
        box-sizing: border-box;
        width: 100%;
        font-family: 'Releway';
        font-size: 22px;
        padding: 5px;
        border-bottom: $border;
    }

    .slider__item-content {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: calc(100% - 80px);
        margin: 0;
        padding: 20px;
        min-height: 150px;
        height: 100%;
    }
}
</style>
