<template>
  <div>
    <form @submit.prevent="submitLogin" class="login-form">
      <div class="error-container">
        <ul>
          <li v-if="emailError">{{ emailError }}</li>
          <li v-if="passwordError">{{ passwordError }}</li>
        </ul>
      </div>

      <input placeholder="Enter Email" v-model="userEmail" />
      <input
        type="password"
        placeholder="Enter Password"
        v-model="userPassword" />

      <button class="submit-button" type="submit">Log In</button>

      <p>
        <router-link to="/register">
          <button class="register-button">Sign Up</button>
        </router-link>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userEmail: "",
      userPassword: "",

      emailError: "",
      passwordError: "",
    };
  },
  methods: {
    submitLogin() {
      this.emailError = "";
      this.passwordError = "";
      if (this.userEmail === "") this.emailError = "Enter Email";
      if (this.userPassword === "") this.passwordError = "Enter Password";
    },
  },
};
</script>

<style scoped></style>
