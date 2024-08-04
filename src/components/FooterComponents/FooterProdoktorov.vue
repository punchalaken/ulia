<script setup lang="ts"></script>

<template>
    <div class="footer__links">
        <a href="https://prodoctorov.ru/spb/vrach/69657-klyueva/" target="_blank">
            <img
                src="/src/assets/images/prodoctorov.png"
                alt="Оставить отзыв на продоктовров.ру"
                class="footer__prodoctorov"
            />
        </a>
    </div>
</template>

<style lang="scss" scoped>
@import '/src/assets//flexCenter.scss';

.footer__links {
    @include flex-center;

    .footer__prodoctorov {
        width: 300px;
    }
}
</style>
