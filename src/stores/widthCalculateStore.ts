import { computed, ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useWidthStore = defineStore('widthScreen', () => {
    const windowWidth: Ref<number> = ref(window.innerWidth)

    const handleResize = (): void => {
        windowWidth.value = window.innerWidth
    }

    const isWideScreen = computed((): boolean => {
        return windowWidth.value > 900
    })

    const addListner = (): void => {
        window.addEventListener('resize', handleResize)
    }

    const dellListner = (): void => {
        window.removeEventListener('resize', handleResize)
    }

    return { windowWidth, isWideScreen, addListner, dellListner }
})
