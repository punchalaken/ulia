<script setup lang="ts">
import HeaderNameComponent from './OtherComponents/HeaderNameComponent.vue'
import HeaderLogoComponent from './OtherComponents/HeaderLogoComponent.vue'
import HeaderNumberComponent from './OtherComponents/HeaderNumberComponent.vue'
</script>

<template>
    <header class="header">
        <HeaderLogoComponent />
        <HeaderNameComponent name="Клюева Юлия Владимировна" />
        <HeaderNumberComponent tel="+79999999999" />
    </header>
</template>

<style lang="scss" scoped>
.header {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    max-width: 1200px;
    width: 100%;
    padding: 10px 20px 10px 50px;
    min-height: 100px;

    @media screen and (width<=900px) {
        border-bottom: 2px solid #ac8349;
        min-height: 50px;
    }

    @media screen and (width < 401px) {
        padding: 10px 5px 10px 50px;
    }
}
</style>
