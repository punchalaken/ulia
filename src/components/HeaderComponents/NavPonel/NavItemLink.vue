<script setup lang="ts">
defineProps<{
    navItem: string
    link: string
}>()
</script>

<template>
    <RouterLink :to="link" class="router__link" active-class="color-active">
        <li>{{ navItem }}</li>
    </RouterLink>
</template>

<style lang="scss" scoped>
.router__link {
    text-decoration: none;
    list-style: none;
    color: inherit;

    @media (hover: hover) {
        &:hover {
            color: #ac8349;
            transition: all 0.3s;
        }
    }
}
.color-active {
    color: #ac8349;
}
</style>
