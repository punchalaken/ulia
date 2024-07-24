<script setup lang="ts">
defineProps<{
    name: string
    icon: string
    href: string
    alt: string
}>()
</script>

<template>
    <li class="contacts__item">
        <a :href="href" target="_blank">
            <span>{{ name }}</span>
            <img
                :src="`/src/assets/images/iconsSocial/${icon}.png`"
                :alt="alt"
                class="contacts__icon"
            />
        </a>
    </li>
</template>

<style lang="scss" scoped>
.contacts__item {
    list-style: none;

    a {
        display: flex;
        align-items: center;
        gap: 10px;

        .contacts__icon {
            width: 30px;
        }
    }
}
</style>
