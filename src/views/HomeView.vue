<script>
import { RouterLink } from "vue-router";
</script>

<template>

  <header>
    <div class="texts">
      <h1 class="texts__title">Bien Venidos</h1>
    </div>
  </header>

  <section class="buttons">

    <router-link class="buttons__btn buttons__btn--login" to="/login"
      >Login</router-link>
      
    <router-link class="buttons__btn buttons__btn--register" to="/register"
      >Register</router-link>

  </section>
</template>

<style scoped>
header {
  width: 100%;
  height: 750px;
  background-image: url(../assets/hero.jpg);
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  color: #fff;
  text-align: center;
  clip-path:()(100% 0, 100% 70%, 50% 100%, 0 70%, 0 0);
  margin-bottom: 50px;
}

.texts {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.texts__title {
  display: flex;
  align-content:center;
  font-size: 5.5rem;
  background-color: #f53131;
  
}

.buttons {
  display: flex;
  justify-content: space-evenly;
}

.buttons__btn {
  text-decoration: none;
  padding: 1.3em 3em;
  font-size: 19px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #fff;
  background-color: #282828;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}

.buttons__btn--login:hover {
  background-color: #070373;
  box-shadow: 5px 15px 20px rgba(69, 103, 241, 0.4);
  transform: translateY(-7px);
}

.buttons__btn--register:hover {
  background-color: #f53131;
  box-shadow: 0px 15px 20px rgba(229, 46, 46, 0.4);
  transform: translateY(-7px);
}

.buttons__btn:active {
  transform: translateY(-9px);
}
</style>
