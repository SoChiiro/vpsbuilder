<template>
  <div class="container">
    <div class="header">
      <img src="@/assets/logo.png" class="logo" alt="Logo" />
      <br>
      <img src="@/assets/windows_logo.png" class="os-logo" alt="windows_logo" />
      <br><br>
    </div>
    <Splide :options="{ rewind: true }" aria-label="Vue Splide Example">

      <SplideSlide
        v-for="(budget,name) in windowsFields"
        :key = "name"
      >
        <div class="form-content">
          <div class="form-logo">
            <h1>{{name}}</h1>
          </div>
          <div class="form">
            <form action="">
             <FormGroup
              :fields="budget"
              />
              <div class="form-buttons">
                <button type="submit">submit</button>
                <button type="button">customize</button>
              </div>
            </form>
          </div>
        </div>
      </SplideSlide>

    </Splide>
    <br>
    <br>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import FormGroup from '@/components/FormGroup.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Windows',
  components: { Splide, SplideSlide, FormGroup },
  computed:{
    windowsFields(){
      return this.$store.getters.getDatas.OS.Windows;
    }
  }
}

localStorage.setItem('name','Chris');
var myName = localStorage.getItem('name');
myName;

</script>

<style scoped>
.container {
  background: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
}


.logo {
  width: 200px;
  height: 200px;
}

.form-content {
  text-align:center;
  margin:auto;
  display:flex;
  flex-direction: column;
  align-items: center;
}

.os-logo {
  width: 100px;
  height: 100px;
  margin: auto;
  text-align: center;
  display: flex;
}
.form {
  margin-top: 2%;
  margin-left: auto;
  margin-right: auto;
  padding: 30px;
  background: black;
  color: white;
  width: 300px;
  height: auto;
}

input[type="text"], #country_selection {
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
input[type="text"]:focus {
  outline: none;
}

::placeholder {
  color: white;
  opacity: 1;
}
.form-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}
button {
  padding: 10px;
  border: none;
  color: white;
  background: #364156;
  text-transform: uppercase;
  font-size: 10px;
  cursor: pointer;
}

button:hover {
  background: dimgray;
}

Splide {
  display: block;
}

SplideSlide{
  width: 70%;
  background: #11151C;
}
</style>