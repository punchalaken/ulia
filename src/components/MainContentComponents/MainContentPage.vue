<script setup lang="ts">
import CommentComponent from './CommetsComponents/CommentComponent.vue'
import MainServicesComponent from './MainServicesComponent.vue'
</script>

<template>
    <section class="main">
        <div class="main__motto">
            <div class="first">Забота о Вас</div>
            <div class="second">и Вашей улыбке</div>
        </div>
        <img src="/src//assets/images/mottoPhoto.jpg" alt="Мое фото" class="main__photo" />
    </section>

    <MainServicesComponent />
    <CommentComponent/>
</template>

<style lang="scss" scoped>
.main {
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 1200px;
    width: 100%;
    margin-top: 20px;
    gap: 20px;

    @media screen and (width<800px) {
        flex-direction: column;
    }

    .main__motto {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: 'Great Vibes';
        font-size: clamp(0.3rem, 1rem + 1.5vw, 3rem);

        .first {
            padding-right: 80px;
        }

        .second {
            padding-left: 80px;
        }
    }

    .main__photo {
        width: 360px;
        height: 360px;
    }
}
</style>
