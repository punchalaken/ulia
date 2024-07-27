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
.form__field {
    display: flex;
    flex-direction: column;
    align-items: center;
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
        border: 2px solid #ac8349;
    }

    input:focus,
    textarea:focus {
        border-color: #ac8349;
        outline: none;
        box-shadow: 0 0 15px #ac8349;
    }

    textarea {
        text-align: start;
        width: 250px;
        height: 300px;
    }
}
</style>
