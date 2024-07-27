<script setup lang="ts">
import NavItemLink from '../HeaderComponents/NavPonel/NavItemLink.vue'
import ContactsListItemComponent from '../ContactsComponents/ContactsListItemComponent.vue'
import FooterProdoktorov from './FooterProdoktorov.vue'
import { useNavItemsStore } from '@/stores/navPonelStore'
import { useContactsItemsStore } from '@/stores/contactsStore'
</script>

<template>
    <div class="footer__lists">
        <ul class="footer__navigation">
            <h3>Навигация</h3>
            <NavItemLink
                v-for="(item, key) in useNavItemsStore().$state.navItems"
                :key="item"
                :nav-item="item"
                :link="key"
            />
        </ul>
        <ul class="footer__contacts">
            <h3>Контакты</h3>
            <ContactsListItemComponent
                v-for="(item, index) in useContactsItemsStore().$state.contactsItems"
                :key="index"
                :name="item.name"
                :alt="item.alt"
                :href="item.href"
                :icon="item.icon"
            />
        </ul>
        <FooterProdoktorov />
    </div>
</template>

<style lang="scss" scoped>
.footer__lists {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 30px;
    h3 {
        font-family: 'Raleway';
        font-weight: 400;
        font-size: 23px;
        padding: 0;
    }

    .footer__navigation,
    .footer__contacts {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding-left: 10px;
    }
}
</style>
