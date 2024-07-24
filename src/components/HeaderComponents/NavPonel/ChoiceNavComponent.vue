<script setup lang="ts">
import HeaderNavInlineComponent from './HeaderNavInlineComponent.vue'
import HeaderNavBurgerComponent from './HeaderNavBurgerComponent.vue'
import { useWidthStore } from '@/stores/widthCalculateStore'
import { onMounted, onUnmounted } from 'vue'

onMounted(() => useWidthStore().addListner())

onUnmounted(() => useWidthStore().dellListner())
</script>

<template>
    <HeaderNavInlineComponent v-if="useWidthStore().isWideScreen" />
    <HeaderNavBurgerComponent v-else />
</template>

<style lang="scss" scoped></style>
