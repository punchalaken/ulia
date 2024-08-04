
<script setup lang="ts">
defineProps<{
    persone: string
    content: string
}>()
</script>

<template>
    <h4 class="slider__item-header">{{ persone }}</h4>
    <p class="slider__item-content">{{ content }}</p>
</template>

<style lang="scss" scoped>
@import '/src/assets/border.scss';

.slider__item-header{
    font-family: 'Releway';
    font-size: 22px;
    padding: 5px;
    border-bottom: $border;
}

.slider__item-content{
    display: flex;
    align-items: center;
    margin: 0;
    padding: 20px;
    min-height: 150px;
}



</style>
