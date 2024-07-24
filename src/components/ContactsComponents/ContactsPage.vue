<script setup lang="ts">
import { useContactsItemsStore } from '@/stores/contactsStore'
import ContactsListItemComponent from './ContactsListItemComponent.vue'
import ContactsMapComponent from './ContactsMapComponent.vue'
</script>

<template>
    <section class="contacts">
        <h2 class="contacts__header">Контакты</h2>

        <div class="contacts__container">
            <div class="contacts__hrefs">
                <p>Вы можете связаться со мной любым, удобный для Вас, способом:</p>
                <ul class="contacts__list">
                    <ContactsListItemComponent
                        v-for="(item, index) in useContactsItemsStore().$state.contactsItems"
                        :key="index"
                        :name="item.name"
                        :alt="item.alt"
                        :href="item.href"
                        :icon="item.icon"
                    />
                </ul>
                <p>Веду прием по адресу:</p>
                <p class="contacts__address">Басков переулок д. 38 лит. А.</p>
            </div>

            <div class="contacts__containert-map">
                <ContactsMapComponent />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.contacts {
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    width: 100%;
    min-width: 360px;
    color: rgb(255, 255, 255);
    font-size: 20px;

    .contacts__header {
        text-align: center;
    }

    .contacts__container {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        padding-inline: 20px;

        @media screen and (width < 900px) {
            font-size: 18px;
            flex-direction: column;
        }

        @media screen and (width < 400px) {
            padding-inline: 0px;
        }

        .contacts__hrefs {
            padding-inline: 10px;

            .contacts__list {
                display: flex;
                flex-direction: column;
                gap: 10px;
                margin-left: 20px;
            }

            .contacts__address {
                margin-left: 20px;
            }
        }

        .contacts__containert-map {
            display: flex;
            justify-content: center;
        }
    }
}
</style>
