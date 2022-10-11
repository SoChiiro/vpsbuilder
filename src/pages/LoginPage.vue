<template>
    <div class="formbold-main-wrapper">
      
      <div class="formbold-form-wrapper">
        
        <form action="" method="POST">
          <fieldset>
            <div v-for="field in fields" :key="field.id">
              <FormGroup
                :type= "field.type"
                :label= "field.label"
                :placeholder= "field.placeholder"
                />
            </div>
            <div class="container">
              <button class="button-28">Login</button>
            </div>
          </fieldset>
          Vous n'etes pas encore inscrit? <router-link to = "/register">Creez un compte !</router-link>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import FormGroup from '@/components/FormGroup.vue';
  import LoginFields from '@/datas/LoginFields.js'
  
  export default {
      // eslint-disable-next-line vue/multi-word-component-names
      name: "Login",
      data: () => {
        return {
          fields: LoginFields,
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
      background: #D9D9D9;
    }
  </style>
  
  