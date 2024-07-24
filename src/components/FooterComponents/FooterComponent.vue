<script setup lang="ts">
import FooterListsComponent from './FooterListsComponent.vue'
</script>

<template>
    <footer>
        <div class="footer__container">
            <FooterListsComponent />
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 2px solid #ac8349;
    width: 100%;
    min-height: 300px;
    margin-block: 30px;
    color: white;

    .footer__container {
        display: flex;
        flex-direction: column;
        gap: 60px;
        max-width: 1200px;
        width: 100%;
    }
}
</style>
