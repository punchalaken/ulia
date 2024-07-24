<script setup lang="ts">
defineProps<{
    navItem: string
    link: string
}>()
</script>

<template>
    <RouterLink :to="link" class="router__link">
        <li>{{ navItem }}</li>
    </RouterLink>
</template>

<style lang="scss" scoped>
.router__link {
    text-decoration: none;
    list-style: none;
    color: inherit;
}
</style>
