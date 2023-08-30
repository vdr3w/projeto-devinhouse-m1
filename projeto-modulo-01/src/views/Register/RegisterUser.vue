<template>
  <div>
    <h1 class="title">Cadastro</h1>
    <form @submit.prevent="submitRegister" class="register-form">
      <div class="error-container">
        <ul>
          <li v-if="nameError">{{ nameError }}</li>
          <li v-if="emailError">{{ emailError }}</li>
          <li v-if="passwordError">{{ passwordError }}</li>
          <li v-if="confirmPasswordError">{{ confirmPasswordError }}</li>
        </ul>
      </div>

      <input placeholder="Nome Completo" v-model="fullName" />
      <input type="email" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Senha" v-model="password" />
      <input
        type="password"
        placeholder="Confirme sua Senha"
        v-model="confirmPassword" />

      <select v-model="planType">
        <option value="bronze">Bronze</option>
        <option value="silver">Silver</option>
        <option value="gold">Gold</option>
      </select>

      <button class="submit-button" type="submit">Registrar</button>

      <p>
        <router-link to="/login">
          <button class="login-button">Ir para o Login</button>
        </router-link>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      planType: "bronze",

      nameError: "",
      emailError: "",
      passwordError: "",
      confirmPasswordError: "",
    };
  },
  methods: {
    submitRegister() {
      this.nameError = "";
      this.emailError = "";
      this.passwordError = "";
      this.confirmPasswordError = "";

      if (this.fullName === "")
        this.nameError = "Por favor, digite seu nome completo.";
      if (this.email === "") this.emailError = "Por favor, digite seu e-mail.";
      if (this.password === "")
        this.passwordError = "Por favor, digite sua senha.";
      if (this.confirmPassword === "")
        this.confirmPasswordError = "Por favor, confirme sua senha.";

      if (this.password !== this.confirmPassword)
        this.confirmPasswordError = "As senhas devem ser iguais";
    },
  },
};
</script>

<style scoped></style>
