import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export interface caseItems {
    name: string
    before: string
    after: string
}

export const useCaseItemsStore = defineStore('caseItems', () => {
    const caseItems: Ref<caseItems[]> = ref([
        {
            name: 'Корневая вкладка и металлокерамическая коронка',
            before: 'crown1',
            after: 'crown2'
        },
        {
            name: 'Виниры 4-х передних верхних зубов',
            before: 'veneersUpper1',
            after: 'veneersUpper2'
        },
        {
            name: 'Виниры',
            before: 'veneers1',
            after: 'veneers2'
        },
        {
            name: 'Реставрация старого металлокерамического мостовидного протеза',
            before: 'metall1',
            after: 'metall2'
        }
    ])

    return { caseItems }
})
