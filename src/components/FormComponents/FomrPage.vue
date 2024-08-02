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
@import '/src/assets/border.scss';
@import '/src/assets//flexCenter.scss';


form {
    font-family: 'Releway';
    @include flex-center;
    gap: 30px;
    max-width: 360px;
    box-sizing: border-box;
    width: 90%;
    border: $border;
    padding-block: 20px;
    margin-block: 30px;

    .form__send {
        @include flex-center;
        margin-top: 25px;
        background-color: $golden-color;
        width: 150px;
        height: 50px;
        border-radius: 40px;
        color: #ffffff;
    }
}
</style>
