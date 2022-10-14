<template>
    <div class="formbold-main-wrapper">
            <div class="container">

                <p><input type="text" placeholder="email" v-model="email"/> </p>
                <p><input type="password" placeholder="password" v-model="password"/> </p>
              <button class="button-28" @click="register">Register</button>
              <button class="button-28" @click="signInWithGoogle">Register with Google</button>

            </div>
          Already have an account ? <router-link to="/login" @click = "switchToLogin()" class = "link">Log in !</router-link >
      </div>
  </template>


  <script setup>
    import {ref} from "vue";
    import {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
    import { useRouter} from 'vue-router' // import router
    const email = ref("");
    const password = ref("")
    const router = useRouter()

    const register = () => {
      // need .value because ref()
      createUserWithEmailAndPassword(getAuth(), email.value, password.value)
          // eslint-disable-next-line no-unused-vars
          .then((data) => {
            console.log("Successfully Registered !");
            router.push('/buildVPS') // redirected to the Home
          })
          .catch((error) => {
            console.log(error.code);
            alert(error.code);
          })

    };

    const signInWithGoogle = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(getAuth(), provider)
          .then((result) => {
              console.log(result.user);
              router.push("/buildVPS");
          })
          .catch((error) => {
            console.log(error.code);
          })
    };

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
  
  