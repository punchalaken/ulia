<script setup lang="ts">
import InputField from './InputField.vue'
import TextAreaField from './TextAreaField.vue';

const fieldObjects = [
    {
        nameField: 'name',
        typeField: 'text',
        russValue: 'Имя'
    },
    {
        nameField: 'surname',
        typeField: 'text',
        russValue: 'Фамилия'
    },
    {
        nameField: 'email',
        typeField: 'email',
        russValue: 'Email'
    }
]
</script>

<template>
    <form>
        <InputField
            v-for="(item, index) in fieldObjects"
            :key="index"
            :type-field="item.typeField"
            :name-field="item.nameField"
            :type-input="item.typeField"
            :russ-value="item.russValue"
        />

        <TextAreaField/>

        <input type="submit" value="Send" class="form__send" />
    </form>
</template>

<style lang="scss" scoped>
form {
    font-family: 'Releway';
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    max-width: 360px;
    box-sizing: border-box;
    width: 90%;
    border: 2px solid #ac8349;
    padding-block: 20px;
    margin-block: 30px;

    .form__send {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 25px;
        background-color: #ac8349;
        width: 150px;
        height: 50px;
        border-radius: 40px;
        color: #ffffff;
    }
}
</style>
