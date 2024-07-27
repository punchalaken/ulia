<script setup lang="ts">
import NavItemLink from './NavItemLink.vue'
import { useNavItemsStore } from '@/stores/navPonelStore'
import { ref, type Ref } from 'vue'
const open: Ref<boolean> = ref(false)

function isOpen(): void {
    open.value = !open.value
}
</script>

<template>
    <button class="header__burger" :class="{ open: open }" @click="isOpen">
        <span></span>
        <span></span>
        <span></span>
    </button>

    <nav class="header__nav" :class="{ open: open }">
        <ul class="header__list">
            <NavItemLink
                v-for="(item, key) in useNavItemsStore().$state.navItems"
                :key="item"
                :nav-item="item"
                :link="key"
                @click="isOpen"
            />
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
.header__burger {
    position: absolute;
    left: 5px;
    top: 13px;
    width: 40px;
    height: 40px;
    border: none;
    background-color: black;
    z-index: 100;

    @media screen and (width<550px) {   
        top: 5px;      
    }

    span {
        position: absolute;
        width: 30px;
        height: 3px;
        background-color: #ac8349;
        left: 5px;
        transition:
            transform 0.5s,
            opacity 0.5s;
    }

    :first-child {
        transform: translateY(-10px);
    }

    :last-child {
        transform: translateY(10px);
    }

    &.open span:nth-child(2) {
        opacity: 0;
    }

    &.open span:nth-child(1) {
        transform: translateY(0) rotate(45deg);
    }

    &.open span:nth-child(3) {
        transform: translateY(0) rotate(-45deg);
    }
}

.header__nav {
    position: absolute;
    left: -360px;
    top: 0;
    width: 360px;
    height: 100%;
    background-color: black;
    opacity: 0.9;
    font-size: 22px;
    transition: transform 0.5s;

    .header__list {
        display: flex;
        flex-direction: column;
        padding-left: 20px;
        padding-top: 60px;
        gap: 10px;
        list-style: none;
    }

    &.open {
        transform: translateX(100%);
    }
}
</style>
