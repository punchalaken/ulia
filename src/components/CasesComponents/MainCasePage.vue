<script setup lang="ts">
import { useCaseItemsStore } from '@/stores/caseItems'
import CaseItem from './CaseItem.vue'
</script>

<template>
    <div class="case__container">
        <h2 class="case__header">Примеры работ</h2>
        <div class="case__item-container">
            <CaseItem
                v-for="(item, index) in useCaseItemsStore().$state.caseItems"
                :name="item.name"
                :before="item.before"
                :after="item.after"
                :key="index"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '/src/assets//flexCenter.scss';


.case__container {
    @include flex-center;
    flex-direction: column;

    max-width: 1200px;
    margin-bottom: 20px;

    .case__item-container {
        @include flex-center;
        flex-wrap: wrap;
        gap: 20px;
    }
}
</style>
