<template>
  <v-container
    class="fill-height"
    style="background-color: var(--lavender-blush)">
    <v-row justify="center" align="center">
      <v-card
        align="center"
        class="elevation-12 d-flex flex-column pa-3"
        style="
          background-color: var(--licorice);
          color: var(--jonquil);
          min-width: 300px;
        ">
        <v-card-title>
          <v-icon large style="width: 50px; height: 50px">mdi-home</v-icon>
        </v-card-title>
        <v-form ref="form" @submit.prevent="handleSubmit" class="login-form">
          <v-snackbar
            v-if="emailError || passwordError"
            style="color: var(--rosewood)">
            {{ emailError }} {{ passwordError }}
          </v-snackbar>

          <v-text-field
            label="Digite seu e-mail"
            v-model="usuario.email"
            :rules="[(value) => !!value || 'O e-mail é obrigatório!']"
            required
            style="color: var(--jonquil)">
          </v-text-field>

          <v-text-field
            label="Digite sua senha"
            type="password"
            v-model="usuario.password"
            :rules="[(value) => !!value || 'A senha é obrigatória!']"
            required
            style="color: var(--jonquil)">
          </v-text-field>

          <!-- Adicionando padding aos botões -->
          <v-row justify="space-between" class="pa-2">
            <v-btn
              type="submit"
              style="background-color: var(--rosewood); color: var(--jonquil)">
              Entrar
            </v-btn>
            <router-link to="/register">
              <v-btn
                prepend-icon="mdi-account-plus"
                style="
                  background-color: var(--rosewood);
                  color: var(--jonquil);
                ">
                Novo Usuário
              </v-btn>
            </router-link>
          </v-row>
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
:root {
  --jonquil: #f9c80e;
  --lavender-blush: #f6e8ea;
  --licorice: #22181c;
  --rosewood: #5a0001;
  --battleship-gray: #7e8987;
}

.v-snackbar {
  margin-top: 20px;
  color: var(--rosewood);
}
</style>
