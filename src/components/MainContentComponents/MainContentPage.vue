<script setup lang="ts">
import MainServicesComponent from './MainServicesComponent.vue';
</script>

<template>
    <section class="main">
        <div class="main__motto">
            <div class="first">Забота о Вас и Вашей улыбке</div>
            <div class="second">подарите её себе и миру.</div>
        </div>
        <img src="/src//assets/images/motto-photo.jpg" alt="Мое фото" class="main__photo" />
    </section>

    <MainServicesComponent/>
</template>

<style lang="scss" scoped>
img {
    width: 160px;
    height: 160px;
}
</style>
