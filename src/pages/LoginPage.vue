<template>
    <div class="formbold-main-wrapper">
      
      <div class="formbold-form-wrapper">
        <form action="" method="POST">
          <fieldset>
            <div class="container title">
              <p>WELCOME BACK !</p>
            </div>
              <FormGroup
                :fields="loginFields"
                />
            <div class="container">
              <input type="button" class="button-28" @click="logIn()" value= "Login"/>
            </div>
            <div v-if="error" class="container title">
              <p class="error">Pseudo and / or password incorrect</p>
            </div>
          </fieldset>
          Did not yet register ? <router-link to="/register" @click = "switchToRegister()" class = "link">Create an account !</router-link >
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import FormGroup from '@/components/FormGroup.vue';
import { router } from '@/router';
  
  export default {
      // eslint-disable-next-line vue/multi-word-component-names
      name: "Login",
      data: () => {
        return {
          error : false
        }
      },
      components: { FormGroup },
      methods:{
        switchToRegister() {this.$store.commit('setView','register')},
        switchToHome() {this.$store.commit('setView','home')},
        logIn(){
          if(this.loginFields.pseudo.value === "ZERO" && this.loginFields.password.value === "ZER@"){
            this.switchToHome()
            router.push("/home")
          }else{
            this.error = true
          }
        }
      },
      computed:{
        loginFields(){return this.$store.getters.getDatas.loginFields}
      }
  }
  
  </script>
  
  <style scoped>
  .error{
    color : red;
    font: 20px italic;
  }  
  .container{
    display: flex;
    justify-content: center;
  }
  .title{
    padding: 15px 0;
    font-size: 30px;
    font-weight: bold;
  }
  .link{
    border: 0;
    background: transparent;
    font-size: 16px;
    text-decoration: underline;
    color:blue;
    cursor: pointer;
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
      font-family:sans-serif;
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
      width: 100vw;
      height: 100vh;
    }
    
    .formbold-form-wrapper {
      margin: 0 auto;
      max-width: 700px;
      padding: 2px;
      width: 100%;
      background: #D9D9D9;
    }
  </style>
  
  