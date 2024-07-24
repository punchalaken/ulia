<script setup lang="ts">
const telephone = defineProps<{
    tel: string
}>()

const formatNumber: string = telephone.tel.replace(
    /(\+7)(\d{3})(\d{3})(\d{2})(\d{2})/,
    '$1 ($2) $3-$4-$5'
)
</script>

<template>
    <a :href="`tel:${tel}`" class="header__number">
        <img
            src="/src/assets/images/iconsSocial/watsApp-icon.png"
            alt="Связь через watsApp"
            class="header__icon"
        />
        {{ formatNumber }}
    </a>
</template>

<style lang="scss" scoped>
.header__number {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: clamp(0.3rem, 0.5rem + 0.5vw, 3rem);
    font-weight: 500;
    text-decoration: none;

    img {
        width: clamp(0.3rem, 1rem + 0.5vw, 3rem);
    }
}
</style>
