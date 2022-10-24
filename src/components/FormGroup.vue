<template>
    <div v-for="(value, name) in fields.inputs" :key="value.id">
        <div class="formbold-mb-5">
            <label :for="name" class="formbold-form-label"> {{value.label}} </label>
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
    <div
        v-if = "fields?.selects"
    >
    
        <select 
            :name="select.name" 
            id="country_selection"
            v-for = "(select,index) in fields.selects"
            :key = "index"
        >
            <optgroup :label="select.name">
                <option
                v-for="(option,index) in select.options"
                    :key = "index"
                >
                    {{option}}
                </option>
            </optgroup>
        </select>
    
    </div>
</template>

<script>

export default {
  name: 'FormGroup',
  props: {
    fields : Object,
    
    },
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
    color: white;
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

.price{
  text-align : center;
  font-size: 15px;
}

#country_selection {
  background: none;
  border: none;
  color: white;
  margin-bottom: 10px;
  padding: 5px;
  font-size: 14px;
  text-transform: uppercase;
  width: 100%
}

#country_selection {
  padding: 0 !important;
}
</style>