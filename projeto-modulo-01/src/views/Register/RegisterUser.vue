<template>
  <div
    style="
      background-color: var(--lavender-blush);
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    ">
    <v-card
      :elevation="5"
      rounded="xl"
      style="
        width: 500px;
        padding: 20px;
        background-color: white;
        color: var(--battleship-gray);
      ">
      <v-card-title class="text-h4" style="color: var(--licorice)">
        Cadastro de Usuário
      </v-card-title>

      <v-form @submit.prevent="submitRegister">
        <v-alert v-if="errors.length" type="error">
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
        </v-alert>

        <v-text-field
          label="Nome Completo"
          v-model="name"
          :error-messages="nameError"
          required
          style="color: var(--licorice)"></v-text-field>

        <v-text-field
          label="Email"
          type="email"
          v-model="email"
          :error-messages="emailError"
          required
          style="color: var(--licorice)"></v-text-field>

        <v-text-field
          label="Senha"
          type="password"
          v-model="password"
          :error-messages="passwordError"
          required
          style="color: var(--licorice)"></v-text-field>

        <v-text-field
          label="Confirmar Senha"
          type="password"
          v-model="confirmPassword"
          :error-messages="confirmPasswordError"
          required
          style="color: var(--licorice)"></v-text-field>

        <v-select
          label="Selecione seu Plano"
          v-model="type_plan"
          :items="['bronze', 'silver', 'gold']"
          style="color: var(--licorice)"></v-select>

        <div
          style="
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
          ">
          <v-btn
            prepend-icon="$vuetify"
            stacked
            type="submit"
            style="background-color: var(--jonquil); color: var(--rosewood)">
            <p class="font-weight-medium">Registrar</p>
          </v-btn>

          <router-link to="/login">
            <v-btn
              style="background-color: var(--rosewood); color: var(--jonquil)">
              <p class="font-weight-medium">Ir Para Login</p>
            </v-btn>
          </router-link>
        </div>
      </v-form>
    </v-card>
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
      return this.name ? "" : "Por favor, digite seu nome completo.";
    },
    emailError() {
      return this.email ? "" : "Por favor, o email é obrigatório.";
    },
    passwordError() {
      return this.password ? "" : "Por favor, a senha é obritatória.";
    },
    confirmPasswordError() {
      if (!this.confirmPassword)
        return "Por favor, digite novamente sua senha.";
      if (this.password !== this.confirmPassword)
        return "As senhas precisam ser iguais.";
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

<style>
:root {
  --jonquil: #f9c80e;
  --lavender-blush: #f6e8ea;
  --licorice: #22181c;
  --rosewood: #5a0001;
  --battleship-gray: #7e8987;
}
</style>
