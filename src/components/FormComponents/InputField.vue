<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
    nameField: string
    typeField: string
    russValue: string
}>()

const textField = ref<string>('')
const isValid = ref<boolean>(true)

function checkValid() {
    if (!textField.value) {
        isValid.value = false
    }
}

function focusField() {
    if (!isValid.value) {
        isValid.value = true
    }
}
</script>

<template>
    <div class="form__field">
        <label :for="nameField">{{ russValue }}:</label>
        <div class="error" v-if="!isValid">Заполните поле</div>
        <input
            :type="typeField"
            :id="nameField"
            :name="nameField"
            @blur="checkValid"
            @focus="focusField"
            v-model.trim="textField"
        />
    </div>
</template>

<style lang="scss" scoped>
@import '/src/assets/border.scss';
@import '/src/assets//flexCenter.scss';


.form__field {
    @include flex-center;
    gap: 7px;
    position: relative;

    label {
        font-size: 18px;
    }

    .error {
        position: absolute;
        font-size: 12px;
        color: red;
        top: 15px;
    }

    input,
    textarea {
        padding: 10px;
        box-sizing: border-box;
        text-align: center;
        border: $border;
    }

    input:focus,
    textarea:focus {
        border-color: $golden-color;
        outline: none;
        box-shadow: 0 0 15px $golden-color;
    }

    textarea {
        text-align: start;
        width: 250px;
        height: 300px;
    }
}
</style>
