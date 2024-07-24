<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'

const loader_styles: Ref<any> = ref(null)

onMounted(() => {
    setTimeout(() => {
        loader_styles.value.style = 'opacity: 0; visibility: hidden;'
    }, 1000)
})
</script>

<template>
    <div class="loader-bg" ref="loader_styles">
        <img
            class="fill-up"
            width="100px"
            src="/src/assets/images/loader.svg"
            alt="Картинка зуба при загрузке страницы"
        />
    </div>
</template>

<style lang="scss" scoped>
.loader-bg {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000000;
    transition: 0.4s ease;
}

img.fill-up {
    animation: fill-up-animation 1.2s forwards;
}

@keyframes fill-up-animation {
    0% {
        clip-path: inset(100% 0 0 0);
    }
    100% {
        clip-path: inset(0% 0 0 0);
    }
}
</style>
