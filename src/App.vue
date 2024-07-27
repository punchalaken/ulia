<script setup lang="ts">
import LoaderMainComponent from './components/LoaderMainComponent.vue'
import HeaderMainComponent from './components/HeaderComponents/HeaderMainComponent.vue'
import ChoiceNavComponent from './components/HeaderComponents/NavPonel/ChoiceNavComponent.vue'
import FooterComponent from './components/FooterComponents/FooterComponent.vue'

import { RouterView } from 'vue-router'
</script>

<template>
    <LoaderMainComponent />
    <HeaderMainComponent />
    <ChoiceNavComponent class="navigation" />
    <RouterView />
    <FooterComponent />
</template>

<style lang="scss" scoped>
.navigation {
    position: sticky;
    top: 0;
    background-color: #000;
}
</style>
