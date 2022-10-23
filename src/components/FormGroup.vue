<template>
    <div v-for="(value, name) in fields" :key="value.id">
        <div class="formbold-mb-5">
            <label :for="id" class="formbold-form-label"> {{value.label}} </label>
            <input
                :type="value.type"
                :min= "value.min"
                :max= "value.max"
                :step="value.step"
                :name="name"
                :id="name"
                :placeholder="value.placeholder"
                v-model="value.value"
                class="formbold-form-input"
            />
        </div>
    </div>
</template>

<script>

export default {
  name: 'FormGroup',
  props: {
    fields : Object
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