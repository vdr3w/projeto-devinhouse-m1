<template>
  <div>
    <h1>Cadastro de Novo Aluno</h1>
    <form @submit.prevent="handleFormSubmit">
      <!-- Basic Information -->
      <div>
        <label for="fullName">Nome Completo (obrigatório)</label>
        <input type="text" id="fullName" v-model="fullName" required />
      </div>
      <div>
        <label for="email">E-mail (opcional)</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div>
        <label for="contact">Contato (obrigatório)</label>
        <input type="text" id="contact" v-model="contact" required />
      </div>
      <div>
        <label for="dateOfBirth">Data de Nascimento (opcional)</label>
        <input
          type="date"
          id="dateOfBirth"
          v-model="dateOfBirth"
          :max="today" />
      </div>
      <!-- Address Information -->
      <div>
        <label for="cep">CEP (obrigatório)</label>
        <input
          type="text"
          id="cep"
          v-model="cep"
          required
          @blur="fetchAddress" />
      </div>
      <div>
        <label for="street">Logradouro (obrigatório)</label>
        <input type="text" id="street" v-model="street" required />
      </div>
      <div>
        <label for="number">Número (obrigatório)</label>
        <input type="text" id="number" v-model="number" required />
      </div>
      <div>
        <label for="neighborhood">Bairro (obrigatório)</label>
        <input type="text" id="neighborhood" v-model="neighborhood" required />
      </div>
      <div>
        <label for="city">Cidade (obrigatório)</label>
        <input type="text" id="city" v-model="city" required />
      </div>
      <div>
        <label for="province">Estado (obrigatório)</label>
        <input type="text" id="province" v-model="province" required />
      </div>
      <div>
        <label for="complement">Complemento (opcional)</label>
        <input type="text" id="complement" v-model="complement" />
      </div>
      <button type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

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

const handleFormSubmit = () => {
  // Axios
};

const fetchAddress = () => {
  // Axios
};
</script>
