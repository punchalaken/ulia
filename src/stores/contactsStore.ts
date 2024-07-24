import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export interface contactsList {
    name: string
    icon: string
    href: string
    alt: string
}

export const useContactsItemsStore = defineStore('contactsItems', () => {
    const contactsItems: Ref<contactsList[]> = ref([
        {
            name: 'WatsApp',
            icon: 'watsApp-icon',
            href: 'tel:+79999999999',
            alt: 'Написать в ВатсАпп'
        },
        {
            name: 'Telegram',
            icon: 'telegram-icon',
            href: 'https://t.me/+79999999999',
            alt: 'Написать в Телеграмм'
        },
        {
            name: 'Почта',
            icon: 'yandexPost-icon',
            href: 'mailto:123@ya.ru',
            alt: 'Написать на почту'
        }
    ])

    return { contactsItems }
})
