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
.case__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1200px;
    margin-bottom: 20px;

    .case__item-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
    }
}
</style>
