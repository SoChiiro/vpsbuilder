<template>
  <div class="formbold-main-wrapper">
    
    <div class="formbold-form-wrapper">
      <form action="" method="POST">
        <fieldset>
          <div class="container">
            <p class="title">SIGN IN</p>
          </div>
            <FormGroup
              :fields="registerFields"
              />
          <div class="container">
            <router-link to="/login" class="button-28" @click="switchToLogin()">REGISTER</router-link>
            <button class="button-28" type="reset">RESET</button>
          </div>
        </fieldset>
        Already have an account ? <router-link to="/login" @click = "switchToLogin()" class = "link">Log in !</router-link >
      </form>
    </div>
  </div>
</template>

<script>
import FormGroup from '@/components/FormGroup.vue';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Login",
    data: () => {
      return {
      }
    },
    components: { FormGroup },
    methods:{
      switchToRegister() {this.$store.commit('setView','register')},
      switchToHome() {this.$store.commit('setView','home')},
      switchToLogin() {this.$store.commit('setView','login')}
    },
    computed:{
      registerFields(){return this.$store.getters.getDatas.registerFields}
    }
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
    box-shadow: #00000040 0 8px 15px;
    transform: translateY(-2px);
  }
  
  .button-28:active {
    box-shadow: none;
    transform: translateY(0);
  }
  .link{
    border: 0;
    background: transparent;
    font-size: 16px;
    text-decoration: underline;
    color:blue;
    cursor: pointer;
  }
  * {
      font-family:sans-serif;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .formbold-main-wrapper {
      display: flex;
      flex-direction: column;
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
    .formbold-mb-5 {
      display: flex;
      flex-direction: column  ;
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
/* form */
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
.title{
  font-size: 40px;
  font-weight: bold;
}
  </style>

