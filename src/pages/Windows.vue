<template>
  <img src="@/assets/windows_logo.png" class="logo-windows" alt="logo_windows"/>

      <form action="" method="POST">
        <fieldset>
          <div v-for="field in fields" :key="field.id">
            <FormGroup
                :type= "field.type"
                :label= "field.label"
                :min= "field.min"
                :max = "field.max"
                :step= "field.step"
                :name= "field.name"
                :id= "field.id"
                :placeholder= "field.placeholder"
            />
          </div>
          <br>
        </fieldset>
      </form>

</template>

<script>
import BuildFields from "@/datas/BuildFields";
import FormGroup from "@/components/FormGroup";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Windows",
  data: () => {
    return {
      fields: BuildFields,
    }
  },
  components: { FormGroup }
}
</script>

<style scoped>

.logo-windows{
  margin-top: 10px;
  margin: auto;
  text-align: center;
  width: 200px;
  height: 200px;
}
</style>