
<script setup lang="ts">
defineProps<{
    persone: string
    content: string
}>()
</script>

<template>
    <h4 class="comments__item-header">{{ persone }}</h4>
    <p class="comments__item-content">{{ content }}</p>
</template>

<style lang="scss" scoped>
@import '/src/assets/border.scss';

.comments__item-header{
    font-family: 'Releway';
    font-size: 22px;
    padding: 5px;
    border-bottom: $border;
}

.comments__item-content{
    margin: 0;
    padding: 20px;
    min-height: 150px;
}



</style>
