<script setup lang="ts">
defineProps<{
    name: string
}>()
</script>

<template>
    <h1 class="header__name">{{ name }}</h1>
</template>

<style lang="scss" scoped>
.header__name {
    font-size: clamp(0.3rem, 0.45rem + 1.5vw, 3rem);
}
</style>
