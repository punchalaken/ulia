import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export interface navItems {
    itemIcon: string
    itemName: string
}

export const useServiceItemsStore = defineStore('serviceItems', () => {
    const serviceItems: Ref<navItems[]> = ref([
        {
            itemIcon: 'cleanTooth.svg',
            itemName: 'Профессиональная гигиена полости рта'
        },
        {
            itemIcon: 'repairTooth.svg',
            itemName: 'Восстановление анатомической формы зуба'
        },
        {
            itemIcon: 'plusTooth.svg',
            itemName: 'Лечение зубов под увеличением'
        },
        {
            itemIcon: 'treatTooth.svg',
            itemName: 'Лечение зубов'
        },
        {
            itemIcon: 'implantTooth.svg',
            itemName: 'Протезирование на имплантах'
        },
        {
            itemIcon: 'flexTooth.svg',
            itemName: 'Съемное протезирование'
        },
        {
            itemIcon: 'veneers.svg',
            itemName: 'Эстетическое протезирование и реставрация зубов'
        },
        {
            itemIcon: 'whiteningTrays.svg',
            itemName: 'Каппы для отбеливания Зубов и от бруксизма'
        },
        {
            itemIcon: 'delTooth.svg',
            itemName: 'Восстановление утраченных Зубов прямым методом (Мерилэнд)'
        },
        {
            itemIcon: 'superTooth.svg',
            itemName: 'Лечение повышенной чувствительности зубов'
        },
        {
            itemIcon: 'emalTooth.svg',
            itemName: 'Лечение повреждений эмали зубов'
        },
        {
            itemIcon: 'diagnostics.svg',
            itemName: 'Цифровая диагностика'
        }
    ])

    return { serviceItems }
})
