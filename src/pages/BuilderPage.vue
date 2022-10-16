<template>

  <p class="text-hp">Here you have to choose how to build your vps builder. For this you have to choose your DISK STORAGE which corresponds to
    the memory that your VPS will have. MEMERY size corresponds to the RAM that your VPS will have and finally the power of your CPU.</p>
  <div class="formbold-main-wrapper">
    <div class="formbold-form-wrapper">
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
          <div class="container">
            <button class="button-28">GO !</button>
          </div>
          <br>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import FormGroup from '@/components/FormGroup.vue';
import BuildFields from '@/datas/BuildFields'

export default {
    name: "BuilderPage",
    data: () => {
      return {
        fields: BuildFields,
      }
    },
    components: { FormGroup }
}

</script>

<style scoped>
body {
  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
}
.container{
  display: flex;
  justify-content: center;
}

.text-hp{
  width: 100%;
  text-align: center;
  margin: auto;
  background-color: #D9D9D9;
  text-decoration: underline;
}

/* Button */
/* CSS */
.button-28 {
  text-align: center;
  border-radius: 6px;
  padding: 14px 32px;
  width: 20%;
  cursor: pointer;
  border-radius: 6px;
  padding: 32px;
  margin: 5px 0;
  border: 1px solid;
  appearance: none;
  background-color: transparent;
  box-sizing: border-box;
  color: #3B3B3B;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  line-height: normal;
  min-height: 60px;
  min-width: 0;
  outline: none;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;
  text-align: center;
  justify-content: center;
  display: flex;
  background-color: #D9D9D9;
}

.button-28:hover {
  color: #fff;
  background-color: #11151C;
  border: 2px solid black;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.button-28:active {
  box-shadow: none;
  transform: translateY(0);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .formbold-main-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #D9D9D9;
    padding: 48px;
  }
  
  .formbold-form-wrapper {
    margin: 0 auto;
    max-width: 700px;
    padding: 2px;
    width: 100%;
    background: #364156;
  }


</style>

