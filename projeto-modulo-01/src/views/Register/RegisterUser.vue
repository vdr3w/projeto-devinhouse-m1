<template>
  <div>
    <h1 class="title">Register</h1>
    <v-form @submit.prevent="submitRegister" class="register-form">
      <v-alert v-if="errors.length" type="error">
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </v-alert>

      <v-text-field
        label="Full Name"
        v-model="name"
        :error-messages="nameError"
        required></v-text-field>

      <v-text-field
        label="Email"
        type="email"
        v-model="email"
        :error-messages="emailError"
        required></v-text-field>

      <v-text-field
        label="Password"
        type="password"
        v-model="password"
        :error-messages="passwordError"
        required></v-text-field>

      <v-text-field
        label="Confirm Password"
        type="password"
        v-model="confirmPassword"
        :error-messages="confirmPasswordError"
        required></v-text-field>

      <v-select
        label="Plan Type"
        v-model="type_plan"
        :items="['bronze', 'silver', 'gold']"></v-select>

      <v-btn type="submit">Register</v-btn>

      <p>
        <router-link to="/login">
          <v-btn>Go to Login</v-btn>
        </router-link>
      </p>
    </v-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      type_plan: "bronze",
      errors: [],
    };
  },
  computed: {
    nameError() {
      return this.name ? "" : "Full Name is required";
    },
    emailError() {
      return this.email ? "" : "Email is required";
    },
    passwordError() {
      return this.password ? "" : "Password is required";
    },
    confirmPasswordError() {
      if (!this.confirmPassword) return "Confirm Password is required";
      if (this.password !== this.confirmPassword) return "Passwords must match";
      return "";
    },
  },
  methods: {
    async submitRegister() {
      this.errors = [];

      if (this.nameError) this.errors.push(this.nameError);
      if (this.emailError) this.errors.push(this.emailError);
      if (this.passwordError) this.errors.push(this.passwordError);
      if (this.confirmPasswordError)
        this.errors.push(this.confirmPasswordError);

      if (!this.errors.length) {
        try {
          const response = await axios.post("http://localhost:3000/users", {
            name: this.name,
            email: this.email,
            password: this.password,
            type_plan: this.type_plan,
          });

          if (response.status === 201) {
            alert("Usuário cadastrado com sucesso!");
            this.$router.push("/login");
          }
        } catch (error) {
          const errorMessage =
            error.response?.data?.message ||
            "Não foi possível criar a conta nesse momento";
          this.errors.push(errorMessage);
        }
      }
    },
  },
};
</script>

<style scoped>
/* Your styles here */
</style>
