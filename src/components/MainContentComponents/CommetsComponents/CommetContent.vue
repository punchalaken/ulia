
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

.comments__item-header{
    font-family: 'Releway';
    font-size: 22px;
    padding: 5px;
    border-bottom: 2px solid #ac8349;
}

.comments__item-content{
    margin: 0;
    padding: 20px;
    min-height: 150px;
}



</style>
