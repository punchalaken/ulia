import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export interface navItems {
    '/': string
    services: string
    cases: string
    contacts: string
}

export const useNavItemsStore = defineStore('navItems', () => {
    const navItems: Ref<navItems> = ref({
        '/': 'Главная',
        services: 'Услуги',
        cases: 'Примеры работ',
        contacts: 'Контакты'
    })

    return { navItems }
})
