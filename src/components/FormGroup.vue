<template>
    <div class="formbold-mb-5">
        <label :for="id" class="formbold-form-label"> {{label}} </label>
        <input
            :type="type"
            :min= "min"
            :max= "max"
            :step="step"
            :name="name"
            :id="id"
            :placeholder="placeholder"
            :click="clickHandler"
            @click="clickHandler"
            class="formbold-form-input"
        />
    </div>
</template>

<script>

export default {
  name: 'FormGroup',
  props: {
        type: String,
        label: String,
        min: String,
        max: String,
        step: String,
        name: String,
        id: String,
        placeholder: String,
        clickHandler: Function
    }
}

</script>

<style scoped>
.formbold-mb-5 {
    margin-bottom: 20px;
    display : flex;
    justify-content: space-between;
    margin: 10% 5%;
}
.formbold-form-label {
    display: block;
    font-weight: bold;
    font-size: 16px;    
    align-self : center;
    color: #07074d;
    margin-bottom: 12px;
    width : 25%;
}

.formbold-form-input {
    width: 75%;
    padding: 12px 24px;
    border-radius: 6px;
    border: 1px solid #e0e0e0;
    background: white;
    font-weight: 500;
    font-size: 16px;
    color: #6b7280;
    outline: none;
    resize: none;
}
</style>