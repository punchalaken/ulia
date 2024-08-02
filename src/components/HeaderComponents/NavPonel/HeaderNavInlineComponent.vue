<script setup lang="ts">
import NavItemLink from './NavItemLink.vue'
import { useNavItemsStore } from '@/stores/navPonelStore'
</script>

<template>
    <nav class="header__nav">
        <ul class="header__list">
            <NavItemLink
                v-for="(item, key) in useNavItemsStore().$state.navItems"
                :key="item"
                :nav-item="item"
                :link="key"
            />
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
@import '/src/assets/border.scss';
@import '/src/assets//flexCenter.scss';


.header__nav {
    @include flex-center;
    border-top: $border;
    border-bottom: $border;
    width: 100%;
    height: 40px;
    z-index: 100;

    .header__list {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        max-width: 1200px;
        width: 100%;
        box-sizing: border-box;
        padding-inline: 50px;
        font-size: 20px;
        list-style: none;
    }
}
</style>
