<template>
  <v-card
    elevation="16"
    rounded="xl"
    class="ma-10 mx-auto pa-4 pa-md-6"
    min-width="310px"
    max-width="700px"
    :style="{
      backgroundColor: '#fff',
      color: 'var(--licorice)',
    }">
    <template v-slot:title>
      <div
        class="pa-2 d-flex align-center"
        :style="{ color: 'var(--rosewood)' }">
        <v-icon large class="mr-2">mdi-home</v-icon>
        <h1>Cadastro de Novo Aluno</h1>
      </div>
    </template>

    <v-card-text>
      <v-container fluid>
        <v-row>
          <v-col>
            <v-form ref="form" @submit.prevent="handleFormSubmit">
              <v-row>
                <v-col cols="12" md="6"
                  ><v-text-field
                    label="Nome Completo"
                    v-model="fullName"
                    :rules="[rules.required]"
                    required></v-text-field
                ></v-col>
                <v-col cols="12" md="6"
                  ><v-text-field
                    label="E-mail"
                    v-model="email"
                    type="email"
                    :rules="[rules.email]"
                    required>
                  </v-text-field
                ></v-col>
              </v-row>

              <v-row>
                <v-col cols="12" md="6"
                  ><v-text-field
                    label="Contato"
                    v-model="contact"
                    :rules="[rules.required]"
                    required></v-text-field
                ></v-col>
                <v-col cols="12" md="6"
                  ><v-text-field
                    label="Data de Nascimento"
                    v-model="dateOfBirth"
                    type="date"
                    :max="today"></v-text-field
                ></v-col>
              </v-row>

              <v-row>
                <v-col cols="12" md="6"
                  ><v-text-field
                    label="CEP"
                    v-model="cep"
                    :rules="[rules.required, rules.cep]"
                    @blur="fetchAddress"
                    required></v-text-field
                ></v-col>
                <v-col cols="12" md="6"
                  ><v-text-field
                    label="Logradouro"
                    v-model="street"
                    :rules="[rules.required]"
                    required></v-text-field
                ></v-col>
              </v-row>

              <v-row>
                <v-col cols="6" sm="2"
                  ><v-text-field
                    label="Estado"
                    v-model="province"
                    :rules="[rules.required]"
                    required></v-text-field
                ></v-col>
                <v-col cols="6" sm="2"
                  ><v-text-field
                    label="Bairro"
                    v-model="neighborhood"
                    :rules="[rules.required]"
                    required></v-text-field
                ></v-col>
                <v-col cols="6" sm="2"
                  ><v-text-field
                    label="Cidade"
                    v-model="city"
                    :rules="[rules.required]"
                    required></v-text-field
                ></v-col>
                <v-col cols="6" sm="6"
                  ><v-text-field
                    label="Complemento"
                    v-model="complement"></v-text-field
                ></v-col>
              </v-row>

              <v-btn
                prepend-icon="mdi-account-check-outline"
                stacked
                type="submit"
                class="ma-2"
                :style="{
                  backgroundColor: 'var(--rosewood)',
                  color: 'var(--jonquil)',
                }"
                >Cadastrar</v-btn
              >

              <router-link to="/alunos">
                <v-btn
                  append-icon="mdi-account-eye-outline"
                  stacked
                  class="ma-2"
                  :style="{
                    backgroundColor: 'var(--rosewood)',
                    color: 'var(--jonquil)',
                  }"
                  >VER ALUNOS</v-btn
                >
              </router-link>
            </v-form>
          </v-col>
        </v-row>

        <v-snackbar
          v-model="snackbar.show"
          :color="snackbar.color"
          :width="500"
          :height="80"
          :overlay="true"
          vertical>
          <div class="text-subtitle-1 pb-2">{{ snackbar.message }}</div>

          <p>Limpando campos..</p>

          <template v-slot:actions>
            <v-btn color="indigo" variant="text" @click="snackbar = false">
              Close
            </v-btn>
            <v-btn color="indigo" variant="text" @click="snackbar = false">
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const fullName = ref("");
const email = ref("");
const contact = ref("");
const dateOfBirth = ref("");
const cep = ref("");
const street = ref("");
const number = ref("");
const neighborhood = ref("");
const city = ref("");
const province = ref("");
const complement = ref("");
const today = new Date().toISOString().split("T")[0];

const snackbar = ref({ show: false, message: "", color: "" });

const rules = {
  required: (value) => !!value || "Campo obrigatório.",
  cep: (value) => value.length === 8 || "CEP deve ter 8 dígitos.",
  email: (value) => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(value) || "E-mail inválido.";
  },
};

const handleFormSubmit = () => {
  const payload = {
    name: fullName.value,
    email: email.value,
    contact: contact.value,
    date_birth: dateOfBirth.value,
    cep: cep.value,
    street: street.value,
    number: number.value,
    neighborhood: neighborhood.value,
    city: city.value,
    province: province.value,
    complement: complement.value,
  };

  axios
    .post("http://localhost:3000/students", payload)
    .then(() => {
      snackbar.value = {
        show: true,
        message: "Aluno cadastrado com sucesso!",
        color: "success",
      };
      setTimeout(() => {
        snackbar.value = { show: false, message: "", color: "" };
        clearForm();
      }, 2000); // 2000 milissegundos ou 2 segundos
    })
    .catch((error) => {
      console.error("Erro ao cadastrar aluno:", error);
      snackbar.value = {
        show: true,
        message: "Falha ao concluir cadastro de aluno.",
        color: "error",
      };
      setTimeout(() => {
        snackbar.value = { show: false, message: "", color: "" };
      }, 2000);
    });
};

const fetchAddress = async () => {
  if (cep.value.length === 8) {
    try {
      const response = await axios.get(
        `https://viacep.com.br/ws/${cep.value}/json/`
      );
      if (response.data.erro) {
        alert("CEP não encontrado");
      } else {
        street.value = response.data.logradouro;
        neighborhood.value = response.data.bairro;
        city.value = response.data.localidade;
        province.value = response.data.uf;
      }
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
    }
  }
};

const clearForm = () => {
  fullName.value = "";
  email.value = "";
  contact.value = "";
  dateOfBirth.value = "";
  cep.value = "";
  street.value = "";
  number.value = "";
  neighborhood.value = "";
  city.value = "";
  province.value = "";
  complement.value = "";
};
</script>
