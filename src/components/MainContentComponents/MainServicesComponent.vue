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
.main__service {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    margin-inline: 10px;
    max-width: 1200px;

    @media screen and (width < 400px) {
        margin-inline: 5px;
    }

    h3 {
        margin-top: 40px;
    }
    .main__service-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 40px;
    }
    .main__services-href {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 25px;
        background-color: #ac8349;
        width: 150px;
        height: 50px;
        border-radius: 40px;
    }
}
</style>
