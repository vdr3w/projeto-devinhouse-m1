<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-card
        align="center"
        min-width="300"
        max-width="500"
        class="elevation-12">
        <v-card-title><v-icon icon="$vuetify"></v-icon> </v-card-title>
        <v-form ref="form" @submit.prevent="handleSubmit" class="login-form">
          <v-snackbar v-if="emailError || passwordError">
            {{ emailError }} {{ passwordError }}
          </v-snackbar>

          <v-text-field
            label="Digite seu e-mail"
            v-model="usuario.email"
            :rules="[(value) => !!value || 'O e-mail é obrigatório!']"
            required></v-text-field>

          <v-text-field
            label="Digite sua senha"
            type="password"
            v-model="usuario.password"
            :rules="[(value) => !!value || 'A senha é obrigatória!']"
            required></v-text-field>

          <v-btn type="submit">Entrar</v-btn>

          <p>
            <router-link to="/register">
              <v-btn prepend-icon="mdi-account-plus"> Novo Usuário </v-btn>
            </router-link>
          </p>
        </v-form>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      usuario: {
        email: "",
        password: "",
      },
      emailError: "",
      passwordError: "",
    };
  },
  methods: {
    async handleSubmit() {
      const { valid } = await this.$refs.form.validate();

      if (!valid) {
        this.emailError = "O e-mail é obrigatório!";
        this.passwordError = "A senha é obrigatória!";
        return;
      }

      try {
        const result = await axios.post(
          "http://localhost:3000/sessions",
          this.usuario
        );

        if (result.status == 200) {
          localStorage.setItem("user-info", JSON.stringify(result.data));
          this.$router.push("/");
        }
      } catch (error) {
        console.log(error.response.data.error);
        this.emailError = "Usuário não cadastrado!";
        this.passwordError = "";
        alert("Usuário não cadastrado!");
      }
    },
  },
};
</script>

<style>
.v-snackbar {
  margin-top: 20px;
}
</style>
