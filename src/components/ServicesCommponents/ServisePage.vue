<script setup lang="ts">
import ServiseItemComponent from './ServiseItemComponent.vue'
import { useServiceItemsStore } from '@/stores/serviceItemStore'
</script>

<template>
    <section class="services">
        <h2 class="services__header">Услуги</h2>
        <div class="services__container">
            <ServiseItemComponent
                v-for="item in useServiceItemsStore().$state.serviceItems"
                :key="item.itemIcon"
                :itemIcon="item.itemIcon"
                :itemName="item.itemName"
            />
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '/src/assets//flexCenter.scss';

.services {
    @include flex-center;
    flex-direction: column;
    margin: 0 20px 20px;

    @media screen and (width<400px) {
        margin-inline: 0;
    }

    .services__container {
        @include flex-center;
        flex-direction: row;
        flex-wrap: wrap;
        max-width: 1200px;
        width: 100%;
        gap: 30px;
    }
}
</style>
