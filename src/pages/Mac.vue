<template>
  <div class="container">
    <div class="header">
      <img src="@/assets/logo.png" class="logo" alt="Logo" />
      <br>
      <div>
      <img src="@/assets/mac_logo.png" class="os-logo" alt="mac_logo" /><h1>MAC</h1></div>
      <br><br>
    </div>
    <Splide :options="{ rewind: true }" aria-label="Vue Splide Example">

      <SplideSlide
        v-for="(budget,name) in macFields"
        :key = "name"
      >
        <div class="form-content">
          <div class="form-logo">
            <h2>{{name}}</h2>
          </div>
          <div class="form">
            <form action="">
             <FormGroup
              :fields="budget"
              />
              <p class="cost" >{{cost(budget.inputs)}} €/month</p>
              <div class="form-buttons">
                <button type="submit">submit</button>
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
  methods:{
    cost(inputs){ 
                const cost = inputs['CPU CORE'].value*this.price.CORE
                      +inputs['RAM'].value*this.price.RAM
                      +inputs['STORAGE'].value*this.price.STORAGE
                      +inputs['BANDWIDTH'].value*this.price.BAND
                return Math.round(cost * 100)/100
    },
  },
  computed:{
    macFields(){ return this.$store.getters.getDatas.OS.Mac},
    price(){ return this.$store.getters.getDatas.PRICE },
        },
}


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
  text-align: center;
  display : flex;
}

.form-content {
  text-align:center;
  margin:auto;
  display:flex;
  flex-direction: column;
  align-items: center;
}

h1{
  margin: 40px auto;
  font-family: 'Ubuntu', sans-serif;
  font-size: 100px;
  font-weight: bold;
  color: #000000;
  text-align: center;
  letter-spacing: 5px;
  text-shadow: 2px 7px 5px rgba(0,0,0,0.3),
  0px -4px 10px rgba(255,255,255,0.3);
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
  background: #11151C;
  color: white;
  width: 90%;
  height: auto;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
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
  padding: 14px;
  border: none;
  color: white;
  background: #364156;
  text-transform: uppercase;
  font-size: 25px;
  cursor: pointer;
  margin : auto;
}


button:hover {
  background: dimgray;
}

Splide {
  display: block;
}

.cost{
  color: aqua;
  text-align : center;
  font-size: 40px;
  font-weight: bold;
}

SplideSlide{
  width: 70%;
  background: #11151C;
}
</style>