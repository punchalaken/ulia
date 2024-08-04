<script setup lang="ts">
import ServiseItemComponent from '../ServicesCommponents/ServiseItemComponent.vue'
import { useServiceItemsStore } from '@/stores/serviceItemStore'
</script>

<template>
    <section class="main__service">
        <h3>Услуги</h3>

        <div class="main__service-container">
            <ServiseItemComponent
                v-for="(item, index) in useServiceItemsStore().$state.serviceItems.slice(0, 3)"
                :key="index"
                :item-icon="item.itemIcon"
                :item-name="item.itemName"
            />
        </div>

        <RouterLink to="services" class="main__services-href">Все услуги</RouterLink>
    </section>
</template>

<style lang="scss" scoped>
@import '/src/assets/border.scss';
@import '/src/assets//flexCenter.scss';

.main__service {
    @include flex-center;
    flex-direction: column;
    box-sizing: border-box;
    margin-inline: 10px;
    max-width: 1200px;

    @media screen and (width < 400px) {
        margin-inline: 5px;
    }

    h3 {
        margin-top: 20px;
    }
    .main__service-container {
        @include flex-center;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 40px;
    }
    .main__services-href {
        display: flex;
        align-items: center;
        justify-content: center;
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
}
</style>
